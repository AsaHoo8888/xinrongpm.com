export const metadata = {
  title: "Privacy Policy | Xinrongplas",
  description:
    "Privacy Policy for Jiangsu Xinrongplas Machinery Co., Ltd. website inquiries and contact information.",
};

const sections = [
  [
    "Information We Collect",
    "When you submit an inquiry form, we may collect your full name, email address, phone number, country, company requirements, and message content. We may also receive basic technical information such as IP address and browser data for security and service improvement.",
  ],
  [
    "How We Use Information",
    "We use submitted information to respond to product inquiries, prepare quotations, recommend suitable extrusion machinery, arrange technical communication, and improve our customer service process.",
  ],
  [
    "Information Storage",
    "Inquiry information may be stored in our website database and internal customer communication systems. We keep this information only as long as needed for business communication, service follow-up, legal compliance, and record keeping.",
  ],
  [
    "Information Sharing",
    "We do not sell your personal information. We may share necessary inquiry details with our internal sales, engineering, logistics, or service teams only when required to respond to your request.",
  ],
  [
    "Your Choices",
    "You may contact us to request correction or deletion of your inquiry information, subject to reasonable business and legal record requirements.",
  ],
  [
    "Contact Us",
    "For privacy-related questions, please contact us at marketing1@xinrongpm.com or service@xinrongpm.com.",
  ],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="contact-page-main">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-copy">
          <h1>Privacy Policy</h1>
          <span aria-hidden="true" />
          <p>
            This policy explains how Xinrongplas handles information submitted
            through our website contact and inquiry forms.
          </p>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <article className="contact-card">
            {sections.map(([title, content]) => (
              <section className="policy-section" key={title}>
                <h2>{title}</h2>
                <p>{content}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
