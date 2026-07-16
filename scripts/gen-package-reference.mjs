import assert from 'node:assert/strict';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parsePhp(source, relPath) {
  const cls = source.match(/\bclass\s+(\w+)(?:\s+extends\s+(\w+))?/);
  if (!cls) return null; // skip interfaces/traits/enums for now
  const kind = relPath.replace(/\/[^/]+$/, ''); // dir part
  const methods = [...source.matchAll(/public\s+function\s+(\w+)\s*\(/g)]
    .map(m => m[1])
    .filter(n => n !== '__construct' && !n.startsWith('scope'));
  const fillMatch = source.match(/\$fillable\s*=\s*\[([\s\S]*?)\]/);
  const fillable = fillMatch
    ? [...fillMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1])
    : [];
  const relations = [...source.matchAll(
    /public\s+function\s+(\w+)\s*\([^)]*\)\s*(?::\s*\w+\s*)?\{[^}]*\$this->(?:belongsTo|hasMany|hasOne|belongsToMany|morphTo|morphMany|morphOne)\b/g
  )].map(m => m[1]);
  return { name: cls[1], kind, extends: cls[2] || null, methods, fillable, relations };
}

export function describe(info) {
  const top = info.kind.split('/').pop();
  if (top === 'Models') {
    const rel = info.relations.length ? `, relations: ${info.relations.join(', ')}` : '';
    return `Eloquent model - ${info.fillable.length} fillable field${info.fillable.length === 1 ? '' : 's'}${rel}.`;
  }
  if (top.endsWith('Controllers') || info.kind.includes('Controllers')) {
    return `HTTP controller - actions: ${info.methods.join(', ') || 'none'}.`;
  }
  if (top === 'Requests') return `Form request - validation rules for ${info.name.replace(/Request$/, '')}.`;
  if (top === 'Events') return `Domain event.`;
  if (top === 'Listeners') return `Event listener.`;
  if (top === 'Seeders') return `Database seeder.`;
  if (top === 'Providers') return `Service provider.`;
  const ext = info.extends ? ` (extends ${info.extends})` : '';
  return `${top} class${ext} - methods: ${info.methods.join(', ') || 'none'}.`;
}

const HERE = dirname(fileURLToPath(import.meta.url));
export const PACKAGES_DIR = join(HERE, '..', '..', 'ZerpPackages');
const OUT_DIR = join(HERE, '..', 'docs-developer', '50-reference');
const INCLUDE = ['Models', 'Http/Controllers', 'Http/Controllers/Api', 'Events', 'Listeners', 'Http/Requests', 'Providers', 'Support', 'Database/Seeders'];
const GROUP_LABEL = {
  'Models': 'Models', 'Http/Controllers': 'Controllers', 'Http/Controllers/Api': 'API Controllers',
  'Events': 'Events', 'Listeners': 'Listeners', 'Http/Requests': 'Requests',
  'Providers': 'Providers', 'Support': 'Support', 'Database/Seeders': 'Seeders',
};

function walk(dir, base = dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, base));
    else if (e.name.endsWith('.php')) out.push(p.slice(base.length + 1));
  }
  return out;
}

function readJson(p) { try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return {}; } }

function generate() {
  rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });
  const pkgs = readdirSync(PACKAGES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && existsSync(join(PACKAGES_DIR, d.name, 'src')))
    .map(d => d.name).sort();

  const index = [];
  let pos = 1;
  for (const pkg of pkgs) {
    const root = join(PACKAGES_DIR, pkg);
    const composer = readJson(join(root, 'composer.json'));
    const mod = readJson(join(root, 'module.json'));
    const rels = walk(join(root, 'src'));
    const groups = {};
    for (const rel of rels) {
      const kindDir = rel.replace(/\/[^/]+$/, '');
      if (!INCLUDE.includes(kindDir)) continue;
      const info = parsePhp(readFileSync(join(root, 'src', rel), 'utf8'), rel);
      if (!info) continue;
      (groups[kindDir] ||= []).push(info);
    }
    const total = Object.values(groups).reduce((n, a) => n + a.length, 0);
    index.push({ pkg, name: composer.name || `zerp/${pkg}`, desc: composer.description || mod.alias || '', total });

    let md = `---\ntitle: ${composer.name || pkg}\nsidebar_position: ${pos++}\n---\n\n`;
    md += `# \`${composer.name || 'zerp/' + pkg}\`\n\n`;
    if (composer.description) md += `${composer.description}\n\n`;
    if (mod.version != null) md += `**Module version:** ${mod.version}\n\n`;
    md += `**Classes documented:** ${total}\n\n`;
    for (const kind of INCLUDE) {
      const list = groups[kind];
      if (!list) continue;
      md += `## ${GROUP_LABEL[kind]}\n\n`;
      for (const info of list.sort((a, b) => a.name.localeCompare(b.name))) {
        md += `### \`${info.name}\`\n\n${describe(info)}\n\n`;
      }
    }
    writeFileSync(join(OUT_DIR, `${pkg}.md`), md);
  }

  index.sort((a, b) => a.pkg.localeCompare(b.pkg));
  let idx = `---\ntitle: Package Reference\nsidebar_position: 0\n---\n\n# Package Reference\n\n`;
  idx += `Auto-generated class reference for all \`zerp/*\` packages. Regenerate with \`npm run gen:reference\`.\n\n`;
  idx += `| Package | Description | Classes |\n|---|---|---|\n`;
  for (const r of index) idx += `| [${r.name}](./${r.pkg}) | ${r.desc.replace(/\|/g, '\\|')} | ${r.total} |\n`;
  writeFileSync(join(OUT_DIR, 'index.md'), idx);
  writeFileSync(join(OUT_DIR, '_category_.json'), JSON.stringify({ label: 'Package Reference', position: 50, link: { type: 'doc', id: 'index' } }, null, 2));
  console.log(`Generated ${index.length} package pages + index.`);
}

function selfcheck() {
  const model = `<?php
namespace Zerp\\Lead\\Models;
use Illuminate\\Database\\Eloquent\\Model;
class Lead extends Model {
  protected $fillable = ['name','email','user_id'];
  public function pipeline() { return $this->belongsTo(Pipeline::class); }
  public function scopeActive($q) { return $q; }
}`;
  const info = parsePhp(model, 'Models/Lead.php');
  assert.equal(info.name, 'Lead');
  assert.equal(info.kind, 'Models');
  assert.equal(info.extends, 'Model');
  assert.deepEqual(info.fillable, ['name', 'email', 'user_id']);
  assert.deepEqual(info.relations, ['pipeline']);
  const desc = describe(info);
  assert.match(desc, /Eloquent model/);
  assert.match(desc, /3 fillable/);

  const ctrl = `<?php
namespace Zerp\\Lead\\Http\\Controllers;
class LeadController extends Controller {
  public function index() {}
  public function store(StoreLeadRequest $request) {}
}`;
  const c = parsePhp(ctrl, 'Http/Controllers/LeadController.php');
  assert.equal(c.kind, 'Http/Controllers');
  assert.deepEqual(c.methods, ['index', 'store']);
  assert.match(describe(c), /controller/i);
  console.log('selfcheck OK');
}

if (process.argv.includes('--selfcheck')) selfcheck();
else generate();
