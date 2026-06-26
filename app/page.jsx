import {
  ArrowRight,
  Award,
  ChevronDown,
  Factory,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Settings,
  Users,
} from "lucide-react";
import HeaderSearch from "./HeaderSearch";
import ReviewCarousel from "./ReviewCarousel";
import ContactPhoneField from "./contact/ContactPhoneField";
import { getHomeContent } from "../lib/directus";
import { productNav } from "../lib/content";

const customerReviews = [
  [
    "Client in Turkey",
    "Turkey",
    "We are very satisfied with Xinrong's machine. We are confident to extend our market with quality products produced by quality machines.",
    "/images/project-cases/xinrongplas-project-case-turkey-pe1200-solid-wall-pipe-line.jpg",
  ],
  [
    "Client in Cambodia",
    "Cambodia",
    "After long time working, Xinrong's machine is in line with our expectations. After sale service is even beyong our expectations!",
    "/images/project-cases/xinrongplas-project-case-cambodia-pe630-pipe-extrusion-line.jpg",
  ],
  [
    "Client in Kazakhstan",
    "Kazakhstan",
    "We have checked many companies and finally cooperate with Xinrong. After more than two years working, machine is still working in good condition.",
    "/images/project-cases/xinrongplas-project-case-kazakhstan-darkhan-pipe-extrusion-lines.jpg",
  ],
  [
    "Client in Tajikistan",
    "Tajikistan",
    "Before our company purchased several PE pipe extrusion line from Xinrong, they are working without problem. So we choose Xinrong again for PE double wall corrugated pipe extrusion line, unitil now the machine is working good.",
    "/images/project-cases/xinrongplas-project-case-tajikistan-pe-corrugated-pipe-line.jpg",
  ],
  [
    "Client in Georgia",
    "Georgia",
    "Thanks for all works done by Xinrong. We are statisfied with Xinrong's machinery, Xinrong's service and Xinrong's people.",
    "/images/project-cases/xinrongplas-project-case-georgia-pe800-corrugated-pipe-line.jpg",
  ],
  [
    "Client in Uzbekistan",
    "Uzbekistan",
    "Xinrong is specialized in plastic extrusion machinery. Machines are continuously running stably. Without doubt, we shall have long term cooperation.",
    "/images/project-cases/xinrongplas-project-case-uzbekistan-multiple-pipe-extrusion-lines.jpg",
  ],
  [
    "Client in India",
    "India",
    "I am very happy to give feed back about Xinrong and its machinery. Service in time, response time within 12 hours, machine is good and this time machinery is working in our workshop continuously without stopping for 20 days. We are happy to get machiney from Xinrong.",
    "/images/project-cases/xinrongplas-project-case-indian-parveen-pipe-extrusion-lines.jpg",
  ],
];

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      focusable="false"
    >
      <path d="M16.04 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.24.59 4.43 1.7 6.35L3.15 28.8l6.72-1.76a12.8 12.8 0 0 0 6.17 1.57h.01c7.04 0 12.77-5.7 12.77-12.72S23.09 3.2 16.04 3.2Zm0 23.25h-.01c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-3.99 1.04 1.06-3.87-.25-.4a10.55 10.55 0 0 1-1.62-5.62c0-5.83 4.7-10.57 10.48-10.57 2.8 0 5.43 1.1 7.4 3.09a10.45 10.45 0 0 1 3.06 7.44c0 5.82-4.7 10.56-10.48 10.56Zm5.74-7.91c-.31-.16-1.86-.91-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.23 3.38 5.4 4.74.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

const homeServices = [
  {
    title: "Pre-sale Service",
    href: "/services#pre-sale",
    icon: Lightbulb,
    items: [
      "Pre-sale consulting by experienced sales engineers",
      "Provide on-site consultation and service",
      "Provide pick up service during your visit",
      "Machine can be highly customized",
      "Provide turnkey solution",
    ],
  },
  {
    title: "Sale Service",
    href: "/services#sale",
    icon: Settings,
    items: [
      "Continuously inform you about project progress",
      "Arrange your coming for machine inspection and testing",
      "Transportation packing according to local import regulation",
      "Free spare parts for machine long time working",
    ],
  },
  {
    title: "After-sale Service",
    href: "/services#after-sale",
    icon: ShieldCheck,
    items: [
      "Provide complete set of technical documents",
      "Provide on-site installation, commissioning, training",
      "Provide machinery warranty",
      "Provide Remote Diagnosis Service",
      "Provide lifelong, on site service, and upgrade for machine",
      "Sufficient spare parts in stock to ensure quick delivery",
    ],
  },
];

