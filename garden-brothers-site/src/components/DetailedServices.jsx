import React from "react";

const basic = [
  "Gras maaien",
  "Heggen snoeien",
  "Onkruid verwijderen",
  "Kantjes afsteken",
  "Bladeren opruimen",
  "Snoeien van struiken",
  "Heggen & struiken verwijderen",
  "Tuin winterklaar maken",
  "Voorjaarsonderhoud",
  "Afvoeren van groenafval",
];
const cleaning = [
  "Terras reinigen",
  "Oprit reinigen",
  "Tuinmuren reinigen",
  "Omheining reinigen",
  "Tuinmeubelen reinigen",
  "Verwijderen van groene aanslag",
  "Mos verwijderen van verharding",
  "Vuilbakken & GFT-containers reinigen",
];
const extra = [
  "Tuinopruiming bij verkoop woning",
  "Leegstaande tuinen onderhouden",
  "Vakantie-onderhoud",
  "Eenmalige grote opkuis",
];

function ServiceList({ title, items, imgSrc, imgAlt, note }) {
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
      {note && <p className="detailed-service-note">{note}</p>}
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
            note="Bij hogedrukreiniging maken we gebruik van het water en de elektriciteit van de klant."
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
