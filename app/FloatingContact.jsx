import { Mail, MessageCircle, Phone } from "lucide-react";

const phoneNumber = "0086-13115119251";
const emailAddress = "marketing1@xinrongpm.com";
const whatsappHref = "https://wa.me/8613115119251";

export default function FloatingContact() {
  return (
    <aside className="floating-contact" aria-label="Quick contact">
      <a
        className="floating-contact-link floating-contact-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Xinrongplas on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        className="floating-contact-link floating-contact-email"
        href={`mailto:${emailAddress}`}
        aria-label="Email Xinrongplas"
      >
        <Mail size={22} aria-hidden="true" />
        <span>Email</span>
      </a>
      <a
        className="floating-contact-link floating-contact-phone"
        href={`tel:${phoneNumber}`}
        aria-label="Call Xinrongplas"
      >
        <Phone size={22} aria-hidden="true" />
        <span>Phone</span>
      </a>
    </aside>
  );
}
