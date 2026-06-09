"use client";

import { Download, Quote, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductQuoteActions({ productTitle, sourcePage }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="product-actions">
        <button
          className="primary-button quote-modal-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <Quote size={18} aria-hidden="true" /> Request Quote
        </button>
        <a className="outline-button" href="#specifications">
          <Download size={18} aria-hidden="true" /> Catalog
        </a>
      </div>

      {isOpen ? (
        <div
          className="quote-modal-backdrop"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            className="quote-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="quote-modal-close"
              type="button"
              aria-label="Close quote form"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <div className="quote-modal-copy">
              <span>Product Inquiry</span>
              <h2 id="quote-modal-title">Request Quote</h2>
              <p>
                Send your {productTitle} requirements. Our engineers will reply
                with a tailored configuration and quotation.
              </p>
            </div>
            <form className="quote-modal-form" action="/api/inquiries" method="post">
              <input name="source_page" type="hidden" value={sourcePage} />
              <label>
                Full Name *
                <input name="full_name" required type="text" />
              </label>
              <label>
                Email Address *
                <input name="email" required type="email" />
              </label>
              <label>
                Phone Number *
                <input name="phone" required type="tel" />
              </label>
              <label>
                Country *
                <input name="country" required type="text" />
              </label>
              <label>
                Message *
                <textarea
                  name="message"
                  required
                  rows="4"
                  defaultValue={`I am interested in the ${productTitle}.`}
                />
              </label>
              <button className="primary-button form-button" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
