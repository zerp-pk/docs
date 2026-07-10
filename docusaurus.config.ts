import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zerp Docs',
  tagline: 'User and developer documentation for Zerp',
  favicon: 'img/favicon.png',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.zerp.pk',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'zerp-pk',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs-user',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/zerp-pk/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'docs-developer',
        routeBasePath: 'developer',
        sidebarPath: './sidebarsDeveloper.ts',
        editUrl: 'https://github.com/zerp-pk/docs/tree/main/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/zerp-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Zerp Logo',
        src: 'img/logo-light-mode.png',
        srcDark: 'img/logo-dark-mode.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          docsPluginId: 'default',
          position: 'left',
          label: 'User Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          docsPluginId: 'developer',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          href: 'https://zerp.pk/pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          href: 'https://github.com/zerp-pk/zerp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'User Docs', to: 'docs/introduction'},
            {label: 'Developer Docs', to: 'developer/getting-started/introduction'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub Discussions', href: 'https://github.com/zerp-pk/zerp/discussions'},
            {label: 'Issues', href: 'https://github.com/zerp-pk/zerp/issues'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Zerp (main app)', href: 'https://github.com/zerp-pk/zerp'},
            {label: 'All modules', href: 'https://github.com/orgs/zerp-pk/repositories'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zerp. Released under the MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
