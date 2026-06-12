import {
  ArrowRight,
  Award,
  ChevronDown,
  Factory,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Menu,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "About Us | Xinrongplas Machinery",
  description:
    "Learn about Jiangsu Xinrongplas Machinery Co., Ltd., a plastic pipe extrusion machinery manufacturer established in 1996 with 60,000 sqm workshop and customers in 80+ countries.",
};

const heroImage =
  "/images/page-heroes/xinrongplas-about-banner-hero.jpg";

const milestones = [
  {
    year: "1996",
    title: "Company Founded",
    text: "Established with one workshop, producing PEX-Al-PEX lines and small PE/PPR lines. Annual sales exceeded $10M.",
    image: "/images/about-history/xinrongplas-history-1996-company-founded.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2000",
    title: "ISO 9001 & Expansion",
    text: "Moved to own factory, obtained ISO 9001. Developed large-diameter PE lines up to 450mm.",
    image: "/images/about-history/xinrongplas-history-2000-iso-9001-factory-expansion.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2001",
    title: "Product Line Expansion",
    text: "Added PVC extrusion lines and independently developed PVC belling machines.",
    image: "/images/about-history/xinrongplas-history-2001-pvc-pipe-extrusion-line.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2002",
    title: "National Standards",
    text: "Established the trade department and co-drafted the national standard for hollow wall winding pipes.",
    image: "/images/about-history/xinrongplas-history-2002-hollow-wall-winding-pipe-standard.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2003",
    title: "Corrugated Pipe Lines",
    text: "Launched PE double wall corrugated pipe lines with optimized ring stiffness molds.",
    image: "/images/about-history/xinrongplas-history-2003-double-wall-corrugated-pipe-line.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2006",
    title: "Steel-Plastic Composites",
    text: "Developed PE steel-belt reinforced corrugated pipe lines for innovative drainage solutions.",
    image: "/images/about-history/xinrongplas-history-2006-steel-belt-reinforced-corrugated-pipe.jpg",
    width: 342,
    height: 233,
  },
  {
    year: "2008",
    title: "Steel-Wire Reinforced",
    text: "Launched PE steel-wire reinforced lines for high-pressure water and gas applications.",
    image: "/images/about-history/xinrongplas-history-2008-steel-wire-reinforced-pipe-line.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2010",
    title: "Mega Facility",
    text: "Moved to a new 50,000 sqm factory with comprehensive equipment upgrades.",
    image: "/images/about-history/xinrongplas-history-2010-new-50000-square-meter-workshop.jpg",
    width: 342,
    height: 233,
  },
  {
    year: "2011",
    title: "Screw Tech Breakthrough",
    text: "38:1 L/D screw design launched, increasing capacity by 30% and saving 20% energy.",
    image: "/images/about-history/xinrongplas-history-2011-high-output-screw-barrel.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2012",
    title: "Belling Innovation",
    text: "Introduced direct injection belling machines, reducing labor for major clients like ERA.",
    image: "/images/about-history/xinrongplas-history-2012-socket-injection-belling-machine.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2014",
    title: "High Pressure RTP",
    text: "Developed RTP pipe lines for oil and gas, capable of sustaining 200 bar pressure.",
    image: "/images/about-history/xinrongplas-history-2014-rtp-high-pressure-pipe-line.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2016",
    title: "CNC Modernization",
    text: "Total upgrade to new generation CNC machining for extreme precision and quality.",
    image: "/images/about-history/xinrongplas-history-2016-cnc-machining-upgrade.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2018",
    title: "Advanced RTP Winding",
    text: "Upgraded RTP winding systems to support UD tapes including carbon and aramid fibers.",
    image: "/images/about-history/xinrongplas-history-2018-rtp-winding-machine-upgrade.jpg",
    width: 800,
    height: 600,
  },
  {
    year: "2021",
    title: "PVC-O Breakthrough",
    text: "Launched mature PVC-O extrusion lines from 90 to 630mm after 8 years of intensive R&D.",
    image: "/images/about-history/xinrongplas-history-2021-pvc-o-pipe-extrusion-line.jpg",
    width: 800,
    height: 600,
  },
];

const stats = [
  { value: "1996", label: "Founded", icon: Award },
  { value: "60,000 sqm", label: "Workshop", icon: Factory },
  { value: "200+", label: "Expert Team", icon: Users },
  { value: "80+", label: "Countries", icon: Globe2 },
  { value: "50+", label: "Patents", icon: ShieldCheck },
];

