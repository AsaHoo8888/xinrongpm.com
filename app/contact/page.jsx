import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Factory,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  Clock,
} from "lucide-react";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Contact Us | Xinrongplas Machinery",
  description:
    "Contact Jiangsu Xinrongplas Machinery Co., Ltd for plastic pipe extrusion lines, quotes, service, and technical support.",
};

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
        <a className="nav-link dropdown-trigger" href="/#products">
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
      <a className="nav-link" href="/#cases">
        Cases
      </a>
      <a className="nav-link" href="/#about">
        About
      </a>
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj9wCeiQQIuMyxI8h7dFvrUbIEkrEx0tND1EjImvISKk_hwkrnLfUEZZwyNT9YdQz828sQZfg9cyk2FvojhjzeN4gnGySWzHR6Tz2m8Mt_U9bIafy_Xy9STNIW6IA6byzDNgxPKu-_pe9qjUil4_LwC8vcVe9BEM86sXp5evZtI42DDihh1K54_hiwJf3eTERo-bFx88m-nYLrRXP54tbyl2v0jGr6bqFYWegGcaCcajnyD8KY6TG11JZkwFJ9VFUp08rsb10y1R0"
            alt="Modern plastic extrusion manufacturing facility"
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
              <form className="contact-page-form" action="/api/inquiries" method="post">
                <input name="source_page" type="hidden" value="/contact" />
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
                  <input name="full_name" placeholder="John Doe" required type="text" />
                </label>
                <label>
                  Email Address *
                  <input name="email" placeholder="email@company.com" required type="email" />
                </label>
                <div className="contact-form-row">
                  <label>
                    Phone Number
                    <input name="phone" placeholder="+1 (000) 000-0000" type="tel" />
                  </label>
                  <label>
                    Country *
                    <select name="country" required defaultValue="">
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="United States">United States</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
                <label>
                  Your Message *
                  <textarea
                    name="message"
                    placeholder="Please describe your requirements, such as pipe diameter, capacity, and material type."
                    required
                    rows="5"
                  />
                </label>
                <button className="contact-submit-button" type="submit">
                  Send Inquiry <Send size={18} aria-hidden="true" />
                </button>
                <small>
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
                      <p>No.19, Jinfeng Road, Jinfeng Town, Zhangjiagang City, Jiangsu Province, China.</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Phone size={22} aria-hidden="true" />
                    <div>
                      <strong>WhatsApp / Phone</strong>
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
                    <CheckCircle size={18} aria-hidden="true" /> 28+ Years Experience
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
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
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
              <a className="ghost-button" href="/#products">
                Download Catalog
              </a>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
