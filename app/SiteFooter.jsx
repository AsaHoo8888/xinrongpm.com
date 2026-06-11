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
          <strong>Xinrongplas</strong>
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
          <form id="form-footer-quick-contact" action="/api/inquiries" method="post">
            <input name="source_page" type="hidden" value="/contact" />
            <input name="full_name" placeholder="Name" required type="text" />
            <input name="email" placeholder="Email" required type="email" />
            <ContactPhoneField label="" phonePlaceholder="Phone" required={false} />
            <textarea name="message" placeholder="Message" required rows="3" />
            <button type="submit">
              Send Inquiry <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="footer-copyright">
          <span>Copyright © 2024 Jiangsu Xinrongplas Machinery Co., Ltd.</span>
          <div>
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
