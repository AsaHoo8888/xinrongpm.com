"use client";

import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactPhoneField from "../contact/ContactPhoneField";

export default function ProductQuoteActions({
  productTitle,
  sourcePage,
  buttonLabel = "Request Quote",
  actionsClassName = "",
  showCatalog: showCatalogOverride,
  catalogHref = "/downloads/xinrongplas-catalog.pdf",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const showCatalog =
    showCatalogOverride ?? productTitle !== "Automatic Pipe Drilling/Slotting Machine";

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
      <div className={`product-actions${showCatalog ? "" : " product-actions-single"}${actionsClassName ? ` ${actionsClassName}` : ""}`}>
        <button
          className="primary-button quote-modal-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          {buttonLabel}
        </button>
        {showCatalog ? (
          <a
            className="outline-button"
            href={catalogHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} aria-hidden="true" /> Catalog
          </a>
        ) : null}
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
              <div className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                Inquiry received. We will reply soon.
              </div>
            ) : (
              <form
                id="form-product-quote-modal"
                className="quote-modal-form grid gap-4"
                onSubmit={handleSubmit}
              >
                <input name="source_page" type="hidden" value={sourcePage} />
                <input name="product_title" type="hidden" value={productTitle} />
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Full Name *
                  <input
                    className="h-12 rounded border border-slate-300 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    name="full_name"
                    required
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Email Address *
                  <input
                    className="h-12 rounded border border-slate-300 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    name="email"
                    required
                    type="email"
                  />
                </label>
                <ContactPhoneField />
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Message *
                  <textarea
                    className="min-h-32 resize-y rounded border border-slate-300 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    name="message"
                    required
                    rows="4"
                    defaultValue={`I am interested in the ${productTitle}.`}
                  />
                </label>
                {status === "error" ? (
                  <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Submission failed. Please try again or contact us directly.
                  </p>
                ) : null}
                <button
                  className="inline-flex h-12 items-center justify-center rounded bg-brand-blue px-6 text-sm font-bold uppercase tracking-normal text-white transition hover:bg-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
