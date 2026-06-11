"use client";

import { useState } from "react";

function altFromFilename(path) {
  const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
  return filename
    .replace(/[-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ProductGallery({ images, title }) {
  const gallery = images.map((src, index) => ({
    src,
    alt: index === 0
      ? `${title} - Complete Production Line Overview | Xinrongplas`
      : `${title} - ${altFromFilename(src).replace("Pe Pipe Extrusion", "").trim()}`,
  }));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = gallery[selectedIndex] || gallery[0];

  return (
    <div className="product-gallery">
      <div className="main-product-image">
        <img src={selectedImage.src} alt={selectedImage.alt} loading="eager" />
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
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
