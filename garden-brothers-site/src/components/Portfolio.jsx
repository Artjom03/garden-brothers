
import React from "react";

const placeholderProjects = [1, 2, 3];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">onze realisaties</h2>
        <p className="portfolio-intro">
          Bij Garden Brothers zijn we trots op elk project dat we opleveren. Bekijk hier een selectie van tuinen die we met passie en vakmanschap hebben getransformeerd tot ware groene oases. Ontdek wat wij te bieden hebben en zie hoe wij kunnen bijdragen aan jouw succes en genot van de tuin.
        </p>
        <div className="portfolio-highlight">
          <span>Laat je inspireren door onze groene meesterwerken!</span>
        </div>
        <p className="portfolio-subtext">
          Elk van deze projecten toont onze toewijding aan kwaliteit, aandacht voor detail en de expertise die we in elke tuin leggen. Ontdek hier de diversiteit van ons werk.
        </p>
        <div className="portfolio-beforeafter-legend" aria-hidden="true">
          <span>BEFORE</span>
          <span>AFTER</span>
        </div>
        <div className="portfolio-grid">
          {placeholderProjects.map((project) => (
            <div className="portfolio-beforeafter" key={project}>
              <div className="portfolio-before">
                <span>Project {project} foto</span>
              </div>
              <div className="portfolio-after">
                <span>Project {project} foto</span>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-outro">
          Geïnspireerd geraakt door onze projecten? Bij Garden Brothers staan we klaar om ook jouw tuin om te toveren tot een plek waar je volop kunt genieten. Wij leveren kwaliteit, stiptheid en eerlijke prijzen, zodat jij straks kunt genieten van je perfect onderhouden tuin.
        </div>
        <div className="portfolio-cta">
          <a href="/offerte" className="btn">
            Vraag gratis offerte aan
          </a>
        </div>
      </div>
    </section>
  );
}
