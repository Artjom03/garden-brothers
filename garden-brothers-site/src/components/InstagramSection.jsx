import React from "react";

export default function InstagramSection() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-title">
      <div className="container instagram-grid">
        <div className="instagram-text">
          <p className="instagram-kicker">Volg ons op</p>
          <h2 id="instagram-title" className="instagram-title">Instagram</h2>
          <p className="instagram-subtitle">
            Blijf op de hoogte van onze laatste projecten, voor- & na-foto&apos;s en exclusieve acties.
          </p>
          <a
            href="https://www.instagram.com/yardbrothersbe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-primary instagram-btn"
          >
            <span className="hero-btn-label">
              <span className="hero-btn-icon" aria-hidden="true">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="1.35em"
                  height="1.35em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M12 8.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </span>
              <span>Volg ons op Instagram</span>
            </span>
          </a>
        </div>
        <div className="instagram-card">
          <div className="instagram-card-inner">
            <div className="instagram-card-icon">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                  width="4.1em"
                  height="4.1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M12 8.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </div>
            <p className="instagram-handle">Yard Brothers</p>
            <p className="instagram-card-text">
              Ontdek onze laatste werkzaamheden en resultaten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
