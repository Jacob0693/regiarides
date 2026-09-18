import type { Metadata } from "next";
import { FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";
import { faqGroups } from "../content/site-content";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about requesting, comparing, and selecting transportation quotes through Regia Rides.", alternates: { canonical: "/faq" } };

export default function FaqPage(){return <InteriorLayout>
  <InteriorHero eyebrow="FREQUENTLY ASKED QUESTIONS" title="Answers for a better-planned ride." copy="Understand your choices, prepare the right trip details, and know what to review before selecting a transportation quote." image="/images/regia-final-cta.webp" />
  <section className="interior-section faq-page-intro"><div className="interior-section-heading"><p className="eyebrow">CUSTOMER QUESTIONS</p><h2>From the first request to a confirmed ride.</h2><p>Browse the topics below for practical answers about ride experiences, provider quotes, vehicles, airports, and special requests.</p></div></section>
  <div className="faq-groups">
    {faqGroups.map((group, groupIndex)=><section className="interior-section faq-group" key={group.title}>
      <div className="faq-group-heading"><span>{String(groupIndex+1).padStart(2,"0")}</span><h2>{group.title}</h2><p>{group.description}</p></div>
      <div className="faq-list">{group.items.map(([question,answer],index)=><details key={question} open={groupIndex===0&&index===0}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
    </section>)}
  </div>
  <FinalCta />
 </InteriorLayout>}
