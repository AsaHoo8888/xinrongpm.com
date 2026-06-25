"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function CertificateGallery({ certificates }) {
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    if (!activeCertificate) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  return (
    <>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={`${certificate.title}-${certificate.image}`}>
            <button
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              aria-label={`Enlarge ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={certificate.alt}
                title={certificate.alt}
                width={certificate.width}
                height={certificate.height}
                loading="lazy"
                decoding="async"
              />
            </button>
            <div>
              <small>{certificate.category}</small>
              <h3>{certificate.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {activeCertificate ? (
        <div
          className="certificate-lightbox"
          role="presentation"
          onMouseDown={() => setActiveCertificate(null)}
        >
          <div
            className="certificate-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={activeCertificate.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-lightbox-close"
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveCertificate(null)}
            >
              <X size={24} aria-hidden="true" />
            </button>
            <img
              src={activeCertificate.image}
              alt={activeCertificate.alt}
              width={activeCertificate.width}
              height={activeCertificate.height}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
