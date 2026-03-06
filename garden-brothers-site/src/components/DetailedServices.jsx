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

function ServiceList({ title, items, imgSrc, imgAlt }) {
  return (
    <div className="detailed-service-card">
      {imgSrc && (
        <div className="detailed-service-image">
          <img src={imgSrc} alt={imgAlt || title} />
        </div>
      )}
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
        <div className="detailed-services-cards">
          <ServiceList
            title="Basis Tuinonderhoud"
            items={basic}
            imgSrc="/basis tuinonderhoud.jfif"
            imgAlt="Basis tuinonderhoud"
          />
          <ServiceList
            title="Reinigingswerken"
            items={cleaning}
            imgSrc="/rijnigingswerken.jpg"
            imgAlt="Reinigingswerken"
          />
          <ServiceList
            title="Extra Diensten"
            items={extra}
            imgSrc="/extra diensten.jpeg"
            imgAlt="Extra diensten"
          />
        </div>
      </div>
    </section>
  );
}
