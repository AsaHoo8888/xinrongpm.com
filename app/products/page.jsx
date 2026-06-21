import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Factory,
  Menu,
  Ruler,
} from "lucide-react";
import HeaderSearch from "../HeaderSearch";
import { productNav } from "../../lib/content";
import { products } from "./productData";

export const metadata = {
  title: "Products | Xinrongplas Machinery",
  description:
    "Browse Xinrongplas plastic pipe extrusion machinery, including PE, PVC, PVC-O, PPR, corrugated pipe, winding pipe, RTP/TCP, and pipe drilling or slotting machines.",
};

const imageSizes = {
  "pex-al-pex-pipe-machine": { width: 1882, height: 1254 },
};

const ranges = {
  "pe-pipe-extrusion-line": "Ø 16 - 2000 mm",
  "pvc-pipe-extrusion-line": "Ø 16 - 1000 mm",
  "pvc-o-pipe-extrusion-line": "Ø 90 - 630 mm, PN5 - 25",
  "ppr-pipe-extrusion-line": "Ø 16 - 160 mm",
  "double-wall-corrugated-pipe-extrusion-line": "Ø 63 - 1200 mm",
  "pe-hollow-wall-winding-pipe-extrusion-line": "Ø 200 - 3000 mm",
  "pex-al-pex-pipe-machine": "Ø 16 - 63 mm",
  "rtp-tcp-pipe-production-line": "Ø 50 - 630 mm",
  "automatic-pipe-drilling-slotting-machine": "Ø 50 - 630 mm",
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

const productCards = productNav
  .map((name) => {
    const slug = slugify(name);
    const product = products[slug];

    if (!product) {
      return null;
    }

    return {
      slug,
      ...product,
      image: product.images[0],
      range: ranges[slug],
      imageSize: imageSizes[slug] || { width: 2000, height: 1333 },
    };
  })
  .filter(Boolean);

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

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="products-page-main">
        <section className="products-center-hero">
          <div className="container">
            <nav className="products-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <ChevronRight size={14} aria-hidden="true" />
              <span>Product Center</span>
            </nav>
            <span className="section-kicker">Product Center</span>
            <h1>Advanced Plastic Pipe Extrusion Solutions</h1>
            <p>
              Explore Xinrongplas high-performance machinery for PE, PVC, PPR,
              corrugated, composite, reinforced, and post-processing pipe
              production.
            </p>
          </div>
        </section>

        <section className="products-center-section">
          <div className="container products-center-grid">
            {productCards.map(({ slug, title, description, image, range, imageSize }) => {
              const alt = `Xinrongplas ${title} machinery`;

              return (
                <article className="products-center-card" key={slug} itemScope itemType="https://schema.org/Product">
                  <a className="products-center-media" href={`/products/${slug}`} itemProp="url">
                    <img
                      src={image}
                      alt={alt}
                      title={alt}
                      width={imageSize.width}
                      height={imageSize.height}
                      loading="lazy"
                      decoding="async"
                      itemProp="image"
                    />
                  </a>
                  <div className="products-center-body">
                    <span className="products-center-tag">
                      <Factory size={15} aria-hidden="true" />
                      Pipe Extrusion Machinery
                    </span>
                    <h2 itemProp="name">{title}</h2>
                    <p itemProp="description">{description}</p>
                    <div className="products-center-spec">
                      <span>
                        <Ruler size={16} aria-hidden="true" />
                        Specification
                      </span>
                      <strong>{range}</strong>
                    </div>
                    <a className="products-center-link" href={`/products/${slug}`}>
                      View Details <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="products-center-cta">
          <div className="container">
            <h2>Need a Customized Extrusion Line?</h2>
            <p>
              Share your pipe diameter, output, material, and application
              requirements. Xinrongplas engineers will prepare a tailored
              configuration for your production project.
            </p>
            <a className="primary-button" href="/contact">
              Consult an Engineer <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
