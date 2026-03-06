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
    <section className="detailed-services-section" id="detailed-services">
      <div className="container">
        <h2 className="detailed-services-title">Uitgebreide Diensten</h2>
        <div className="detailed-services-cards">
          <ServiceList title="Basis Tuinonderhoud" items={basic} />
          <ServiceList title="Reinigingswerken" items={cleaning} />
          <ServiceList title="Extra Diensten" items={extra} />
        </div>
      </div>
    </section>
  );
}
