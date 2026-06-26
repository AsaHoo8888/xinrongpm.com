import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  MapPin,
  Menu,
  Quote,
  Workflow,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Project Cases | Xinrongplas Machinery",
  description:
    "Explore Xinrongplas project cases and customer feedback from Romania, Turkey, Hungary, Cambodia, Nigeria, Tajikistan, Senegal, Georgia, and Uzbekistan.",
};

const heroImage = "/images/page-heroes/xinrongplas-about-banner-hero.jpg";

const cases = [
  {
    country: "Romania",
    customer: "Mr. Eusebiu",
    equipment: "Total 3 lines - PE20-630mm three layers pipe extrusion line",
    summary: "Total 3 Lines",
    quote:
      "This is the first time our company has cooperated with Xinrong. There are 3 production lines in total, and each one is running great! I inspected the factory before placing the order and they were really professional. Sales and engineers were very responsive! thanks everyone!",
    image: "/images/project-cases/xinrongplas-project-case-romania-pe630-three-layer-pipe-extrusion-line.jpg",
    alt: "Xinrongplas project case in Romania for PE20-630mm three-layer pipe extrusion line",
  },
  {
    country: "Turkey",
    customer: "Mr. KAZIM",
    equipment: "Since 2017, purchased more than 20 production lines; PE solid wall pipe reaches 1200mm",
    summary: "20+ Production Lines",
    quote:
      "We have purchased a lot of equipment from Xinrong from 2016 to 2024. Every engineer and salesman has provided very attentive service. The quality of the equipment is beyond doubt. Very Good! Thanks!",
    image: "/images/project-cases/xinrongplas-project-case-turkey-pe1200-solid-wall-pipe-line.jpg",
    alt: "Xinrongplas project case in Turkey for PE1200 solid wall pipe extrusion line",
  },
  {
    country: "Hungary",
    customer: "Mr. Csaba",
    equipment: "PE20-110 high-speed pipe production line, high configuration",
    summary: "High-Speed PE Line",
    quote:
      "Thanks to the engineer for debugging for us, everything went smoothly from placing the order to debugging the equipment. Thank you to all the staff at Xinrong.",
    image: "/images/project-cases/xinrongplas-project-case-hungary-pe110-high-speed-pipe-line.jpg",
    alt: "Xinrongplas project case in Hungary for PE20-110 high-speed pipe production line",
  },
  {
    country: "Cambodia",
    customer: "Soknov",
    equipment: "PE630 Pipe Extrusion Line",
    summary: "PE630 Line",
    quote:
      "After long time working, Xinrong's machine is in line with our expectations. After sale service is even beyond our expectations!",
    image: "/images/project-cases/xinrongplas-project-case-cambodia-pe630-pipe-extrusion-line.jpg",
    alt: "Xinrongplas project case in Cambodia for PE630 pipe extrusion line",
  },
  {
    country: "Nigeria",
    customer: "Mr. Pawan",
    equipment: "PE1200 pipe production line",
    summary: "PE1200 Line",
    quote:
      "Before we placed an order, we carefully inspected the factory. There are factories in many countries that you can visit. So we chose Xinrong. The equipment is very good, and the engineers and sales responded very professionally. It ran smoothly! Thank you everyone for your efforts.",
    image: "/images/project-cases/xinrongplas-project-case-nigeria-pe1200-pipe-production-line.jpg",
    alt: "Xinrongplas project case in Nigeria for PE1200 pipe production line",
  },
  {
    country: "Tajikistan",
    customer: "Faruh",
    equipment: "PE63, PE250, PE630 pipe extrusion lines and PE400 double wall corrugated pipe extrusion line",
    summary: "Repeat Customer",
    quote:
      "Before our company purchased several PE pipe extrusion line from Xinrong, they are working without problem. So we choose Xinrong again for PE double wall corrugated pipe extrusion line, until now the machine is working good.",
    image: "/images/project-cases/xinrongplas-project-case-tajikistan-pe-corrugated-pipe-line.jpg",
    alt: "Xinrongplas project case in Tajikistan for PE and double wall corrugated pipe extrusion lines",
  },
  {
    country: "Senegal",
    customer: "Mr. Kagny",
    equipment:
      "3 lines - PE180-315 two layers pipe production line, 1 line - PVC250 high speed production line",
    summary: "3 PE Lines + 1 PVC Lines",
    quote:
      "Thanks to Xinrong sales and engineers for their efforts. The production line is perfect and the quality is very good.",
    image: "/images/project-cases/xinrongplas-project-case-senegal-pe315-two-layer-pipe-line.jpg",
    alt: "Xinrongplas project case in Senegal for PE180-315 two-layer pipe production line",
  },
  {
    country: "Georgia",
    customer: "IIo",
    equipment: "PE450 pipe extrusion line, PE200 double wall corrugated pipe line, and PE800 double wall corrugated pipe line",
    summary: "Multiple Lines",
    quote:
      "Thanks for all works done by Xinrong. We are satisfied with Xinrong's machinery, Xinrong's service and Xinrong's people.",
    image: "/images/project-cases/xinrongplas-project-case-georgia-pe800-corrugated-pipe-line.jpg",
    alt: "Xinrongplas project case in Georgia for PE and double wall corrugated pipe lines",
  },
  {
    country: "Uzbekistan",
    customer: "Izom Sadiev",
    equipment: "PPR63, PVC110, PE250, and PE1200 pipe extrusion lines",
    summary: "Mixed Pipe Lines",
    quote:
      "Thanks for all works done by Xinrong. We are satisfied with Xinrong's machinery, Xinrong's service and Xinrong's people.",
    image: "/images/project-cases/xinrongplas-project-case-uzbekistan-multiple-pipe-extrusion-lines.jpg",
    alt: "Xinrongplas project case in Uzbekistan for PPR, PVC, and PE pipe extrusion lines",
  },
  {
    country: "Kazakhstan",
    customer: "Darkhan",
    equipment: "PPR63 Double Layer Pipe Extruder Line, PE250 Pipe Extrusion Line",
    summary: "PPR & PE Lines",
    quote:
      "We have checked many companies and finally cooperate with Xinrong. After more than two years working, machine is still working in good condition.",
    image: "/images/project-cases/xinrongplas-project-case-kazakhstan-darkhan-pipe-extrusion-lines.jpg",
    alt: "Xinrongplas project case in Kazakhstan for PPR63 double layer pipe extruder line and PE250 pipe extrusion line",
  },
  {
    country: "Indian",
    customer: "Parveen",
    equipment: "PE315 Pipe Extrusion Line, PE600 Double Wall Corrugated Pipe Extrusion Line",
    summary: "PE & Corrugated Lines",
    quote:
      "I am very happy to give feed back about Xinrong and its machinery. Service in time, response time within 12 hours, machine is good and this time machinery is working in our workshop continuously without stopping for 20 days. We are happy to get machiney from Xinrong.",
    image: "/images/project-cases/xinrongplas-project-case-indian-parveen-pipe-extrusion-lines.jpg",
    alt: "Xinrongplas project case in Indian for PE315 pipe extrusion line and PE600 double wall corrugated pipe extrusion line",
  },
  {
    country: "Dubai",
    customer: "Mohamed",
    equipment: "PE710 Pipe Extrusion Line, PE2000 Steel Belt Reinforced Corrugated Pipe Extrusion Line",
    summary: "Large Diameter Lines",
    quote:
      "We are very satisfied with Xinrong's machine. We are confident to extend our market with quality products produced by quality machines.",
    image: "/images/project-cases/xinrongplas-project-case-dubai-mohamed-pipe-extrusion-lines.jpg",
    alt: "Xinrongplas project case in Dubai for PE710 pipe extrusion line and PE2000 steel belt reinforced corrugated pipe extrusion line",
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function productHref(value) {
  return `/products/${slugify(value)}`;
}

function NavLinks() {
  return (
    <>
      <a className="nav-link" href="/">
        Home
      </a>
      <div className="nav-dropdown">
        <a className="nav-link dropdown-trigger" href="/products">
          Products <ChevronDown size={14} aria-hidden="true" />
        </a>
        <div className="dropdown-panel">
          {productNav.map((item) => (
            <a href={productHref(item)} key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <a className="nav-link" href="/video">
        Video
      </a>
      <a className="nav-link nav-link-active" href="/cases">
        Cases
      </a>
      <div className="nav-dropdown">
        <a className="nav-link dropdown-trigger" href="/about">
          About <ChevronDown size={14} aria-hidden="true" />
        </a>
        <div className="dropdown-panel">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/certificates">Certificates</a>
          <a href="/news">News</a>
        </div>
      </div>
      <a className="nav-link" href="/contact">
        Contact
      </a>
    </>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Xinrongplas Home">
          <img
            src="/images/brand/xinrongplas-logo.png"
            alt="Xinrongplas"
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLinks />
        </nav>
        <div className="header-actions">
          <HeaderSearch />
          <a className="quote-button" href="/contact">
            Get a Quote
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <Menu size={22} aria-hidden="true" />
            </summary>
            <div className="mobile-panel">
              <NavLinks />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main className="cases-page-main">
        <section className="cases-hero">
          <img
            src={heroImage}
            alt="Xinrongplas global plastic pipe extrusion project cases"
            title="Xinrongplas global plastic pipe extrusion project cases"
            width="4134"
            height="708"
            loading="eager"
            decoding="async"
          />
          <div className="cases-hero-overlay" />
          <div className="container cases-hero-copy">
            <span>
              <Globe2 size={18} aria-hidden="true" />
              Global Expertise
            </span>
            <h1>Project Cases</h1>
            <p>
              Customer feedback and successful plastic pipe extrusion machines
              running across the world.
            </p>
            <div className="cases-hero-stats" aria-label="Project case highlights">
              <strong>12 Featured Cases</strong>
              <strong>80+ Export Countries</strong>
              <strong>Since 1996</strong>
            </div>
          </div>
        </section>

        <section className="cases-grid-section" id="cases">
          <div className="container cases-section-heading">
            <span className="section-kicker">What Customers Are Saying</span>
            <h2>Voice From Our Customers</h2>
            <p>
              These projects cover PE, PPR, PVC, large diameter solid wall pipe,
              and double wall corrugated pipe extrusion applications.
            </p>
          </div>

          <div className="container cases-grid">
            {cases.map((item) => (
              <article className="project-case-card" key={`${item.country}-${item.customer}`}>
                <a href={item.image} target="_blank" rel="noreferrer" aria-label={`Open ${item.country} project photo`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    title={item.alt}
                    width="1000"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="project-case-body">
                  <div className="project-case-meta">
                    <span>
                      <MapPin size={15} aria-hidden="true" />
                      {item.country}
                    </span>
                    <strong>{item.customer}</strong>
                  </div>
                  <h3>{item.equipment}</h3>
                  <blockquote>
                    <Quote size={18} aria-hidden="true" />
                    {item.quote}
                  </blockquote>
                  <div className="project-case-foot">
                    <small>{item.summary}</small>
                    <span>
                      Verified Partner <CheckCircle2 size={15} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cases-cta-section">
          <div className="container cases-cta-card">
            <div>
              <Workflow size={38} aria-hidden="true" />
              <h2>Want to Check Our Running Machinery?</h2>
              <p>
                Contact our sales engineers to learn about nearby reference
                installations, similar extrusion machinery, and pipe
                applications for your ongoing pipe production project.
              </p>
            </div>
            <a className="primary-button" href="/contact">
              Contact Now <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
