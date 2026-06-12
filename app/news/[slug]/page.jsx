import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Menu,
  Tag,
  UserRound,
} from "lucide-react";
import HeaderSearch from "../../HeaderSearch";
import { notFound } from "next/navigation";
import { productNav } from "../../../lib/content";
import { articles, getArticleBySlug } from "../articles";

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

function ArticleBlock({ block }) {
  if (block.type === "table") {
    return (
      <div className="single-post-table-wrap">
        <table>
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <p>{block.text}</p>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Xinrongplas News`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

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
              <span>{article.title}</span>
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
                    {article.category}
                  </span>
                  <span>
                    <CalendarDays size={16} aria-hidden="true" />
                    {article.date}
                  </span>
                  <span>
                    <BookOpen size={16} aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>
                <h1>{article.title}</h1>
                <p>{article.excerpt}</p>
              </div>

              <aside className="single-post-summary" aria-label="Article details">
                <div>
                  <small>Category</small>
                  <strong>{article.category}</strong>
                </div>
                <div>
                  <small>Author</small>
                  <strong>{article.author}</strong>
                </div>
                <div>
                  <small>Published</small>
                  <strong>{article.date}</strong>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <article className="single-post-article">
          <div className="container single-post-content">
            <figure className="single-post-figure">
              <img
                src={article.image}
                alt={article.imageAlt}
                title={article.title}
                width="2560"
                height="1440"
                loading="eager"
                decoding="async"
              />
            </figure>
            {article.blocks.map((block, index) => (
              <ArticleBlock block={block} key={`${block.type}-${index}`} />
            ))}
          </div>
        </article>

        <section className="single-post-cta">
          <div className="container">
            <div>
              <UserRound size={30} aria-hidden="true" />
              <h2>Need Pipe Extrusion Line Guidance?</h2>
              <p>
                Share your pipe diameter, material, output, and application
                requirements. Xinrongplas engineers will recommend a suitable
                extrusion line configuration.
              </p>
            </div>
            <a className="primary-button" href="/contact">
              Request Quote <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
