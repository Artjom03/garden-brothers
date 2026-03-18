import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-intro-grid">
          <div className="services-intro-text">
            <h2 className="services-intro-title">Yard Brothers</h2>
            <p className="services-intro-lead">
              Professioneel tuinonderhoud en hogedrukreiniging in Vlaanderen.
            </p>
            <p className="services-intro-body">
              Wij combineren persoonlijke service met vakmanschap. Van het netjes onderhouden
              van je tuin tot het grondig reinigen van terrassen, opritten en gevels: wij zorgen
              voor een buitenruimte waar jij zorgeloos van kunt genieten.
            </p>
          </div>
          <div className="services-intro-image">
              <img
                src="/basis tuinonderhoud.jfif"
                alt="Yard Brothers aan het werk in een tuin"
              />
          </div>
        </div>

        <div className="services-heading-block">
          <h2 className="services-title">Onze diensten</h2>
          <p className="services-intro">
              Bij Yard Brothers bieden we een uitgebreid aanbod aan professionele tuindiensten,
            afgestemd op zowel particulieren als kleine bedrijven. Ontdek hieronder onze
            belangrijkste diensten.
          </p>
        </div>

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
                wij zorgen ervoor dat jouw tuin er altijd op zijn best uitziet.
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
                Droom je van een propere oprit, terras of gevel? Met professionele
                hogedrukreiniging maken we verhardingen en buitenruimtes opnieuw schoon en
                verzorgd, zonder beschadiging van het oppervlak. Voor deze werken maken we
                gebruik van het water van de klant.
              </p>
              <Link to="/diensten#dienst-hogedruk" className="btn service-feature-btn">
                Lees meer
              </Link>
            </div>
          </article>
          <article className="service-feature">
            <div className="service-feature-image">
              <img
                src="/extra.jpg"
                alt="Extra diensten"
              />
            </div>
            <div className="service-feature-content">
              <h3 className="service-feature-title">Extra diensten</h3>
              <p className="service-feature-text">
                Naast ons vaste aanbod helpen we je ook graag met eenmalige of specifieke
                opdrachten.
              </p>
              <ul className="service-feature-list">
                <li>Tuinopruiming bij verkoop woning</li>
                <li>Leegstaande tuinen onderhouden</li>
                <li>Vakantie-onderhoud</li>
                <li>Eenmalige grote opkuis</li>
              </ul>
              <Link to="/diensten" className="btn service-feature-btn">
                Lees meer
              </Link>
            </div>
          </article>
        </div>

        <div className="services-cta-wrapper">
          <Link to="/diensten" className="services-cta-btn">
            <span className="services-cta-label">
              <span>Bekijk alle diensten</span>
              <span className="services-cta-icon" aria-hidden="true">
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
