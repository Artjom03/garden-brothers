import React, { useState } from "react";

const faqs = [
  {
    q: "Wie voert de werken uit?",
    a: "Alle werken worden door onszelf uitgevoerd, zonder tussenpersonen of extern personeelhiep. Zo heeft u altijd rechtstreeks contact met ons en kunnen wij de kwaliteit van ons werk garanderen..",
  },
  {
    q: "Welke tuinwerken voeren jullie uit?",
    a: "Wij bieden een breed gamma aan tuinwerken aan, zoals gras maaien, snoeien van hagen en bomen, onkruid verwijderen, algemeen tuinonderhoud en tuinopruiming. Zowel kleine tuinen als grotere projecten zijn welkom, steeds aangepast aan de noden van uw tuin..",
  },
  {
    q: "Doen jullie eenmalige werken of ook onderhoud?",
    a: "U kan ons inschakelen voor eenmalige werken, zoals een grote opkuis of seizoen snoei, maar ook voor periodiek onderhoud (wekelijks, maandelijks of per seizoen). Zo blijft uw tuin het hele jaar door in topvorm, zonder zorgen..",
  },
  {
    q: "Wat gebeurt er met het tuinafval na de werken?",
    a: "Na de werken nemen wij al het tuinafval mee. Het groenafval dat vrijkomt, zoals takken, bladeren en snoeiresten, wordt door ons verzameld en afgevoerd. Dit wordt vervolgens op een correcte en milieuvriendelijke manier verwerkt. U hoeft zich dus geen zorgen te maken over het opruimen of afvoeren van het tuinafval..",
  },
  {
    q: "Hoe werken jullie qua prijs en offertes?",
    a: "De prijs hangt af van de grootte van de tuin, het soort werk en de tijd die nodig is. Wij werken met eerlijke en transparante prijzen. Na een korte bespreking of plaats bezoek krijgt u een duidelijke prijsafspraak vooraf. Offertes zijn volledig vrijblijvend, zonder verrassingen achteraf..",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="about" className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">Veelgestelde vragen</h2>
        <p className="faq-intro">
          Informatie over Garden Brothers. Veelgestelde vragen over onze tuindiensten. Hier beantwoorden we de meest gestelde vragen, gebaseerd op onze ervaringen. Van de unieke aanpak van Garden Brothers tot de veelvoorkomende zorgen en misverstanden over tuindiensten, wij voorzien je graag van duidelijke en eerlijke antwoorden. Ons doel is om alle twijfels weg te nemen en je te laten zien waarom Garden Brothers de juiste keuze is voor jouw tuin.
        </p>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className={`faq-item${open === idx ? ' open' : ''}`}> 
              <button
                className="faq-question"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.q}</span>
                <span className="faq-toggle">{open === idx ? "-" : "+"}</span>
              </button>
              {open === idx && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
