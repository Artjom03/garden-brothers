import React, { useState } from "react";

const faqCategories = [
  {
    id: "algemeen",
    label: "Algemene vragen",
    questions: [
      {
        q: "Welke diensten bieden jullie aan?",
        a: "Wij bieden tuinonderhoud zoals gras maaien, heggen snoeien, struiken snoeien, onkruid verwijderen, tuin opruimen en seizoensonderhoud. Daarnaast reinigen we ook terrassen, opritten en andere buitenoppervlakken met hogedruk.",
      },
      {
        q: "In welke regio werken jullie?",
        a: "Wij werken in jouw regio en omliggende gemeenten. Bij twijfel kan je ons altijd even contacteren om te kijken of we tot bij jou komen.",
      },
      {
        q: "Kan ik een gratis offerte krijgen?",
        a: "Ja, wij bieden een gratis en vrijblijvende offerte na een korte bespreking of plaatsbezoek. Zo weet je op voorhand exact waar je aan toe bent.",
      },
      {
        q: "Hoe snel kunnen jullie langskomen?",
        a: "Dat hangt af van de drukte en het seizoen, maar meestal kunnen wij binnen enkele dagen tot een week langskomen.",
      },
      {
        q: "Werken jullie voor zowel particulieren als bedrijven?",
        a: "Ja, wij werken voor particulieren, bedrijven en verhuurders die hun tuin of buitenruimte professioneel willen laten onderhouden.",
      },
      {
        q: "Doen jullie ook eenmalige werken of enkel regelmatig onderhoud?",
        a: "Beide zijn mogelijk. Je kan ons inschakelen voor een eenmalige klus of voor regelmatig onderhoud, bijvoorbeeld maandelijks of tweewekelijks.",
      },
      {
        q: "Hoe kan ik een afspraak maken?",
        a: "Je kan eenvoudig een afspraak maken via het contactformulier op de website, telefonisch of via e-mail.",
      },
      {
        q: "Wat als het slecht weer is op de dag van de afspraak?",
        a: "Bij slecht weer kan het zijn dat we de afspraak moeten verplaatsen. We nemen dan tijdig contact met je op om een nieuwe datum af te spreken.",
      },
      {
        q: "Moet ik thuis zijn tijdens de werken?",
        a: "Dat is niet noodzakelijk. Zolang we toegang hebben tot de tuin kunnen wij het werk uitvoeren. Uiteraard stemmen we dit graag op voorhand met je af.",
      },
    ],
  },
  {
    id: "tuinonderhoud",
    label: "Tuinonderhoud",
    questions: [
      {
        q: "Hoe vaak moet mijn tuin onderhouden worden?",
        a: "Dat hangt af van de grootte van de tuin en de beplanting. Veel klanten kiezen voor maandelijks of tweewekelijks onderhoud zodat de tuin het hele jaar door netjes blijft.",
      },
      {
        q: "Nemen jullie het groenafval mee?",
        a: "Ja, wij kunnen het groenafval afvoeren naar het recyclagepark of in overleg bij de klant laten. Dit bespreken we graag vooraf.",
      },
      {
        q: "Doen jullie ook eenmalige tuinklussen?",
        a: "Ja, zowel eenmalige werken als regelmatig onderhoud zijn mogelijk. Denk bijvoorbeeld aan een grote opkuis of snoeibeurt.",
      },
      {
        q: "Kunnen jullie een overgroeide tuin weer netjes maken?",
        a: "Ja, wij kunnen sterk overgroeide tuinen volledig opruimen en opnieuw in vorm brengen, zodat je opnieuw van je buitenruimte kan genieten.",
      },
      {
        q: "Welke tuinwerken voeren jullie uit?",
        a: "Wij voeren onder andere gras maaien, heggen snoeien, struiken snoeien, onkruid verwijderen, bladeren opruimen en algemeen tuinonderhoud uit.",
      },
      {
        q: "Doen jullie ook seizoensonderhoud van tuinen?",
        a: "Ja, wij bieden zowel voorjaarsonderhoud als najaarsonderhoud aan om de tuin klaar te maken voor het nieuwe seizoen.",
      },
      {
        q: "Kunnen jullie ook kleine tuinwerken uitvoeren?",
        a: "Ja, naast onderhoud kunnen we ook kleinere tuinwerken uitvoeren zoals borders opruimen, planten bijwerken en kleine herstellingen in de tuin.",
      },
      {
        q: "Wat kost tuinonderhoud gemiddeld?",
        a: "De prijs hangt af van de grootte van de tuin en het soort werk. Na een korte bespreking of plaatsbezoek maken we een duidelijke en transparante offerte.",
      },
      {
        q: "Brengen jullie zelf materiaal mee voor het tuinonderhoud?",
        a: "Ja, wij brengen al het nodige professionele materiaal mee om het werk efficiënt en veilig uit te voeren.",
      },
    ],
  },
  {
    id: "hogedruk",
    label: "Hogedrukreiniging",
    questions: [
      {
        q: "Welke oppervlakken kunnen jullie reinigen?",
        a: "Wij reinigen onder andere terrassen, opritten, tuinpaden, klinkers, tegels, muren en gevels met professionele hogedrukapparatuur.",
      },
      {
        q: "Verdwijnt groene aanslag volledig?",
        a: "In de meeste gevallen wel. Met professionele reiniging en aangepaste producten kunnen we groene aanslag, mos en vuil grondig verwijderen.",
      },
      {
        q: "Kan hogedruk mijn tegels beschadigen?",
        a: "Nee, wij gebruiken de juiste druk en technieken aangepast aan het type oppervlak om schade te voorkomen.",
      },
      {
        q: "Hoe lang blijft mijn terras of oprit schoon?",
        a: "Dat hangt af van de ligging en het weer. In de meeste gevallen blijft het oppervlak maanden tot jaren schoon voordat nieuwe aanslag verschijnt.",
      },
      {
        q: "Kunnen jullie ook hardnekkig vuil of mos verwijderen?",
        a: "Ja, wij kunnen hardnekkig vuil, mos en groene aanslag verwijderen met professionele apparatuur en reinigingsmiddelen.",
      },
      {
        q: "Moet ik iets voorbereiden voordat jullie langskomen?",
        a: "Het is handig om meubels, plantenpotten en andere objecten van het oppervlak te verwijderen zodat wij efficiënt kunnen werken.",
      },
      {
        q: "Hoe lang duurt een hogedrukreiniging gemiddeld?",
        a: "Dat hangt af van de grootte en de vervuiling van het oppervlak, maar de meeste terrassen of opritten kunnen binnen enkele uren gereinigd worden.",
      },
      {
        q: "Kunnen jullie ook grote oppervlakken reinigen?",
        a: "Ja, wij kunnen zowel kleine als grote oppervlakken reinigen, zoals grote opritten, terrassen of parkings.",
      },
      {
        q: "Is hogedrukreiniging milieuvriendelijk?",
        a: "Wij proberen zo milieuvriendelijk mogelijk te werken door efficiënt watergebruik en aangepaste reinigingsmiddelen.",
      },
    ],
  },
  {
    id: "praktisch",
    label: "Praktische vragen",
    questions: [
      {
        q: "Welke betaalmethodes accepteren jullie?",
        a: "Betaling kan via overschrijving of andere vooraf afgesproken methodes.",
      },
      {
        q: "Werken jullie ook in het weekend?",
        a: "In sommige gevallen is weekendwerk mogelijk. Neem contact met ons op om de mogelijkheden te bespreken.",
      },
      {
        q: "Hoe kan ik jullie het snelst bereiken?",
        a: "Je kan ons het snelst bereiken via telefoon, e-mail of het contactformulier op de website.",
      },
      {
        q: "Kan ik een vaste onderhoudsafspraak maken?",
        a: "Ja, veel klanten kiezen voor een vaste onderhoudsafspraak, bijvoorbeeld maandelijks of tweewekelijks.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState(null);

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <section id="about" className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">Veelgestelde vragen</h2>
        <p className="faq-intro">
          Heb je vragen over onze diensten, werkwijze of praktische zaken? Hieronder
          vind je een overzicht van de meest gestelde vragen, verdeeld in duidelijke
          categorieën. Klik op een onderwerp om het antwoord te bekijken.
        </p>

        <div className="faq-categories">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`faq-category-pill$${""} {
                activeCategory === category.id ? " active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {currentCategory?.questions.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item${openIndex === idx ? " open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <span className="faq-toggle">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
