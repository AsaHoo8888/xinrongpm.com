import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Factory,
  Languages,
  Mail,
  Menu,
  Newspaper,
  Search,
  Settings,
  Sprout,
  Zap,
} from "lucide-react";
import { productNav } from "../../lib/content";

export const metadata = {
  title: "News & Technical Insights | Xinrongplas Machinery",
  description:
    "Read Xinrongplas news, technical insights, project milestones, and plastic pipe extrusion industry updates.",
};

const heroImage =
  "https://lh3.googleusercontent.com/aida/AP1WRLvczACqYkrjlOhjN3eJjBS8GX78v0ePobRENaATFmopI2kKvn83a7p6jcmQUcnQCBBRHmil6lpiokCRvCiUfPNVoLFOK7kuinlGjRvLhpzzrZs-97QMAIR7iRKFEHCiXnopwgsaKoi2lTa-wMyHPIWLfJK-u4rgIckWptb2Egaz0jqHVM5Q1ayfLP4-bAueeGVqlS1ex794UH5hmxlLQLJTwJa4a3AMmS-P-B5RtkVdql6F-iantNGOThw";

const featuredPost = {
  category: "Technical",
  date: "June 12, 2024",
  title: "The Future of PVC-O: MRS 500 Grade Extrusion Breakthrough",
  excerpt:
    "After 8 years of R&D, Xinrongplas successfully launches the PVC-O pipe line for 90-630mm diameters, setting new industry standards for material efficiency and pressure resistance.",
  image:
    "https://lh3.googleusercontent.com/aida/AP1WRLuROLU8l34hOIm3K6crwv5pGCRd_6zjFquiXXVo2VXuaWMsOOpJTGJCdjNH1u_luEP3jyPu4zRGA5MxcLl_7w6_PFf2fkmume6evFy9K_Q7Whw2ldq--FCI5pzXPPqx7Pm8sCuug-AgYoHB7bP47HL3Z2MiM1u7qOw65lRwkEijU2-RNbbzmHL19fRDgYjlW3gXvgWHtk9Aenmgr4h8Vq4HQlMcjNeZYNJSHinf8Sl-nwgJwF0fdTj61g",
};

