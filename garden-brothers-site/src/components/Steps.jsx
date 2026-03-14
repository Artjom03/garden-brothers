import React from "react";

const steps = [
  {
    number: "01",
    title: "Kennismaking & aanvraag",
    text: "Je beschrijft kort je tuin of reinigingswerk en kiest hoe we je mogen contacteren.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    number: "02",
    title: "We bekijken je project",
    text: "We nemen contact op, stellen gerichte vragen en plannen indien nodig een plaatsbezoek.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    number: "03",
    title: "Heldere offerte op maat",
    text: "Je ontvangt een duidelijke offerte met transparante prijzen, afgestemd op jouw situatie.",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    number: "04",
    title: "Uitvoering & nazorg",
    text: "We voeren de werken zorgvuldig uit en laten alles netjes achter. Jij geniet van je tuin.",
    icon: <polyline points="20 6 9 17 4 12" />,
  },
];

export default function Steps() {
  return (
    <section className="steps-section" aria-labelledby="steps-title">
      <div className="container">
        <header className="steps-header">
          <h2 id="steps-title" className="steps-title">Zo werkt het</h2>
          <p className="steps-subtitle">
            Van eerste contact tot afgewerkt resultaat in vier overzichtelijke stappen.
          </p>
        </header>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <div className="step-card-head">
                <div className="step-icon-circle">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="1.4em"
                    height="1.4em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div className="step-number-label">{step.number}</div>
              </div>
              <div className="step-card-body">
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-text">{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="steps-cta-wrapper">
          <a href="/offerte" className="hero-btn hero-btn-primary steps-cta-btn">
            <span className="hero-btn-label">
              <span className="hero-btn-icon" aria-hidden="true">
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span>Boek nu je afspraak</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
