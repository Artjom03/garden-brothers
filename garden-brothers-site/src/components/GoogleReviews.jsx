import React from "react";

// Vervang onderstaande gegevens door je echte Google reviews
const reviews = [
  {
    id: 1,
    name: "Jorrit De Jonghe",
    service: "Opritreiniging",
    text: "Thanks for the amazing service! Alles tot in de puntjes afgewerkt.",
  },
  {
    id: 2,
    name: "Anoniem",
    service: "Snoeiwerken",
    text: "Heel professioneel, duidelijke communicatie en prachtig resultaat.",
  },
  {
    id: 3,
    name: "Anoniem",
    service: "Gazon",
    text: "Ons gazon ziet er weer als nieuw uit.",
  },
  {
    id: 4,
    name: "Anoniem",
    service: "Tuinonderhoud",
    text: "Mijn tuin ligt er weer tiptop bij dankzij een vriendelijke jongeman.",
  },
];

function StarRow() {
  return (
    <div className="google-review-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  // Dupliceer de lijst zodat de balk eindeloos kan scrollen
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="container">
        <div className="google-reviews-header">
          <p className="google-reviews-kicker">Wat onze klanten zeggen</p>
          <h2 id="google-reviews-title" className="google-reviews-title">
            Beoordeeld als uitstekend door onze klanten
          </h2>
        </div>
      </div>
      <div className="google-reviews-marquee-wrap">
        <div className="google-reviews-marquee-track">
          {marqueeItems.map((review, index) => (
            <article className="google-review-card" key={review.id + "-" + index}>
              <header className="google-review-header">
                <div className="google-review-avatar" aria-hidden="true">
                  <span>{review.name.charAt(0)}</span>
                </div>
                <div className="google-review-meta">
                  <p className="google-review-name">{review.name}</p>
                  <p className="google-review-time">Onlangs</p>
                </div>
                <StarRow />
              </header>
              <p className="google-review-text">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