const posts = [
  {
    category: "Company",
    date: "May 28, 2024",
    title: "2024 Global Sales Training: Enhancing Customer Service Standards",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLv8NvmgiLV_BAnd0pKLNAceO2zbe96NdLevklT4IOdH0ydOcTYjHGEwRPSmxBE9PmWQVRBe2_XWDnM9mnrOMoa-N7GcfJ4JZ4nQpI7qJHC7AiVLpAGrzZW6dsiOOcANPJFxtQVBKP954qWnf3cPwFbou8_YPI0_oH9fIsAqKr5tyftJsedIJhJaqyr2o98BMnRCeZoY-oZ2NrrcRVsxeRi4Cj4hPsVXa71ERa378rzMwwvn8oeHR8eWIA",
    icon: Newspaper,
  },
  {
    category: "Innovation",
    date: "May 15, 2024",
    title: "Sustainable Manufacturing: Integrating Multi-layer Recycled Materials in PE Pipes",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsRV8PpONWMfzfQdJMJuFFV58_VZwwYrdRYFG_Viyy31CXBFkKZp2T56RKvBeBahcpxwfb_JgUAx-uoiiUhTXbpaaCSpzy7WLJk1D6RmIf257BLqwu5_X_gBWxGmfU1QbTrgNJnyqoQi-W_wKkV-ILNs61xDIAaoWKEX3yDlkaXjYsZZygxu7Q3pI_mEuFXuLs7h6sSjBKWzp2zJ9Vd5AxFlg49JeylH8TGXzb8BE2pHJ7GAEjNvKgGIAI",
    icon: Sprout,
  },
  {
    category: "Events",
    date: "April 10, 2024",
    title: "Upcoming Exhibition: Chinaplas 2024 in Shanghai",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsa0AOchC4CxawlY2995b-wkyMXvi4fI4rGuVizSJQMhtb6KuCPQL7ipgb77GZ_WpSPfUiPIeiQokuZpzICTlXf-jl0iBqD64cVO4m4E_F3z-xwljeSC-tik3zzEOquB1eHxlxJAIGEXrhH7yGqgorxuXz8M_Mi6S_tqkNSRH31ylgHr86NfuQfyE0nvt_qky1a7W0QP1j0x6Zsleg5vuNWVzUUiUFFT7C93EcNfJIRKmOFTl3-gQomJg",
    icon: CalendarDays,
  },
  {
    category: "Case Study",
    date: "March 22, 2024",
    title: "Installation Complete: Turnkey PE Pipe Line Project in Southeast Asia",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsh_sSecY8QrRSwfO0TWBLxKzCoS5CBInlwYz_-_uhnZF94mg_u75V6KAlC72nTIFMlXD24LpFH4qNLUMY-x57Ux98JV5Wd3jWy4GMzDuDw7wkgoRSjitdFGXyyT2_c4Yoqer0mS3KpQIgWczfpHU9ZGk9UNdInKDW2DhKaQ0jj0nc64TlWOeKamqYjXfMTIApn8uPloZ8Yte6Aw7O751e3iB2dAzybZrW0yOlF9LAU8lXR00UdN2LfXqE",
    icon: Factory,
  },
  {
    category: "Technical",
    date: "February 15, 2024",
    title: "Energy Efficiency Report: Permanent Magnet Motors Saving 20% Power",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtoPy8bWXm07_crMfBv4iUKQVX5wEi35xg15o_OUIdBdPOGzhigfGkk35WwRuj3Bp_DQJdZzdp6A_RdufA6T-DbViGAni9Iuu65ArvkRYkXxuxBDbwcelJDw4QH2Bp6lD5gz_-JNBY65_LqGsL9wnRudCR1_0BISt2TAl76ZbC-Ejf3R2-zgAFcOPBAIKvnE6ZEpcD1l3AMJMz7xE8Is16C5EgMD2bmSvaK7NRf03yGku-E7-_hv6hydWw",
    icon: Zap,
  },
  {
    category: "Factory",
    date: "January 30, 2024",
    title: "New CNC Machining Center Operational for Enhanced Precision",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvvL9lBmbqHqV7FBY5L3I4W43yqIJdFflYuXDhbDSnhOaQ9m58Yz70zigcrLuI7sGQ5XPqv8NsxaC1rrPHbGixVF9RzzJEJCQqNeN06kTgPaJs_t3BlZ26qZKyA6PoUsCtBbhBQukePv49zNmVpbGlkO7WQp8Bx4OpFnRR26baqGvGXAVxZYU_80PW6Zs0C8bOaBTh7366ZcDkzs5iCiySgDSmBKEfmtxpcuRBGC-IBEOCTUjqF9riEigA",
    icon: Settings,
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
      <a className="nav-link nav-link-active" href="/news">
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
          <img src={heroImage} alt="Plastic extrusion technical news archive" />
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
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span>{featuredPost.category}</span>
              </div>
              <div className="news-featured-body">
                <small>{featuredPost.date}</small>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <a href="/contact">
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
              {posts.map((post) => {
                const Icon = post.icon;

                return (
                  <article className="news-card" key={post.title}>
                    <div className="news-card-media">
                      <img src={post.image} alt={post.title} />
                      <span>{post.category}</span>
                    </div>
                    <div className="news-card-body">
                      <small>{post.date}</small>
                      <h3>{post.title}</h3>
                      <div>
                        <a href="/contact">Read More</a>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <nav className="news-pagination" aria-label="News pagination">
              <button type="button" aria-label="Previous page">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button className="is-active" type="button">
                1
              </button>
              <button type="button">2</button>
              <button type="button">3</button>
              <span>...</span>
              <button type="button">
                Next <ChevronRight size={18} aria-hidden="true" />
              </button>
            </nav>
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
            <form className="news-subscribe-form">
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
