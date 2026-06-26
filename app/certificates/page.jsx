import {
  BadgeCheck,
  ChevronDown,
  FileCheck,
  Menu,
  ShieldCheck,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import CertificateGallery from "./CertificateGallery";
import ProductQuoteActions from "../products/ProductQuoteActions";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Certificates & Honors | Xinrongplas Machinery",
  description:
    "View Xinrongplas Machinery certificates and honors, including High-tech Enterprise, ISO 9001, SGS, CE certificate, and patent certificates.",
};

const certificates = [
  {
    title: "High-tech Enterprise",
    category: "Recognition",
    image: "/images/certificates/xinrongplas-high-tech-enterprise-certificate.jpg",
    alt: "Xinrongplas High-tech Enterprise certificate",
    width: 2560,
    height: 1612,
  },
  {
    title: "ISO 9001",
    category: "Quality System",
    image: "/images/certificates/xinrongplas-iso-9001-quality-system-certificate.png",
    alt: "Xinrongplas ISO 9001 quality system certificate",
    width: 1653,
    height: 2339,
  },
  {
    title: "SGS",
    category: "Verification",
    image: "/images/certificates/xinrongplas-sgs-verification-certificate.jpg",
    alt: "Xinrongplas SGS verification certificate",
    width: 1891,
    height: 2552,
  },
  {
    title: "CE Certificate",
    category: "Compliance",
    image: "/images/certificates/xinrongplas-ce-certification.jpg",
    alt: "Xinrongplas CE certification for plastic pipe extrusion machinery",
    width: 1653,
    height: 2337,
  },
  ...Array.from({ length: 15 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      title: "Certificate",
      category: "PATENT",
      image: `/images/certificates/xinrongplas-patent-certificate-${number}.jpg`,
      alt: `Xinrongplas patent certificate ${number} for plastic extrusion machinery`,
      width: index === 0 ? 1800 : 1810,
      height: 2560,
    };
  }),
  ...Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      title: "Certificate",
      category: "SOFTWARE COPYRIGHT",
      image: `/images/certificates/xinrongplas-software-copyright-certificate-${number}.png`,
      alt: `Xinrongplas software copyright certificate ${number}`,
      width: 1182,
      height: 1600,
    };
  }),
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
        <a className="nav-link nav-link-active dropdown-trigger" href="/about">
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

export default function CertificatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="certificates-page-main">
        <section className="certificates-hero">
          <div className="container certificates-hero-copy">
            <h1>Certificates & Honors</h1>
            <p>
              Since our founding in 1996, we have insisted on quality first
              while recognizing innovation as our soul.
            </p>
          </div>
        </section>

        <section className="certificate-grid-section">
          <div className="container">
            <div className="certificate-section-heading">
              <span />
              <h2>Corporate Qualifications</h2>
            </div>
            <CertificateGallery certificates={certificates} />
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
                Share your requirements and our engineering team will recommend
                a suitable and professional extrusion line configuration.
              </p>
            </div>
            <div>
              <span>
                <ShieldCheck size={18} aria-hidden="true" /> ISO, SGS, CE and patent-backed capability
              </span>
              <span>
                <FileCheck size={18} aria-hidden="true" /> Certificate images available for review
              </span>
              <ProductQuoteActions
                buttonLabel="Get a Quote"
                productTitle="Certificates & Honors"
                showCatalog={false}
                sourcePage="/certificates"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
