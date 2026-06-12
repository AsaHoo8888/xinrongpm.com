import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Newspaper,
  Search,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";
import { articles } from "./articles";

export const metadata = {
  title: "News & Technical Insights | Xinrongplas Machinery",
  description:
    "Read Xinrongplas news, technical insights, project milestones, and plastic pipe extrusion industry updates.",
};

const heroImage =
  "/images/page-heroes/xinrongplas-about-banner-hero.jpg";

const [featuredPost, ...posts] = articles;

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
      <a className="nav-link nav-link-active" href="/news">
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

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="news-page-main">
        <section className="news-hero">
          <img
            src={heroImage}
            alt="Xinrongplas plastic extrusion machinery news banner"
            title="Xinrongplas plastic extrusion machinery news banner"
            width="4134"
            height="708"
            loading="eager"
            decoding="async"
          />
          <div className="news-hero-overlay" />
          <div className="container news-hero-copy">
            <h1>News & Technical Insights</h1>
            <p>
              Stay updated with the latest in plastic extrusion technology,
              project milestones, and industry trends from Xinrongplas.
            </p>
          </div>
        </section>

        <section className="news-featured-section">
          <div className="container">
            <article className="news-featured-card">
              <div className="news-featured-media">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  title={featuredPost.title}
                  width="2560"
                  height="1440"
                />
                <span>{featuredPost.category}</span>
              </div>
              <div className="news-featured-body">
                <small>{featuredPost.date}</small>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <a href={`/news/${featuredPost.slug}`}>
                  Read Article <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="news-grid-section">
          <div className="container">
            <div className="news-toolbar">
              <h2>Post Archive</h2>
              <label>
                <Search size={18} aria-hidden="true" />
                <input type="search" placeholder="Search archive..." />
              </label>
            </div>

            <div className="news-grid">
              {posts.map((post) => (
                <article className="news-card" key={post.slug}>
                  <div className="news-card-media">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      title={post.title}
                      width="2560"
                      height="1440"
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{post.category}</span>
                  </div>
                  <div className="news-card-body">
                    <small>{post.date}</small>
                    <h3>{post.title}</h3>
                    <div>
                      <a href={`/news/${post.slug}`}>Read More</a>
                      <Newspaper size={22} aria-hidden="true" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="news-newsletter">
          <div className="container">
            <Mail size={48} aria-hidden="true" />
            <h2>Join Our Technical Newsletter</h2>
            <p>
              Get monthly engineering reports, material science updates, and the
              latest machinery innovations delivered to your inbox.
            </p>
            <form id="form-news-subscribe" className="news-subscribe-form">
              <input type="email" placeholder="professional@company.com" aria-label="Email address" />
              <button type="button">Subscribe</button>
            </form>
            <small>By subscribing, you agree to our Privacy Policy and cookie usage.</small>
          </div>
        </section>
      </main>
    </>
  );
}
