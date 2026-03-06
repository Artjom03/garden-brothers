import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Onze gespecialiseerde diensten</h2>
        <p className="services-intro">
          Bij Garden Brothers bieden we een uitgebreid aanbod aan professionele tuindiensten, afgestemd op zowel particulieren als kleine bedrijven. Ontdek hoe wij jouw tuin kunnen transformeren.
        </p>
        <div className="services-cards">
          <ServiceCard title="Algemeen Tuinonderhoud">
            Van regelmatig snoeien en maaien tot onkruidbestrijding en seizoensonderhoud, wij zorgen ervoor dat uw tuin er altijd op zijn best uitziet. Geniet van een zorgeloze tuin.
          </ServiceCard>
          <ServiceCard title="Hogedrukreiniging">
            Droomt u van een propere oprit, terras of gevel? Wij helpen u graag met professionele hogedrukreiniging, zodat uw buitenruimtes er opnieuw schoon en verzorgd uitzien.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
