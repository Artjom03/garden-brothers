import React from "react";

const basic = [
  "Gras maaien",
  "Heggen snoeien",
  "Onkruid verwijderen",
  "Kantjes afsteken",
  "Bladeren opruimen",
  "Snoeien van struiken",
  "Tuin winterklaar maken",
  "Voorjaarsonderhoud",
  "Afvoeren van groenafval",
];
const cleaning = [
  "Terras reinigen (tegels, klinkers, natuursteen)",
  "Oprit reinigen",
  "Gevel reinigen",
  "Tuinmuren reinigen",
  "Omheining reinigen",
  "Tuinmeubelen reinigen",
  "Verwijderen van groene aanslag",
  "Mos verwijderen van verharding",
  "Vuilbakken & GFT containers reinigen",
  "Dakgoten reinigen",
];
const extra = [
  "Tuinopruiming bij verkoop woning",
  "Leegstaande tuinen onderhouden",
  "Vakantie-onderhoud",
  "Eenmalige grote opkuis",
];

function ServiceList({ title, items }) {
  return (
    <div className="detailed-service-card">
      <h3 className="detailed-service-title">{title}</h3>
      <ul className="detailed-service-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function DetailedServices() {
  return (
    <section className="detailed-services-section" id="diensten">
      <div className="container">
        <h2 className="detailed-services-title">Onze diensten in detail</h2>
        <div className="dienst-details-intro">
          <article id="dienst-algemeen" className="dienst-detail">
            <h3>Algemeen onderhoud</h3>
            <p>
              Van regelmatig snoeien en maaien tot onkruidbestrijding en seizoensonderhoud,
              wij zorgen ervoor dat uw tuin er altijd op zijn best uitziet. Geniet van een
              zorgeloze tuin.
            </p>
          </article>
          <article id="dienst-hogedruk" className="dienst-detail">
            <h3>Hogedrukreiniging</h3>
            <p>
              Droomt u van een propere oprit, terras of gevel? Wij helpen u graag met
              professionele hogedrukreiniging, zodat uw buitenruimtes er opnieuw schoon en
              verzorgd uitzien.
            </p>
          </article>
        </div>
        <div className="detailed-services-cards">
          <ServiceList title="Basis Tuinonderhoud" items={basic} />
          <ServiceList title="Reinigingswerken" items={cleaning} />
          <ServiceList title="Extra Diensten" items={extra} />
        </div>
      </div>
    </section>
  );
}
