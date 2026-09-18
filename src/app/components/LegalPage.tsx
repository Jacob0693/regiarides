import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./SiteShell";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export function LegalPage({ eyebrow, title, summary, effectiveDate, sections }: {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <main className="legal-page">
      <SiteHeader />
      <header className="legal-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
        <span>Effective {effectiveDate}</span>
      </header>
      <div className="legal-layout">
        <aside className="legal-index" aria-label={`${title} sections`}>
          <p>On this page</p>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>
            ))}
          </ol>
        </aside>
        <article className="legal-content">
          {sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </section>
          ))}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
