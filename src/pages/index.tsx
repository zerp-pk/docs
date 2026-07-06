import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocsCards() {
  return (
    <section className={styles.cards}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={clsx('card', styles.card)}>
              <div className="card__header">
                <Heading as="h2">User Docs</Heading>
              </div>
              <div className="card__body">
                <p>
                  Learn how to use Zerp — logging in, managing users, and
                  every feature module from Accounting to Support Ticket.
                </p>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--primary button--block"
                  to="/docs/introduction">
                  Read the User Docs
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={clsx('card', styles.card)}>
              <div className="card__header">
                <Heading as="h2">Developer Docs</Heading>
              </div>
              <div className="card__body">
                <p>
                  Learn how Zerp is built — the core app + module package
                  architecture, local dev setup, Docker/CI, the Media
                  Library, and how to contribute.
                </p>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--primary button--block"
                  to="/developer/introduction">
                  Read the Developer Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="User and developer documentation for Zerp, the Laravel + Inertia + React ERP/SaaS platform.">
      <HomepageHeader />
      <main>
        <DocsCards />
      </main>
    </Layout>
  );
}
