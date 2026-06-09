import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronDown,
  FileCheck,
  Languages,
  Menu,
  Search,
  ShieldCheck,
} from "lucide-react";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Certificates & Honors | Xinrongplas Machinery",
  description:
    "View Xinrongplas Machinery certificates and honors, including High-tech Enterprise, ISO 9001, SGS, CE certification, and patent certificates.",
};

const certificates = [
  ["High-tech Enterprise", "Recognition", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-1-scaled.jpg"],
  ["ISO 9001", "Quality System", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-2.png"],
  ["SGS", "Verification", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-3.jpg"],
  ["CE Certification", "Compliance", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-4.jpg"],
  ["Patent 01", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-5-scaled.jpg"],
  ["Patent 02", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-6-scaled.jpg"],
  ["Patent 03", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-8-scaled.jpg"],
  ["Patent 04", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-9-scaled.jpg"],
  ["Patent 05", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-10-scaled.jpg"],
  ["Patent 06", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-11-scaled.jpg"],
  ["Patent 07", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-12-scaled.jpg"],
  ["Patent 08", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-13-scaled.jpg"],
  ["Patent 09", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-14-scaled.jpg"],
  ["Patent 10", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-15-scaled.jpg"],
  ["Patent 11", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-16-scaled.jpg"],
  ["Patent 12", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-17-scaled.jpg"],
  ["Patent 13", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-18-scaled.jpg"],
  ["Patent 14", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-19-scaled.jpg"],
  ["Patent 15", "Innovation", "https://xinrongpm.com/wp-content/uploads/2024/07/Cer-20-scaled.jpg"],
];

const stats = [
  ["1996", "Founded In"],
  ["80+", "Exporting Countries"],
  ["3000+", "Successful Cases"],
  ["50+", "National Patents"],
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
      <a className="nav-link nav-link-active" href="/certificates">
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
  );
}

export default function CertificatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="certificates-page-main">
        <section className="certificates-hero">
          <div className="container certificates-hero-copy">
            <span>
              <Award size={18} aria-hidden="true" />
              Quality First, Innovation as the Soul
            </span>
            <h1>Certificates & Honors</h1>
            <p>
              Since 1996, Xinrongplas Machinery has been committed to excellent
              high-end plastic extrusion solutions for global customers.
            </p>
            <div>
              <strong>28 Years of Expertise</strong>
              <strong>50+ National Patents</strong>
            </div>
          </div>
        </section>

        <section className="certificate-grid-section">
          <div className="container">
            <div className="certificate-section-heading">
              <span />
              <h2>Corporate Qualifications</h2>
            </div>
            <div className="certificate-grid">
              {certificates.map(([title, category, image]) => (
                <article className="certificate-card" key={`${title}-${image}`}>
                  <a href={image} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>
                    <img src={image} alt={title} />
                  </a>
                  <div>
                    <small>{category}</small>
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certificate-stats-section">
          <div className="container certificate-stats-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="certificate-cta-section">
          <div className="container certificate-cta-card">
            <div>
              <BadgeCheck size={38} aria-hidden="true" />
              <h2>Certified Manufacturing for Reliable Pipe Extrusion Projects</h2>
              <p>
                Share your production requirements and our engineering team will
                recommend a suitable certified extrusion line configuration.
              </p>
            </div>
            <div>
              <span>
                <ShieldCheck size={18} aria-hidden="true" /> ISO, SGS, CE and patent-backed capability
              </span>
              <span>
                <FileCheck size={18} aria-hidden="true" /> Certificate images available for review
              </span>
              <a className="primary-button" href="/contact">
                Get a Quote <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
