import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">Onze gespecialiseerde diensten</h2>
        <p className="services-intro">
          Bij Garden Brothers bieden we een uitgebreid aanbod aan professionele tuindiensten, afgestemd op zowel particulieren als kleine bedrijven. Ontdek hoe wij jouw tuin kunnen transformeren.
        </p>
        <div className="services-feature-grid">
          <article className="service-feature">
            <div className="service-feature-image">
              <img
                src="/algemeen tuinonderhoud.jpg"
                alt="Algemeen tuinonderhoud"
              />
            </div>
            <div className="service-feature-content">
              <h3 className="service-feature-title">Algemeen tuinonderhoud</h3>
              <p className="service-feature-text">
                Van regelmatig snoeien en maaien tot onkruidbestrijding en seizoensonderhoud,
                wij zorgen ervoor dat uw tuin er altijd op zijn best uitziet. Geniet van een
                zorgeloze, perfect onderhouden tuin.
              </p>
              <Link to="/diensten#dienst-algemeen" className="btn service-feature-btn">
                Lees meer
              </Link>
            </div>
          </article>
          <article className="service-feature">
            <div className="service-feature-image">
              <img
                src="/hogedrukreiniging.jpg"
                alt="Hogedrukreiniging"
              />
            </div>
            <div className="service-feature-content">
              <h3 className="service-feature-title">Hogedrukreiniging</h3>
              <p className="service-feature-text">
                Droomt u van een propere oprit, terras of gevel? Met professionele
                hogedrukreiniging maken we verhardingen en buitenruimtes opnieuw schoon en
                verzorgd, zonder beschadiging van het oppervlak.
              </p>
              <Link to="/diensten#dienst-hogedruk" className="btn service-feature-btn">
                Lees meer
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
