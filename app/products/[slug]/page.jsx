import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Languages,
  Menu,
  Search,
} from "lucide-react";
import { notFound } from "next/navigation";
import { productNav } from "../../../lib/content";
import ProductGallery from "../ProductGallery";
import ProductQuoteActions from "../ProductQuoteActions";
import { getProduct, getProductSlugs } from "../productData";

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
        <a className="nav-link nav-link-active dropdown-trigger" href="/products">
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

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | Xinrongplas Machinery`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const sourcePage = `/products/${slug}`;

  return (
    <>
      <SiteHeader />
      <main className="product-main">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <ChevronRight size={16} aria-hidden="true" />
          <a href="/products">Products</a>
          <ChevronRight size={16} aria-hidden="true" />
          <span>{product.title}</span>
        </nav>

        <section className="product-hero-detail">
          <ProductGallery images={product.images} title={product.title} />

          <div className="product-summary">
            <h1>{product.title}</h1>
            <div className="product-description">
              {product.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ProductQuoteActions productTitle={product.title} sourcePage={sourcePage} />
          </div>
        </section>

        {product.videoId ? (
          <section className="product-section product-video-section">
            <h2>Operation Video</h2>
            <div className="video-frame">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                src={`https://www.youtube.com/embed/${product.videoId}`}
                title={`${product.title} Operation Video`}
              />
            </div>
          </section>
        ) : null}

        <section className="product-section">
          <h2>Machine Main Feature</h2>
          <div className="feature-grid">
            {product.features.map((feature) => (
              <article className="feature-card" key={feature}>
                <CheckCircle size={22} aria-hidden="true" />
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section" id="specifications">
          <h2>Technical Specifications</h2>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  {product.specHeaders.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th scope="row" key={cell}>
                          {cell}
                        </th>
                      ) : (
                        <td key={`${row[0]}-${cell}`}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="product-cta">
          <h2>Customize Your Plastic Pipe Extrusion Machinery!</h2>
          <p>Get a custom quote in less than five minutes.</p>
          <div>
            <a className="primary-button cta-secondary-button" href="/contact">
              Contact Us
            </a>
            <a className="ghost-button" href="/cases">
              View Project References
            </a>
          </div>
        </section>
      </main>

    </>
  );
}
