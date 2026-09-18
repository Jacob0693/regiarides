import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../../components/SiteShell";
import { services } from "../../content/site-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} Quotes`, description: service.summary, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <InteriorLayout>
      <InteriorHero eyebrow={service.eyebrow} title={service.title} copy={service.summary} image={service.image} imageAlt={service.alt}>
        <Link className="button button-primary" href={`/request?trip=${service.slug}`}>Start Your Request <ArrowIcon /></Link>
      </InteriorHero>
      <section className="interior-section detail-intro-section">
        <div className="interior-section-heading"><p className="eyebrow">PLANNED AROUND YOUR JOURNEY</p><h2>{service.detail}</h2></div>
        <div className="detail-columns">
          <article><h3>Well suited for</h3><ul>{service.bestFor.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></article>
          <article><h3>Details to include</h3><ul>{service.requestDetails.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul></article>
        </div>
      </section>
      <section className="interior-section process-section">
        <div className="interior-section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>One request. A considered choice.</h2></div>
        <div className="interior-process-grid">{service.process.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{["Request", "Provider review", "Compare & select"][index]}</h3><p>{item}</p></article>)}</div>
        <p className="interior-note">Vehicle selection is optional. Choose a category, request a preferred make or model, or select Recommend a Vehicle. When a recommendation is requested, each participating provider may include up to two suitable vehicle options based on passenger and luggage details.</p>
      </section>
      <FinalCta title={`Request ${service.title.toLowerCase()} quotes for your next trip.`} href={`/request?trip=${service.slug}`} />
    </InteriorLayout>
  );
}
