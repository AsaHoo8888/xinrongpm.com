import { Mail, Phone } from "lucide-react";

const phoneNumber = "0086-13115119251";
const emailAddress = "marketing1@xinrongpm.com";
const whatsappHref = "https://wa.me/8613115119251";

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      focusable="false"
    >
      <path d="M16.04 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.24.59 4.43 1.7 6.35L3.15 28.8l6.72-1.76a12.8 12.8 0 0 0 6.17 1.57h.01c7.04 0 12.77-5.7 12.77-12.72S23.09 3.2 16.04 3.2Zm0 23.25h-.01c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-3.99 1.04 1.06-3.87-.25-.4a10.55 10.55 0 0 1-1.62-5.62c0-5.83 4.7-10.57 10.48-10.57 2.8 0 5.43 1.1 7.4 3.09a10.45 10.45 0 0 1 3.06 7.44c0 5.82-4.7 10.56-10.48 10.56Zm5.74-7.91c-.31-.16-1.86-.91-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.23 3.38 5.4 4.74.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

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
        <WhatsAppIcon size={22} />
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
