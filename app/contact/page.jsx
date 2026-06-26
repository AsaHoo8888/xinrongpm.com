import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Factory,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Clock,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";
import ContactPhoneField from "./ContactPhoneField";

export const metadata = {
  title: "Contact Us | Xinrongplas Machinery",
  description:
    "Contact Jiangsu Xinrongplas Machinery Co., Ltd for plastic pipe extrusion lines, quotes, service, and technical support.",
};

const heroImage =
  "/images/page-heroes/xinrongplas-about-banner-hero.jpg";
const googleMapsUrl = "https://maps.app.goo.gl/jo9Q8oyiN8b6VSoq9";

function WhatsAppIcon({ size = 22 }) {
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
      <a className="nav-link nav-link-active" href="/contact">
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
            Request Quote
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

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const inquiryStatus = params?.inquiry;

  return (
    <>
      <SiteHeader />
      <main className="contact-page-main">
        <section className="contact-hero">
          <img
            src={heroImage}
            alt="Xinrongplas contact banner for plastic extrusion machinery projects"
            title="Xinrongplas contact banner for plastic extrusion machinery projects"
            width="4134"
            height="708"
            loading="eager"
            decoding="async"
          />
          <div className="contact-hero-overlay" />
          <div className="container contact-hero-copy">
            <h1>Contact Us</h1>
            <span />
            <p>
              Partner with China's leading brand in plastic pipe extrusion
              technology. Our expert team is ready to support your production
              goals.
            </p>
          </div>
        </section>

        <section className="contact-content-section">
          <div className="container contact-page-layout">
            <div className="contact-card" id="contact-form">
              <h2>Get Your Exclusive Quote</h2>
              <p>
                Fill out the form below and our technical engineers will respond
                within 12 hours.
              </p>
              <form
                id="form-contact-inquiry"
                className="grid gap-5"
                action="/api/inquiries"
                method="post"
              >
                <input name="source_page" type="hidden" value="/contact" />
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
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Email Address *
                  <input
                    className="h-12 rounded border border-slate-300 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    name="email"
                    placeholder="email@company.com"
                    required
                    type="email"
                  />
                </label>
                <ContactPhoneField />
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Your Message *
                  <textarea
                    className="min-h-32 resize-y rounded border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    name="message"
                    placeholder="Please describe your requirements, such as pipe diameter, capacity, and material type."
                    required
                    rows="5"
                  />
                </label>
                <button
                  className="inline-flex h-12 items-center justify-center gap-2 rounded bg-brand-blue px-6 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:ring-offset-2"
                  type="submit"
                >
                  Send Inquiry <Send size={18} aria-hidden="true" />
                </button>
                <small className="text-sm leading-6 text-ink-soft">
                  Your information is secure and will only be used for technical
                  consultation.
                </small>
              </form>
            </div>

            <div className="contact-info-column">
              <section>
                <h2>Global Headquarters</h2>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <MapPin size={22} aria-hidden="true" />
                    <div>
                      <strong>Our Address</strong>
                      <p>No.2 Jinnan Road, Jinfeng Town, Zhangjiagang City (near Shanghai), Jiangsu Province, China</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <WhatsAppIcon size={22} />
                    <div>
                      <strong>WhatsApp</strong>
                      <p>0086-13115119251</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Phone size={22} aria-hidden="true" />
                    <div>
                      <strong>Phone</strong>
                      <p>0086-13115119251</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Mail size={22} aria-hidden="true" />
                    <div>
                      <strong>Email Address</strong>
                      <p>marketing1@xinrongpm.com</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Clock size={22} aria-hidden="true" />
                    <div>
                      <strong>Working Hours</strong>
                      <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="global-presence-card">
                <h3>Global Presence</h3>
                <p>
                  Xinrongplas provides complete turnkey solutions to over{" "}
                  <strong>80 countries</strong> worldwide. Our overseas offices
                  are ready to provide localized technical support.
                </p>
                <div className="presence-list">
                  <span>
                    <CheckCircle size={18} aria-hidden="true" /> 30+ Years Experience
                  </span>
                  <span>
                    <CheckCircle size={18} aria-hidden="true" /> 50+ Patents
                  </span>
                  <span>
                    <CheckCircle size={18} aria-hidden="true" /> ISO 9001 Certified
                  </span>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="contact-map-section">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-wzs01BlZ9_rVtU1YH-618EoEQRbzUeuuae4ryonRG3AqfZpOmpzcEyvSNR5fs8TJkz82h9e3s9KBNH_9euRltdd5wUgfNyo6B1YNFH6C43F2yQp6O5rw2PwKkOIgZKcZpZjjAkOreIKgsUdXU6a1pjGE2rK5M9CD9vY3R5BUPcvobfBqEHk7dLOankpDgjt-8RyNkJSzc_sMuwj83n9vFIQ2URmvobumczX1G_tt2UKeMJmh0eVMcJh7C0G7eGqqpkA-EZPeGW8"
            alt="Map view of Zhangjiagang industrial district"
          />
          <div className="map-location-card">
            <Factory size={40} aria-hidden="true" />
            <h3>Xinrongplas Factory</h3>
            <p>60,000 sqm Advanced Production Workshop</p>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="contact-page-cta">
          <div className="container">
            <h2>Customize Your Plastic Pipe Extrusion Machinery!</h2>
            <p>
              Get a custom quote and technical feasibility analysis in less than
              five minutes.
            </p>
            <div>
              <a className="primary-button cta-secondary-button" href="#contact-form">
                Get Quote Now
              </a>
              <a className="ghost-button" href="/downloads/xinrongplas-catalog.pdf">
                Download Catalog
              </a>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
