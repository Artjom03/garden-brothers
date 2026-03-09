import React from "react";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-logo-mark">
            <img
              src="/logo.jpeg"
              alt="Garden Brothers logo"
              className="hero-logo-img"
            />
          </div>
          <p className="hero-kicker">Professioneel tuinonderhoud & hogedrukreiniging</p>
          <h1 className="hero-title">
            <span className="hero-title-main">Garden Brothers</span>
            <span className="hero-title-accent">Vlaanderen</span>
          </h1>
          <p className="hero-slogan">
            Wij doen het werk, jij geniet van je tuin.
          </p>
          <div className="hero-actions">
            <a href="/offerte" className="btn hero-btn hero-btn-primary">
              <span className="hero-btn-label">
                <span className="hero-btn-icon" aria-hidden="true">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span>Vraag gratis offerte aan</span>
              </span>
            </a>
            <a href="/diensten" className="btn hero-btn hero-btn-secondary">
              <span className="hero-btn-label">
                <span className="hero-btn-icon" aria-hidden="true">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </span>
                <span>Onze diensten</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
