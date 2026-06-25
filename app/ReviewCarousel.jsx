"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export default function ReviewCarousel({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedReviews = reviews.map((_, index) => (
    reviews[(activeIndex + index) % reviews.length]
  ));

  function scrollReviews(direction) {
    setActiveIndex((currentIndex) => (
      (currentIndex + direction + reviews.length) % reviews.length
    ));
  }

  return (
    <>
      <div className="case-grid">
        {orderedReviews.map(([name, role, quote, image]) => (
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
      <div className="case-controls" aria-label="Testimonial navigation">
        <button type="button" aria-label="Previous testimonial" onClick={() => scrollReviews(-1)}>
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next testimonial" onClick={() => scrollReviews(1)}>
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
