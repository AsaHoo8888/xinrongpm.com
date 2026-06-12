import {
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Factory,
  FileText,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Settings,
  Truck,
  Wrench,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Services | Xinrongplas Machinery",
  description:
    "Xinrongplas service support from pre-sale consultation and project planning to manufacturing updates, after-sale commissioning, spare parts, and lifelong technical service.",
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBj9wCeiQQIuMyxI8h7dFvrUbIEkrEx0tND1EjImvISKk_hwkrnLfUEZZwyNT9YdQz828sQZfg9cyk2FvojhjzeN4gnGySWzHR6Tz2m8Mt_U9bIafy_Xy9STNIW6IA6byzDNgxPKu-_pe9qjUil4_LwC8vcVe9BEM86sXp5evZtI42DDihh1K54_hiwJf3eTERo-bFx88m-nYLrRXP54tbyl2v0jGr6bqFYWegGcaCcajnyD8KY6TG11JZkwFJ9VFUp08rsb10y1R0";

const serviceGroups = [
  {
    id: "pre-sale",
    title: "Pre-sale Service",
    icon: ClipboardCheck,
    items: [
      [
        "Pre-sale consulting by experienced sales engineers",
        "Our sales engineers receive regular training about our machinery, which enables them to communicate well with customers. They are also backed up by our technical department to maximize customer needs and requirements.",
      ],
      [
        "Provide on-site consultation and service",
        "Our sales engineers can visit you and provide on-site consultation. We also have overseas offices ready to serve you and can book a time to meet when on-site service is needed.",
      ],
      [
        "Provide pick up service during your visit",
        "We are about 100km away from Shanghai city. Before your visit, we will schedule the best way to arrive at our company and provide pick up service whenever you need.",
      ],
      [
        "Machine can be highly customized",
        "Our machines can be highly customized based on special requirements. Our sales engineers and technicians assess project risk and feasibility to protect your benefits.",
      ],
      [
        "Provide turnkey solution",
        "We provide turnkey solutions instead of just selling machinery, including auxiliary equipment, workshop, water and electricity requirements, feasibility analysis, investment estimate, and return cycle planning.",
      ],
    ],
  },
  {
    id: "sale",
    title: "Sale Service",
    icon: Settings,
    items: [
      [
        "Continuously inform you about project progress",
        "During manufacturing, our sales engineers regularly take pictures to show project progress and keep communication transparent.",
      ],
      [
        "Arrange your coming for machine inspection and testing",
        "We will inform you about the exact testing date so you can plan your visit, arrange third-party testing, review testing videos, and request samples if required.",
      ],
      [
        "Transportation packing according to local import regulation",
        "Machine packing follows the requirements of sea, truck, or rail transportation, and can be adjusted according to different country policies or special import needs.",
      ],
      [
        "Free spare parts for machine long time working",
        "We provide free spare parts for consumable parts or parts more likely to be broken during long-term machine operation.",
      ],
    ],
  },
  {
    id: "after-sale",
    title: "After-sale Service",
    icon: Headphones,
    items: [
      [
        "Provide complete set of technical documents",
        "We provide machine layout or workshop layout, electrical diagram, operation manual, and maintenance manual for guidance.",
      ],
      [
        "Provide on-site installation, commissioning, training",
        "Our after-sale engineers are skilled and fully trained to run machinery in good condition. They also train your workers to operate and maintain the machine.",
      ],
      [
        "Provide machinery warranty",
        "Our standard warranty period is one year from the time our engineer finishes machine commissioning in your workshop, covering manufacturing-related defects.",
      ],
      [
        "Provide Remote Diagnosis Service",
        "For small machinery problems, we provide remote diagnostic services. You only need to provide an internet-connected laptop connected to the machine.",
      ],
      [
        "Provide lifelong, on site service, and upgrade for machine",
        "We provide lifelong service, online operation and maintenance guidance, on-site engineer dispatch if needed, and upgrade information when available.",
      ],
      [
        "Sufficient spare parts in stock to ensure quick delivery",
        "Every machine has its own ID and full information stored in our database, so we can prepare exact spare parts for machinery delivered even 10 years ago.",
      ],
    ],
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
      <a className="nav-link nav-link-active" href="/services">
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
      <a className="nav-link" href="/about">
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
            Contact Support
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

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="services-page-main">
        <section className="services-hero">
          <img src={heroImage} alt="Advanced plastic extrusion manufacturing facility" />
          <div className="services-hero-overlay" />
          <div className="container services-hero-copy">
            <h1>Our Comprehensive Service Solutions</h1>
            <p>
              Supporting your industrial growth from initial investment analysis
              to lifelong technical maintenance and spare parts optimization.
            </p>
          </div>
        </section>

        <nav className="services-phase-nav" aria-label="Service phases">
          <div className="container">
            {serviceGroups.map((group) => {
              const Icon = group.icon;

              return (
                <a href={`#${group.id}`} key={group.id}>
                  <Icon size={18} aria-hidden="true" />
                  {group.title.replace(" Service", "")}
                </a>
              );
            })}
          </div>
        </nav>

        <section className="services-content-section">
          <div className="container services-content-layout">
            <div className="services-accordion-list">
              {serviceGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <section className="services-phase" id={group.id} key={group.id}>
                    <div className="services-phase-heading">
                      <Icon size={28} aria-hidden="true" />
                      <h2>{group.title}</h2>
                    </div>
                    <div className="service-detail-list">
                      {group.items.map(([title, text], index) => (
                        <details className="service-detail" key={title} open={group.id === "pre-sale" || index === 0}>
                          <summary>
                            <span>{title}</span>
                            <ChevronDown size={20} aria-hidden="true" />
                          </summary>
                          <p>{text}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-global-section">
          <div className="container services-global-layout">
            <div>
              <h2>Global Presence, Localized Support</h2>
              <p>
                With over 80 countries served, our logistics and support
                infrastructure is built for speed. Every Xinrongplas machine is
                assigned a unique Digital ID, allowing engineers to pull up exact
                blueprints and spare parts history in seconds.
              </p>
              <div className="services-stat-row">
                <div>
                  <strong>80+</strong>
                  <span>Countries Served</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Live Support</span>
                </div>
                <div>
                  <strong>15k+</strong>
                  <span>Spare Parts SKU</span>
                </div>
              </div>
            </div>
            <div className="services-map-card">
              <Globe2 size={132} aria-hidden="true" />
              <blockquote>
                "Xinrong's remote diagnosis saved us 3 days of downtime. They
                pinpointed the electrical fault via video call and shipped the
                part the same day."
              </blockquote>
              <span>Operations Manager, South Africa</span>
            </div>
          </div>
        </section>

        <section className="services-parts-section">
          <div className="container services-parts-grid">
            <article>
              <PackageCheck size={32} aria-hidden="true" />
              <h2>Parts</h2>
              <p>
                Provide customers with a 2-year accessory return and exchange
                service free of charge, and customers are not required to bear
                express delivery costs.
              </p>
            </article>
            <article>
              <Truck size={32} aria-hidden="true" />
              <h2>Quick Delivery</h2>
              <p>
                Sufficient spare parts are stored in our warehouse. If older
                machine parts are out of production, our technical department
                provides an alternative plan.
              </p>
            </article>
            <article>
              <FileText size={32} aria-hidden="true" />
              <h2>20% Discount</h2>
              <p>
                For accessories that have passed the warranty period, we provide
                a 20% discount for existing customers.
              </p>
            </article>
          </div>
        </section>

        <section className="services-contact-section">
          <div className="container services-contact-card">
            <div>
              <h2>Need Technical Support or a Custom Solution?</h2>
              <p>
                Our team of industrial specialists provides technical support.
                With our independent machine ID database, we offer fast access to
                your equipment history to optimize production efficiency.
              </p>
              <div className="services-contact-list">
                <span>
                  <Phone size={18} aria-hidden="true" /> 0086-13115119251
                </span>
                <span>
                  <Mail size={18} aria-hidden="true" /> marketing1@xinrongpm.com
                </span>
                <span>
                  <MapPin size={18} aria-hidden="true" /> Zhangjiagang City, Jiangsu Province, China
                </span>
              </div>
            </div>
            <div className="services-contact-actions">
              <a className="primary-button" href="/contact">
                Contact Support <Wrench size={18} aria-hidden="true" />
              </a>
              <a className="outline-button" href="/contact">
                Get a Quote <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
