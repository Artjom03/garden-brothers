import React, { useRef } from "react";

export default function QuoteForm() {
  const fileInput = useRef();
  return (
    <section id="quote" className="quote-section">
      <div className="container quote-container">
        <form className="quote-form">
          <h2 className="quote-title">Vraag gratis offerte aan</h2>
          <div className="quote-grid">
            <div>
              <label className="quote-label" htmlFor="quote-firstname">Naam *</label>
              <input id="quote-firstname" required type="text" placeholder="Vul hier je naam in." className="input" />
            </div>
            <div>
              <label className="quote-label" htmlFor="quote-address">Adres</label>
              <input id="quote-address" required type="text" placeholder="Vul hier je adres in." className="input" />
            </div>
            <div>
              <label className="quote-label" htmlFor="quote-phone">Telefoon</label>
              <input id="quote-phone" required type="tel" placeholder="Vul hier je telefoonnummer in." className="input" />
            </div>
            <div>
              <label className="quote-label" htmlFor="quote-email">E-mail *</label>
              <input id="quote-email" required type="email" placeholder="Vul hier je e-mailadres in." className="input" />
            </div>
            <div className="quote-span-2">
              <label className="quote-label" htmlFor="quote-subject">Onderwerp *</label>
              <input id="quote-subject" required type="text" placeholder="Waarmee kunnen wij je helpen?" className="input" />
            </div>
          </div>

          <div className="quote-grid quote-grid-gap-top">
            <fieldset className="quote-fieldset">
              <legend className="quote-legend">Sector *</legend>
              <label className="quote-radio-label"><input type="radio" name="sector" value="tuinonderhoud" required /> Algemeen tuinonderhoud</label>
              <label className="quote-radio-label"><input type="radio" name="sector" value="hogedruk" /> Hogedrukreiniging</label>
              <label className="quote-radio-label"><input type="radio" name="sector" value="beide" /> Beide</label>
            </fieldset>
            <fieldset className="quote-fieldset">
              <legend className="quote-legend">Grootte van de grond</legend>
              <label className="quote-radio-label"><input type="radio" name="grootte" value="onder250" required /> Onder 250 vierkante meter</label>
              <label className="quote-radio-label"><input type="radio" name="grootte" value="250-500" /> 250 a 500 vierkante meter</label>
              <label className="quote-radio-label"><input type="radio" name="grootte" value="boven500" /> Boven 500 vierkante meter</label>
            </fieldset>
          </div>

          <label className="quote-label quote-grid-gap-top" htmlFor="quote-message">Je bericht *</label>
          <textarea id="quote-message" required placeholder="Noteer hier je vragen of opmerkingen." className="input quote-textarea" />

          <label className="quote-consent">
            <input type="checkbox" required />
            Ik ga ermee akkoord dat de ingevoerde informatie gebruikt zal worden om mij te contacteren.
          </label>

          <div className="quote-upload">
            <label className="quote-label" htmlFor="quote-files">Upload foto's van wat er moet gebeuren</label>
            <input id="quote-files" ref={fileInput} type="file" multiple />
          </div>

          <button type="submit" className="quote-submit-btn">
            Verstuur bericht
          </button>
        </form>
      </div>
    </section>
  );
}