const values = [
  {
    title: "Quality Control",
    text: "Full supervision of procurement, machine manufacturing and testing. Positive feedback on suggestions for equipment improvements and upgrades.",
    image: "/images/about-values/xinrongplas-quality-control.jpg",
  },
  {
    title: "People Oriented",
    text: "We focus on customer satisfaction and company members alike. The growth and progress of Xinrongplas are shared with customers and team members.",
    image: "/images/about-values/xinrongplas-people-oriented-team.jpg",
  },
  {
    title: "Teamwork and Communication",
    text: "Open communication helps everyone share ideas, build a creative atmosphere, and strengthen teamwork across engineering and manufacturing.",
    image: "/images/about-values/xinrongplas-teamwork-communication.jpg",
  },
  {
    title: "Innovation and Development",
    text: "Professional mechanical and electrical engineers keep researching new technologies, supported by a culture that rewards innovation.",
    image: "/images/about-values/xinrongplas-innovation-development.jpg",
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
      <a className="nav-link" href="/services">
        Services
      </a>
      <a className="nav-link" href="/certificates">
        Certificates
      </a>
      <a className="nav-link" href="/news">
        News
      </a>
      <a className="nav-link" href="/video">
        Video
      </a>
      <a className="nav-link" href="/cases">
        Cases
      </a>
      <a className="nav-link nav-link-active" href="/about">
        About
      </a>
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxgN6DgcHA3sZF4ZGd6XMMGRxG8mrG9FXW31mUv9UO5kSnm6J_wSRmkVBn7TmaVxBfkb-a4PjNb0tCsZ1QqS2uw37hRdr-QMZwhOTmu9WhCAt8Q0xD037lHRGu_3G5vLZaRaY06Vj2KRPlVCGrj7Ei8DWfdtewHAEeQYxfZAfKAnWffmj0mCSv3gCO8AiKKZwnZO2PIT4GNa_pE6s75C33koHMlO1CZy21ZYKqlUiDLtYl5jM1csFguMd1xpcOkikx7PIGtReiX-Y"
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

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page-main">
        <section className="about-hero">
          <img
            src={heroImage}
            alt="Xinrongplas plastic pipe extrusion machinery workshop"
            title="Xinrongplas plastic pipe extrusion machinery workshop"
            width="4134"
            height="708"
            loading="eager"
            decoding="async"
          />
          <div className="about-hero-overlay" />
          <div className="container about-hero-copy">
            <span>Established 1996</span>
            <h1>About Xinrongplas</h1>
            <p>
              Leading Brand in Plastic Pipe Extrusion Machinery Since 1996,
              bridging European standards with global manufacturing efficiency.
            </p>
          </div>
        </section>

        <section className="about-overview-section">
          <div className="container about-overview-layout">
            <div className="about-overview-copy">
              <span className="section-kicker">Company Overview</span>
              <h2>Jiangsu Xinrongplas Machinery Co., Ltd</h2>
              <p>
                Established in 1996, Jiangsu Xinrongplas Machinery Co., Ltd.
                has emerged as a global leader in high-performance plastic
                extrusion technology. With nearly three decades of specialized
                focus, we have cultivated a reputation for engineering
                excellence and manufacturing precision.
              </p>
              <p>
                Our commitment to innovation has enabled us to deliver
                comprehensive turnkey solutions to partners in over 80
                countries. By integrating European quality standards with
                advanced manufacturing efficiency, we provide the competitive
                edge necessary for modern industrial success.
              </p>
              <p>
                At Xinrongplas, quality is the lifeblood of our enterprise. Our
                mission is total customer satisfaction through sustainable,
                intelligent, and energy-efficient extrusion solutions tailored
                to the evolving needs of the global market.
              </p>
            </div>
            <div className="about-video-panel">
              <iframe
                src="https://www.youtube.com/embed/_QFFSRfO96A"
                title="Xinrongplas Corporate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div>
                <PlayCircle size={20} aria-hidden="true" />
                Corporate Video
              </div>
            </div>
          </div>
        </section>

        <section className="about-timeline-section" id="milestones">
          <div className="container about-section-heading">
            <span className="section-kicker">Development Milestones</span>
            <h2>Over 28 Years of Innovation and Manufacturing Excellence</h2>
          </div>
          <div className="about-timeline-wrap" aria-label="Xinrongplas development milestones">
            {milestones.map((item) => (
              <article className="about-timeline-card" key={`${item.year}-${item.title}`}>
                <img
                  src={item.image}
                  alt={`${item.year} ${item.title} - Xinrongplas development milestone`}
                  title={`${item.year} ${item.title}`}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-timeline-marker">
                  <span />
                  <strong>{item.year}</strong>
                </div>
                <div className="about-timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-stats-band" aria-label="Xinrongplas key facts">
          <div className="container about-stats-grid">
            {stats.map(({ value, label, icon: Icon }) => (
              <div className="about-stat-item" key={label}>
                <Icon size={34} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-values-section">
          <div className="container">
            <div className="about-section-heading">
              <span className="section-kicker">Industry 4.0 Mindset</span>
              <h2>Pioneering Plastic Extrusion with People, Quality and Innovation</h2>
              <p>
                We do not just build machines; we engineer the backbone of
                modern infrastructure and automate every step of the extrusion
                process.
              </p>
            </div>
            <div className="about-values-grid">
              {values.map((item) => (
                <article className="about-value-card" key={item.title}>
                  <img
                    src={item.image}
                    alt={`Xinrongplas ${item.title}`}
                    title={`Xinrongplas ${item.title}`}
                    width="512"
                    height="512"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="container about-cta-layout">
            <div>
              <span className="section-kicker">Ready to Start Your Project?</span>
              <h2>Talk with Xinrongplas Technical Experts</h2>
              <p>
                Share your production requirements and our engineering team
                will prepare a detailed quotation and extrusion line
                configuration for your project.
              </p>
            </div>
            <div className="about-cta-actions">
              <a className="primary-button" href="/contact">
                Request Quote <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="outline-button" href="/services">
                Service Support
              </a>
            </div>
            <div className="about-cta-list">
              <span>
                <Wrench size={18} aria-hidden="true" /> Turnkey extrusion line planning
              </span>
              <span>
                <HeartHandshake size={18} aria-hidden="true" /> Global service and after-sale support
              </span>
              <span>
                <Lightbulb size={18} aria-hidden="true" /> Continuous R&D and process optimization
              </span>
              <span>
                <MessageCircle size={18} aria-hidden="true" /> Direct technical consultation
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
