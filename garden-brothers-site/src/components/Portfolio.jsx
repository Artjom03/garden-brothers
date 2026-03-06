
import React from "react";
import AdviceCard from "./AdviceCard";

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
        <div className="portfolio-grid">
          <AdviceCard
            img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            title="Tuinrenovatie: van verwilderd naar strak en onderhoudsvriendelijk"
          >
            Complete make-over van een stadstuin met nieuwe beplanting, gazon en terras.
          </AdviceCard>
          <AdviceCard
            img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            title="Sfeervolle landelijke tuin met vijver"
          >
            Aanleg van een natuurlijke vijver, houten vlonder en kleurrijke borders.
          </AdviceCard>
          <AdviceCard
            img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
            title="Strakke voortuin met duurzame materialen"
          >
            Herinrichting met onderhoudsarme planten, siergrind en moderne bestrating.
          </AdviceCard>
        </div>
        <div className="portfolio-outro">
          Geïnspireerd geraakt door onze projecten? Bij Garden Brothers staan we klaar om ook jouw tuin om te toveren tot een plek waar je volop kunt genieten. Wij leveren kwaliteit, stiptheid en eerlijke prijzen, zodat jij straks kunt genieten van je perfect onderhouden tuin.
        </div>
        <div className="portfolio-cta">
          <a href="#quote" className="btn">
            Vraag gratis offerte aan
          </a>
        </div>
      </div>
    </section>
  );
}
