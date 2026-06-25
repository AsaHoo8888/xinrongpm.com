import { Facebook, Send, Youtube } from "lucide-react";
import { productNav } from "../lib/content";
import ContactPhoneField from "./contact/ContactPhoneField";

const footerLinks = [
  ["About Us", "/about"],
  ["Development Milestones", "/about#milestones"],
  ["Certificates", "/certificates"],
  ["Services", "/services"],
  ["News", "/news"],
  ["Video", "/video"],
  ["Project Cases", "/cases"],
  ["Contact", "/contact"],
];

const logoSrc =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBxgN6DgcHA3sZF4ZGd6XMMGRxG8mrG9FXW31mUv9UO5kSnm6J_wSRmkVBn7TmaVxBfkb-a4PjNb0tCsZ1QqS2uw37hRdr-QMZwhOTmu9WhCAt8Q0xD037lHRGu_3G5vLZaRaY06Vj2KRPlVCGrj7Ei8DWfdtewHAEeQYxfZAfKAnWffmj0mCSv3gCO8AiKKZwnZO2PIT4GNa_pE6s75C33koHMlO1CZy21ZYKqlUiDLtYl5jM1csFguMd1xpcOkikx7PIGtReiX-Y";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function productHref(value) {
  return `/products/${slugify(value)}`;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-mega">
        <div className="footer-brand-column">
          <a className="footer-logo" href="/" aria-label="Xinrongplas Home">
            <img src={logoSrc} alt="Xinrongplas" />
          </a>
          <p>
            Xinrongplas is a globally recognized leader in the design and
            manufacture of high-performance plastic extrusion machinery,
            delivering precision-engineered solutions for industrial
            infrastructure projects.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a
              href="https://www.youtube.com/channel/UCL2JDh3uqAl8TxXJtqKCecw"
              rel="noreferrer"
              target="_blank"
              title="YouTube"
            >
              <Youtube size={22} aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/xrongplas"
              rel="noreferrer"
              target="_blank"
              title="Facebook"
            >
              <Facebook size={22} aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>

        <div className="footer-link-column">
          <h2>Our Products</h2>
          <nav aria-label="Footer products">
            {productNav.map((item) => (
              <a href={productHref(item)} key={item}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-link-column">
          <h2>About</h2>
          <nav aria-label="Footer company links">
            {footerLinks.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-form-column">
          <h2>Quick Contact</h2>
          <form
            id="form-footer-quick-contact"
            className="grid gap-3"
            action="/api/inquiries"
            method="post"
          >
            <input name="source_page" type="hidden" value="/contact" />
            <input
              className="h-11 rounded border border-white/15 bg-brand-blue px-4 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-brand-green"
              name="full_name"
              placeholder="Name"
              required
              type="text"
            />
            <input
              className="h-11 rounded border border-white/15 bg-brand-blue px-4 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-brand-green"
              name="email"
              placeholder="Email"
              required
              type="email"
            />
            <ContactPhoneField label="" phonePlaceholder="Phone" required={false} />
            <textarea
              className="min-h-24 resize-y rounded border border-white/15 bg-brand-blue px-4 py-3 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-brand-green"
              name="message"
              placeholder="Message"
              required
              rows="3"
            />
            <button
              className="inline-flex h-11 items-center justify-center gap-2 rounded bg-brand-green px-5 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-[#4e9a26] focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:ring-offset-2 focus:ring-offset-brand-deep"
              type="submit"
            >
              Send Inquiry <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="footer-copyright">
          <span>Copyright © 2024 Jiangsu Xinrongplas Machinery Co., Ltd.</span>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
