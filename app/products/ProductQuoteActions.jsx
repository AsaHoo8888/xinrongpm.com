"use client";

import { Download, Quote, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactPhoneField from "../contact/ContactPhoneField";

export default function ProductQuoteActions({ productTitle, sourcePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setStatus(null);

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

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("product_title", productTitle);
    formData.set("source_page", sourcePage);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData,
      });

      const url = new URL(response.url);
      setStatus(url.searchParams.get("inquiry") === "sent" ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

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
            {status === "sent" ? (
              <div className="form-status">Inquiry received. We will reply soon.</div>
            ) : (
              <form id="form-product-quote-modal" className="quote-modal-form" onSubmit={handleSubmit}>
                <input name="source_page" type="hidden" value={sourcePage} />
                <input name="product_title" type="hidden" value={productTitle} />
                <label>
                  Full Name *
                  <input name="full_name" required type="text" />
                </label>
                <label>
                  Email Address *
                  <input name="email" required type="email" />
                </label>
                <ContactPhoneField />
                <label>
                  Message *
                  <textarea
                    name="message"
                    required
                    rows="4"
                    defaultValue={`I am interested in the ${productTitle}.`}
                  />
                </label>
                {status === "error" ? (
                  <p className="form-status-error">
                    Submission failed. Please try again or contact us directly.
                  </p>
                ) : null}
                <button
                  className="primary-button form-button"
                  disabled={status === "loading"}
                  type="submit"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
