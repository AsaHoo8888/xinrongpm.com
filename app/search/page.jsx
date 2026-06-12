import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";
import { articles } from "../news/articles";
import { products } from "../products/productData";

export const metadata = {
  title: "Search | Xinrongplas Machinery",
  description: "Search Xinrongplas products, services, certificates, videos, cases, and news.",
};

const staticPages = [
  {
    title: "Services",
    url: "/services",
    type: "Page",
    excerpt: "Pre-sale, sale, after-sale service and turnkey project support.",
  },
  {
    title: "Certificates",
    url: "/certificates",
    type: "Page",
    excerpt: "Xinrongplas qualification certificates and manufacturing credentials.",
  },
  {
    title: "Video",
    url: "/video",
    type: "Page",
    excerpt: "Machine videos, production line demonstrations, and project footage.",
  },
  {
    title: "Cases",
    url: "/cases",
    type: "Page",
    excerpt: "Global project cases and customer installations.",
  },
  {
    title: "About",
    url: "/about",
    type: "Page",
    excerpt: "Company history, factory scale, R&D capability, and values.",
  },
  {
    title: "Contact",
    url: "/contact",
    type: "Page",
    excerpt: "Contact Xinrongplas for quotation, technical consulting, and service.",
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

function getResults(query) {
  const term = query.trim().toLowerCase();
  if (!term) {
    return [];
  }

  const productResults = productNav.map((title) => {
    const slug = slugify(title);
    const product = products[slug] || {};
    return {
      title,
      url: `/products/${slug}`,
      type: "Product",
      excerpt: product.description || product.summary || product.subtitle || "Plastic pipe extrusion machinery.",
      haystack: [title, product.description, product.summary, product.subtitle, product.application]
        .filter(Boolean)
        .join(" "),
    };
  });

  const newsResults = articles.map((article) => ({
    title: article.title,
    url: `/news/${article.slug}`,
    type: "News",
    excerpt: article.excerpt,
    haystack: [article.title, article.category, article.excerpt].join(" "),
  }));

  return [...productResults, ...newsResults, ...staticPages].filter((item) =>
    [item.title, item.excerpt, item.haystack].filter(Boolean).join(" ").toLowerCase().includes(term),
  );
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q : "";
  const results = getResults(query);

  return (
    <>
      <SiteHeader />
      <main className="search-page-main">
        <section className="search-hero">
          <div className="container">
            <span className="section-kicker">Search</span>
            <h1>Search Xinrongplas</h1>
            <form action="/search" className="search-page-form">
              <input
                autoFocus
                defaultValue={query}
                name="q"
                placeholder="Search products, news, services..."
                type="search"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </section>

        <section className="search-results-section">
          <div className="container">
            {query ? (
              <p className="search-result-count">
                {results.length} result{results.length === 1 ? "" : "s"} for <strong>{query}</strong>
              </p>
            ) : (
              <p className="search-result-count">Enter a keyword to search products, news, and pages.</p>
            )}

            <div className="search-results-list">
              {results.map((result) => (
                <article className="search-result-card" key={`${result.type}-${result.url}`}>
                  <span>{result.type}</span>
                  <h2>{result.title}</h2>
                  <p>{result.excerpt}</p>
                  <a href={result.url}>
                    View Result <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
