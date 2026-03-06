import React from "react";

export default function ContactPage() {
  return (
    <section className="contact-page" id="contact-page">
      <div className="container contact-page-grid">
        <form className="contact-form-card">
          <h2 className="contact-page-title">Contacteer ons</h2>
          <div className="contact-form-grid">
            <div>
              <label className="contact-label" htmlFor="contact-name">Naam *</label>
              <input id="contact-name" type="text" placeholder="Vul hier je naam in." required />
            </div>
            <div>
              <label className="contact-label" htmlFor="contact-address">Adres</label>
              <input id="contact-address" type="text" placeholder="Vul hier je adres in." />
            </div>
            <div>
              <label className="contact-label" htmlFor="contact-phone">Telefoon</label>
              <input id="contact-phone" type="tel" placeholder="Vul hier je telefoonnummer in." />
            </div>
            <div>
              <label className="contact-label" htmlFor="contact-email">E-mail *</label>
              <input id="contact-email" type="email" placeholder="Vul hier je e-mailadres in." required />
            </div>
            <div className="contact-span-2">
              <label className="contact-label" htmlFor="contact-subject">Onderwerp *</label>
              <input id="contact-subject" type="text" placeholder="Waarmee kunnen wij je helpen?" required />
            </div>
            <div className="contact-span-2">
              <label className="contact-label" htmlFor="contact-message">Je bericht *</label>
              <textarea id="contact-message" placeholder="Noteer hier je vragen of opmerkingen." required />
            </div>
          </div>
          <label className="contact-consent">
            <input type="checkbox" required />
            Ik ga ermee akkoord dat de ingevoerde informatie gebruikt zal worden om mij te contacteren.
          </label>
          <button type="submit" className="contact-submit-btn">Verstuur bericht</button>
        </form>
      </div>
    </section>
  );
}
