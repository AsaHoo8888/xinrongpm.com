"use client";

import { useState } from "react";

export default function ProductGallery({ images, title }) {
  const gallery = images.map((src, index) => ({
    src,
    alt: index === 0 ? `${title} Main View` : `${title} Detail ${index}`,
  }));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = gallery[selectedIndex] || gallery[0];

  return (
    <div className="product-gallery">
      <div className="main-product-image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="thumb-grid">
        {gallery.map((image, index) => (
          <button
            className={`thumb-image${index === selectedIndex ? " thumb-image-active" : ""}`}
            key={image.src}
            onClick={() => setSelectedIndex(index)}
            type="button"
            aria-label={`Show ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
    </div>
  );
}
