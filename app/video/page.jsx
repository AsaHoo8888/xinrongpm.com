import {
  ArrowRight,
  ChevronDown,
  Menu,
  PlayCircle,
  Youtube,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "Video | Xinrongplas Machinery",
  description:
    "Watch Xinrongplas plastic pipe extrusion line videos, including PE, PVC, PVC-O, PPR, RTP/TCP, corrugated pipe, winding pipe, and pipe drilling machines.",
};

const heroImage =
  "/images/page-heroes/xinrongplas-about-banner-hero.jpg";

const videos = [
  {
    title: "PVC-O pipe extrusion line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/ev5Ei2mXkPI",
  },
  {
    title: "Automatic Pipe Drilling/Slotting Machine",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/vKniztDXRLU",
  },
  {
    title: "PVC Pipe Extrusion Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/_UxwY8U5hys",
  },
  {
    title: "PE Pipe Extrusion Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/VIFfEr4YWlI?start=54",
  },
  {
    title: "PPR Pipe Extrusion Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/oY0mUhjdOlc",
  },
  {
    title: "PE Double Wall Corrugated Pipe Extrusion line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/UfOqUDsVNMI?start=48",
  },
  {
    title: "PEX-AL-PEX Composite Pipe Extrusion Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/46uHBXxbEZc",
  },
  {
    title: "PE Hollow Wall Winding Pipe Extrusion Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/coM6iNRuA48",
  },
  {
    title: "RTP/TCP Pipe Production Line",
    category: "Technical Demo",
    embedUrl: "https://www.youtube.com/embed/7KeAQEZ_Ads",
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
      <a className="nav-link nav-link-active" href="/video">
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
            Inquire Now
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

export default function VideoPage() {
  return (
    <>
      <SiteHeader />
      <main className="video-page-main">
        <section className="video-hero">
          <img
            src={heroImage}
            alt="Xinrongplas video resource center banner for extrusion machinery"
            title="Xinrongplas video resource center banner for extrusion machinery"
            width="4134"
            height="708"
            loading="eager"
            decoding="async"
          />
          <div className="video-hero-overlay" />
          <div className="container video-hero-copy">
            <span>
              <PlayCircle size={16} aria-hidden="true" />
              Resource Library
            </span>
            <h1>Video Resource Center</h1>
            <p>
              Explore Xinrongplas machinery demonstrations through video resources.
            </p>
          </div>
        </section>

        <section className="video-library-section">
          <div className="container">
            <div className="video-library-heading">
              <h2>Machine Demonstration Videos</h2>
              <a
                className="video-youtube-button"
                href="https://www.youtube.com/@xinrongmachinery9929"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} aria-hidden="true" />
                WATCH MORE VIDEOS
              </a>
            </div>

            <div className="video-grid">
              {videos.map((video) => (
                <article className="video-card-direct" key={video.title}>
                  <div className="video-embed-wrap">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={video.embedUrl}
                      title={video.title}
                    />
                  </div>
                  <div className="video-card-copy">
                    <span>{video.category}</span>
                    <h3>{video.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="video-cta-section">
          <div className="container video-cta-card">
            <div>
              <h2>Customize Your Plastic Pipe Extrusion Machinery!</h2>
              <p>
                Share your pipe diameter, material, capacity, and application
                requirements. Our engineers will recommend a suitable production
                line configuration.
              </p>
            </div>
            <div className="video-cta-actions">
              <a className="primary-button" href="/contact">
                Get a Free Quote <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="video-youtube-button"
                href="https://www.youtube.com/@xinrongmachinery9929"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} aria-hidden="true" />
                WATCH MORE VIDEOS
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