const faqs = [
  [
    "Q1. Are we a manufacturer or trade company?",
    "We started innovation and manufacturing of plastic pipe extrusion machine in 1996.",
  ],
  [
    "Q2. What kind of machines do we produce?",
    "We produce plastic extrusion line, mainly plastic pipe extrusion line.",
  ],
  ["Q3. What kind of payment do we accept?", "Payment term like T/T, L/C."],
  [
    "Q4. How long do we need to produce the machines?",
    "According to different machine model and configuration, we need different time, from 45 days to 90 days.",
  ],
  [
    "Q5. Will the machine be delivered on time?",
    "Yes, before machine production, we will prepare production plan. And every department will follow the plan exactly, from initial design and procurement, through to final installation and testing.",
  ],
  [
    "Q6. How about the machine quality?",
    "You can trust our machine quality all the time. All purchased parts will be inspected before entering in our warehouse. During manufacturing, processing and assembling, each step will be strictly checked by our QC department. Finally, every machinery will be checked and tested before delivery, to ensure every machinery delivered to customers will be in good quality and will work stably.",
  ],
  [
    "Q7. How about the price?",
    "Good products can never be very cheap. But we will provide you good machinery in good and reasonable price. Please consult with our sales engineers, and we will provide you quotation with good price.",
  ],
  ["Q8. How long is your machine's guarantee time?", "Normally one year."],
  [
    "Q9. What can you provide for after sale service?",
    "When machine comes to your factory, our engineers will come for installation, commissioning and training. Also, 24h online service is available.",
  ],
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
      <a className="nav-link nav-link-active" href="/">
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
      <a className="nav-link" href="/cases">
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

function StatIcon({ index }) {
  const icons = [Award, Factory, Users, ShieldCheck];
  const Icon = icons[index] || ShieldCheck;
  return <Icon size={36} aria-hidden="true" />;
}

function ProductCard({ product, heroImage }) {
  const productName = product.name || product.title || "Product";
  const image = product.image || heroImage;
  const hoverImage = product.hoverImage;
  const imageAlt = product.imageAlt || `${productName} plastic pipe extrusion machine`;
  const hoverImageAlt = product.hoverImageAlt || `${productName} final pipe product`;
  const range = (product.range || product.diameter_range || "").replace(/^OD\b/, "Ø");

  return (
    <article
      className={`product-card${hoverImage ? " has-hover-image" : ""}`}
      id={slugify(productName)}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="product-media">
        <img
          className="product-image product-image-primary"
          src={image}
          alt={imageAlt}
          title={imageAlt}
          width={product.imageWidth || 1300}
          height={product.imageHeight || 1000}
          loading="lazy"
          decoding="async"
          itemProp="image"
        />
        {hoverImage ? (
          <img
            className="product-image product-image-hover"
            src={hoverImage}
            alt={hoverImageAlt}
            title={hoverImageAlt}
            width={product.hoverImageWidth || 1300}
            height={product.hoverImageHeight || 1000}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <div className="product-body">
        <span className="product-tag">{product.tag || "Pipe extrusion line"}</span>
        <h3 itemProp="name">{productName}</h3>
        <div className="range-row">
          <Ruler size={16} aria-hidden="true" />
          <span>
            Range: <strong>{range}</strong>
          </span>
        </div>
        <a href={productHref(productName)} className="text-link" itemProp="url">
          View More <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const content = await getHomeContent();
  const inquiryStatus = params?.inquiry;

  return (
    <>
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

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={content.hero.image} alt="Xinrongplas factory floor" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">{content.hero.eyebrow}</span>
              <h1>{content.hero.title}</h1>
              <p>{content.hero.text}</p>
              <div className="hero-actions">
                <a className="primary-button" href="/contact">
                  Get a Free Quote <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="ghost-button" href="/products">
                  Explore Equipment
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Company strengths">
          <div className="container stats-grid">
            {content.stats.map((stat, index) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-icon">
                  <StatIcon index={index} />
                </span>
                <span>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <h2>{content.intro.title}</h2>
              <span className="heading-rule" />
              <p>{content.intro.text}</p>
            </div>

            <div className="product-grid">
              {content.products.map((product) => (
                <ProductCard
                  product={product}
                  heroImage={content.hero.image}
                  key={product.name || product.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="about-band" id="about">
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLtT5vWHgq1ofFtkYqMVq7zprwxCMwOZM1FdmVm3kkYPtBO-KX9_L6DTq6QrrYYihwJNZ9pvJdcHHGYsI8RXt-sP91K8oAGvCPtApFfQWMnN4iikor2qGZya832lcIGzIry_46jNXkfyZmuH-ZYcxnoKhyH7A4inM-7-9vA_zq6Pquky2V8CqlPdvtMk6z7YP1AqdIhTLAO4yEhLCaOrLRlXoO0iPxrlqqDkaGNo6NOnPPLZJzLRu-HbpuE"
            alt="Xinrongplas factory scale"
          />
          <div className="about-overlay" />
          <div className="container about-content">
            <span className="eyebrow">Jiangsu Xinrongplas Machinery Co., Ltd</span>
            <h2>60,000 sqm factory scale with 150+ experienced staff</h2>
            <p>
              From extrusion line planning to long-term after-sale service, Xinrong
              helps manufacturers build stable, efficient pipe production systems.
            </p>
            <a className="primary-button" href="/about">
              About Us <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section service-section" id="services">
          <div className="container">
            <div className="home-service-heading">
              <h2>Our Excellence in Service</h2>
              <p>
                A seamless lifecycle commitment from initial consultation to
                long-term operational success.
              </p>
            </div>
            <div className="home-service-grid">
              {homeServices.map(({ title, href, icon: Icon, items }) => (
                <article className="home-service-card" key={title}>
                  <span className="home-service-icon">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={href}>Read More</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cases-section" id="cases">
          <div className="container">
            <div className="cases-header">
              <h2>Global Voice</h2>
            </div>
            <ReviewCarousel reviews={customerReviews} />
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container">
            <div className="section-heading">
              <h2>Frequently Asked Questions</h2>
              <span className="heading-rule" />
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details className="faq-item" key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-bg" />
          <div className="container contact-layout">
            <div className="contact-copy">
              <h2>Get Your Exclusive Quote</h2>
              <p>
                Our technical engineers will provide a customized solution and
                detailed investment analysis within 12 hours.
              </p>
              <div className="contact-methods">
                <span>
                  <WhatsAppIcon size={20} /> 0086-13115119251
                </span>
                <span>
                  <Phone size={20} aria-hidden="true" />
                  0086-13115119251
                </span>
                <span>
                  <Mail size={20} aria-hidden="true" /> marketing1@xinrongpm.com
                </span>
                <span>
                  <MapPin size={20} aria-hidden="true" /> No.2 Jinnan Road, Jinfeng Town, Zhangjiagang City (near Shanghai), Jiangsu Province, China
                </span>
              </div>
            </div>
            <form
              id="form-home-inquiry"
              className="inquiry-form grid gap-5"
              action="/api/inquiries"
              method="post"
            >
              {inquiryStatus === "sent" ? (
                <p className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                  Inquiry received. We will reply soon.
                </p>
              ) : null}
              {inquiryStatus === "error" ? (
                <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  Inquiry could not be saved to Directus. Please check the API token.
                </p>
              ) : null}
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Full Name *
                <input
                  className="h-12 rounded border border-slate-300 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  name="full_name"
                  required
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Email Address *
                <input
                  className="h-12 rounded border border-slate-300 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  name="email"
                  required
                  type="email"
                />
              </label>
              <ContactPhoneField />
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Message *
                <textarea
                  className="min-h-32 resize-y rounded border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  name="message"
                  required
                  rows="4"
                />
              </label>
              <button
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-brand-blue px-6 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:ring-offset-2"
                type="submit"
              >
                Submit Inquiry <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

    </>
  );
}
