"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

export default function ReviewCarousel({ reviews }) {
  const trackRef = useRef(null);

  function scrollReviews(direction) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector(".case-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = firstCard ? firstCard.offsetWidth + gap : track.clientWidth;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="case-controls" aria-label="Testimonial navigation">
        <button type="button" aria-label="Previous testimonial" onClick={() => scrollReviews(-1)}>
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next testimonial" onClick={() => scrollReviews(1)}>
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
      <div className="case-grid" ref={trackRef}>
        {reviews.map(([name, role, quote, image]) => (
          <article className="case-card" key={name}>
            <div className="star-row" aria-label="Five star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star size={22} fill="currentColor" strokeWidth={0} key={star} />
              ))}
            </div>
            <p>"{quote}"</p>
            <div className="case-person">
              <img src={image} alt={name} />
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
