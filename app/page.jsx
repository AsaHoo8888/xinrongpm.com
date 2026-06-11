import {
  ArrowRight,
  Award,
  ChevronDown,
  Factory,
  Languages,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Settings,
  Users,
} from "lucide-react";
import ReviewCarousel from "./ReviewCarousel";
import ContactPhoneField from "./contact/ContactPhoneField";
import { getHomeContent } from "../lib/directus";
import { productNav } from "../lib/content";

const navItems = ["Home", "Services", "Certificates", "News", "Video", "Cases", "About", "Contact"];

const customerReviews = [
  [
    "Client in Turkey",
    "Turkey",
    "We are very satisfied with Xinrong's machine. We are confident to extend our market with quality products produced by quality machines.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/2.jpg",
  ],
  [
    "Client in Cambodia",
    "Cambodia",
    "After long time working, Xinrong's machine is in line with our expectations. After sale service is even beyong our expectations!",
    "https://xinrongpm.com/wp-content/uploads/2024/03/4-1.jpg",
  ],
  [
    "Client in Kazakhstan",
    "Kazakhstan",
    "We have checked many companies and finally cooperate with Xinrong. After more than two years working, machine is still working in good condition.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/K.jpg",
  ],
  [
    "Client in Tajikistan",
    "Tajikistan",
    "Before our company purchased several PE pipe extrusion line from Xinrong, they are working without problem. So we choose Xinrong again for PE double wall corrugated pipe extrusion line, unitil now the machine is working good.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/6.jpg",
  ],
  [
    "Client in Georgia",
    "Georgia",
    "Thanks for all works done by Xinrong. We are statisfied with Xinrong's machinery, Xinrong's service and Xinrong's people.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/ind_img7.jpg",
  ],
  [
    "Client in Uzbekistan",
    "Uzbekistan",
    "Xinrong is specialized in plastic extrusion machinery. Machines are continuously running stably. Without doubt, we shall have long term cooperation.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/ind_img8.jpg",
  ],
  [
    "Client in India",
    "India",
    "I am very happy to give feed back about Xinrong and its machinery. Service in time, response time within 12 hours, machine is good and this time machinery is working in our workshop continuously without stopping for 20 days. We are happy to get machiney from Xinrong.",
    "https://xinrongpm.com/wp-content/uploads/2024/03/IND.jpg",
  ],
];

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
      {navItems.slice(1).map((item) => (
        <a
          className="nav-link"
          href={
            item === "Contact"
              ? "/contact"
              : item === "Services"
                ? "/services"
                : item === "Certificates"
                  ? "/certificates"
                  : item === "News"
                    ? "/news"
                    : item === "Video"
                      ? "/video"
                      : item === "Cases"
                        ? "/cases"
                      : item === "About"
                        ? "/about"
                      : `#${item.toLowerCase()}`
          }
          key={item}
        >
          {item}
        </a>
      ))}
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
            Range: <strong>{product.range || product.diameter_range}</strong>
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
            <button className="icon-button" aria-label="Search">
              <Search size={20} aria-hidden="true" />
            </button>
            <button className="icon-button" aria-label="Language">
              <Languages size={20} aria-hidden="true" />
            </button>
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
            <h2>60,000 sqm factory scale with 200+ experienced staff</h2>
            <p>
              From extrusion line planning to long-term after-sale service, Xinrong
              helps manufacturers build stable, efficient pipe production systems.
            </p>
            <a className="primary-button" href="/contact">
              About Us <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section service-section" id="services">
          <div className="container">
            <div className="home-service-heading">
              <h2>Our Service Excellence</h2>
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

        <section className="contact-section" id="contact">
          <div className="contact-bg" />
          <div className="container contact-layout">
            <div className="contact-copy">
              <h2>Get Your Exclusive Quote</h2>
              <p>
                Our technical engineers will provide a customized solution and
                detailed investment analysis within 24 hours.
              </p>
              <div className="contact-methods">
                <span>
                  <Phone size={20} aria-hidden="true" /> 0086-13115119251
                </span>
                <span>
                  <Mail size={20} aria-hidden="true" /> marketing1@xinrongpm.com
                </span>
                <span>
                  <MapPin size={20} aria-hidden="true" /> Zhangjiagang, China
                </span>
              </div>
            </div>
            <form id="form-home-inquiry" className="inquiry-form" action="/api/inquiries" method="post">
              {inquiryStatus === "sent" ? (
                <p className="form-status">Inquiry received. We will reply soon.</p>
              ) : null}
              {inquiryStatus === "error" ? (
                <p className="form-status form-status-error">
                  Inquiry could not be saved to Directus. Please check the API token.
                </p>
              ) : null}
              <label>
                Full Name *
                <input name="full_name" required type="text" />
              </label>
              <label>
                Email Address *
                <input name="email" required type="email" />
              </label>
              <ContactPhoneField />
              <label>
                Message *
                <textarea name="message" required rows="4" />
              </label>
              <button className="primary-button form-button" type="submit">
                Submit Inquiry <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

    </>
  );
}
