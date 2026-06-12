import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Factory,
  Gauge,
  Menu,
  ShieldCheck,
  Tag,
} from "lucide-react";
import HeaderSearch from "../../HeaderSearch";
import { productNav } from "../../../lib/content";

export const metadata = {
  title: "PPR20-63mm High Speed Pipe Extrusion Lines Testing | Xinrongplas",
  description:
    "Xinrongplas tested one set of PPR20-63mm high speed pipe extrusion line with Siemens PLC control, vacuum tank, haul off machine, and dust free cutter.",
};

const post = {
  title: "PPR20-63mm High Speed Pipe Extrusion Lines Testing",
  category: "Industry News",
  source: "Xinrongplas News",
  intro:
    "Jiangsu Xinrongplas Machinery Co., Ltd. was founded in 1996 and has specialized in plastic pipe machinery for 29 years. For PPR pipe machinery, we manufacture lines covering 16-200mm diameter ranges. This week, we tested one set of PPR20-63mm pipe line for our client.",
  sourceUrl:
    "https://xinrongpm.com/new-ppr20-63mm-high-speed-pipe-extrusion-lines-testing/",
};

const articleBlocks = [
  {
    type: "image",
    src: "https://xinrongpm.com/wp-content/uploads/2024/03/PPR20-63mm-High-Speed-Pipe-Extrusion-Lines-Testing.jpg",
    alt: "PPR20-63mm high speed pipe extrusion line testing",
  },
  {
    type: "text",
    text: "Extruder with high quality screw and barrels, Siemens touch screen and PLC. Operation parameters and status are integrated into the touch screen, allowing operators to set up and revise rotation speed, traction speed, melting temperature, and each zone temperature.",
  },
  {
    type: "image",
    src: "https://xinrongpm.com/wp-content/uploads/2024/03/2-1.jpg",
    alt: "Siemens touch screen and PLC control for PPR pipe extrusion line",
  },
  {
    type: "text",
    text: "The extruder die head helps ensure melt temperature uniformity, thoroughly eliminating confluence seam issues and reducing flaws such as bubbles, black spots, and unsmooth inside walls caused by excessive temperature.",
  },
  {
    type: "text",
    text: "The vacuum tank is equipped with an automatic vacuum adjustment system to save electric cost. The cover is made of high quality casting aluminum alloy, with reinforced sprayers inside to ensure good cooling and pipe forming. Tank body, pipeline, elbow tee, union, valves, and related parts use 304 stainless steel for long-term machine operation.",
  },
  {
    type: "image",
    src: "https://xinrongpm.com/wp-content/uploads/2024/03/3-1.jpg",
    alt: "Vacuum cooling tank for PPR pipe production line",
  },
  {
    type: "text",
    text: "The haul off machine has a sliding tempered glass door structure that is practical and clean. The traction device uses belts controlled by an imported inverter to haul pipe steadily, while the compact structure is designed for low maintenance.",
  },
  {
    type: "text",
    text: "The line adopts a special automobile drive shaft to transmit power with stable and reliable performance. The length measuring device is equipped with a rotary encoder.",
  },
  {
    type: "image",
    src: "https://xinrongpm.com/wp-content/uploads/2024/03/4-2.jpg",
    alt: "Haul off machine for PPR20-63mm pipe line",
  },
  {
    type: "text",
    text: "Dust free cutter. The cutting process is controlled by PLC and can realize accurate arbitrary length cutting.",
  },
  {
    type: "image",
    src: "https://xinrongpm.com/wp-content/uploads/2024/03/5-1.jpg",
    alt: "Dust free cutter for PPR pipe extrusion line",
  },
  {
    type: "text",
    text: "Jiangsu Xinrongplas Machinery Co., Ltd. not only produces PPR pipe lines for 16-200mm diameter ranges, but also produces PE16-2000mm pipe lines, PVC16-1000mm pipe lines, PVC-O 90-630mm pipe lines, double-wall corrugated pipe lines, and more. If you have any plastic pipe line inquiry, please feel free to contact us.",
  },
];

const postHighlights = [
  ["Diameter Range", "PPR 20-63mm"],
  ["Control System", "Siemens touch screen and PLC"],
  ["Main Sections", "Extruder, vacuum tank, haul off, cutter"],
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

export default function SinglePostPage() {
  return (
    <>
      <SiteHeader />
      <main className="single-post-main">
        <section className="single-post-hero">
          <div className="container">
            <nav className="single-post-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/news">News</a>
              <span>/</span>
              <span>{post.title}</span>
            </nav>

            <div className="single-post-hero-grid">
              <div className="single-post-title-block">
                <a className="single-post-back" href="/news">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Back to News
                </a>
                <div className="single-post-meta">
                  <span>
                    <Tag size={16} aria-hidden="true" />
                    {post.category}
                  </span>
                  <span>{post.source}</span>
                </div>
                <h1>{post.title}</h1>
                <p>{post.intro}</p>
              </div>

              <aside className="single-post-summary" aria-label="Post highlights">
                {postHighlights.map(([label, value]) => (
                  <div key={label}>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <article className="single-post-article">
          <div className="container single-post-content">
            {articleBlocks.map((block, index) =>
              block.type === "image" ? (
                <figure className="single-post-figure" key={block.src}>
                  <img src={block.src} alt={block.alt} />
                </figure>
              ) : (
                <p key={`${block.type}-${index}`}>{block.text}</p>
              )
            )}
          </div>
        </article>

        <section className="single-post-product-strip">
          <div className="container">
            <div>
              <Gauge size={28} aria-hidden="true" />
              <h2>Related PPR Pipe Extrusion Line</h2>
              <p>
                Explore Xinrongplas PPR pipe extrusion machinery for stable
                production, precise temperature control, and flexible pipe
                diameter requirements.
              </p>
            </div>
            <a className="primary-button" href="/products/ppr-pipe-extrusion-line">
              View Product <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="single-post-cta">
          <div className="container">
            <div>
              <Factory size={38} aria-hidden="true" />
              <h2>Customize Your Plastic Pipe Extrusion Machinery!</h2>
              <p>Get a custom quote in less than five minutes.</p>
            </div>
            <a className="primary-button" href="/contact">
              Contact Us <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="single-post-source">
          <div className="container">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Content adapted from Xinrongplas original article.</span>
            <a href={post.sourceUrl}>Original source</a>
          </div>
        </section>
      </main>
    </>
  );
}
