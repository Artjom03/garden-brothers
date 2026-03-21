import React from "react";

const projects = [
  {
    id: 1,
    before: "/before_1.jpg",
    after: "/after_1.jpg",
  },
  {
    id: 2,
    before: "/before_2.jpg",
    after: "/after_2.jpg",
  },
  {
    id: 3,
    before: "/before_3.jpg",
    after: "/after_3.jpg",
  },
];

export default function Portfolio() {
  const marqueeItems = [...projects, ...projects];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">onze realisaties</h2>
        <p className="portfolio-intro">
          Bij Yard Brothers zijn we trots op elk project dat we opleveren. Bekijk
          hier een selectie van tuinen die we met passie en vakmanschap hebben
          getransformeerd tot ware groene oases. Ontdek wat wij te bieden hebben
          en zie hoe wij kunnen bijdragen aan jouw succes en genot van de tuin.
        </p>
        <div className="portfolio-highlight">
          <span>Laat je inspireren door onze groene meesterwerken!</span>
        </div>
        <p className="portfolio-subtext">
          Elk van deze projecten toont onze toewijding aan kwaliteit, aandacht
          voor detail en de expertise die we in elke tuin leggen. Ontdek hier de
          diversiteit van ons werk.
        </p>
        <div className="portfolio-beforeafter-row">
          <div className="portfolio-beforeafter-legend" aria-hidden="true">
            <span>BEFORE</span>
            <span>AFTER</span>
          </div>
          <div className="portfolio-marquee-wrap">
            <div className="portfolio-marquee-track">
              {marqueeItems.map((project, index) => (
                <div
                  className="portfolio-beforeafter"
                  key={project.id + "-" + index}
                >
                  <div className="portfolio-before">
                    <img
                      src={project.before}
                      alt={`Voor: project ${project.id}`}
                    />
                  </div>
                  <div className="portfolio-after">
                    <img
                      src={project.after}
                      alt={`Na: project ${project.id}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="portfolio-outro">
          Geïnspireerd geraakt door onze projecten? Bij Yard Brothers staan we
          klaar om ook jouw tuin om te toveren tot een plek waar je volop kunt
          genieten. Wij leveren kwaliteit, stiptheid en eerlijke prijzen, zodat
          jij straks kunt genieten van je perfect onderhouden tuin.
        </div>
        <div className="portfolio-cta">
          <a href="/offerte" className="hero-btn hero-btn-primary">
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
        </div>
      </div>
    </section>
  );
}
