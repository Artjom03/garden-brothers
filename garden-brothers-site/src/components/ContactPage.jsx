import React, { useState } from "react";

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      const firstInvalidField = form.querySelector(":invalid");
      if (firstInvalidField instanceof HTMLElement) {
        firstInvalidField.focus();
      }
      setSubmitStatus({ type: "error", message: "Controleer je gegevens en probeer opnieuw." });
      return;
    }

    const payload = {
      formType: "contact",
      data: {
        name: form["contact-name"].value,
        address: form["contact-address"].value,
        phone: form["contact-phone"].value,
        email: form["contact-email"].value,
        subject: form["contact-subject"].value,
        message: form["contact-message"].value,
      },
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        setSubmitStatus({
          type: "error",
          message: result?.message || "Verzenden is mislukt. Probeer het opnieuw.",
        });
        return;
      }

      setSubmitStatus({ type: "success", message: "Je bericht is verzonden. We nemen snel contact met je op." });
      form.reset();
    } catch {
      setSubmitStatus({ type: "error", message: "Netwerkfout. Probeer later opnieuw." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-page" id="contact-page">
      <div className="container">
        <div className="contact-page-header">
          <h2 className="contact-page-title">Contact</h2>
          <p className="contact-page-text">
            Heb je vragen of wil je meer informatie? Stuur ons gerust een bericht.
            Je mag ons altijd mailen, telefonisch zijn we bereikbaar van 9u tot 18u.
          </p>
        </div>
        <div className="contact-page-grid">
          <div className="contact-info-column">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contactgegevens</h3>
              <ul className="contact-info-list">
                <li><strong>Adres</strong><br />Regio Oost-Vlaanderen &amp; Antwerpen</li>
                <li><strong>Telefoon</strong><br />+32 472 69 66 71<br /><span className="contact-info-note">Telefonisch bereikbaar van 9u tot 18u.</span></li>
                <li><strong>E-mail</strong><br /><a href="mailto:info@gardenbrothersbe.com">info@gardenbrothersbe.com</a></li>
              </ul>
            </div>
            <div className="contact-info-card">
              <h3 className="contact-info-title">Openingstijden</h3>
              <p className="contact-page-text">
                Telefonisch bereikbaar op werkdagen van 9u tot 18u.
                Per e-mail mag je ons altijd contacteren, we antwoorden zo snel mogelijk.
              </p>
            </div>
          </div>
          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <h3 className="contact-form-title">Stuur ons een bericht</h3>
            {submitStatus && (
              <div className={`form-status ${submitStatus.type}`} role="status" aria-live="polite">
                {submitStatus.message}
              </div>
            )}
            <div className="contact-form-grid">
              <div>
                <label className="contact-label" htmlFor="contact-name">Naam *</label>
                <input id="contact-name" type="text" placeholder="Vul hier je naam in." required />
              </div>
              <div>
                <label className="contact-label" htmlFor="contact-email">E-mail *</label>
                <input id="contact-email" type="email" placeholder="Vul hier je e-mailadres in." required />
              </div>
              <div>
                <label className="contact-label" htmlFor="contact-phone">Telefoon</label>
                <input id="contact-phone" type="tel" placeholder="Optioneel, handig bij snelle vragen." />
              </div>
              <div>
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
            <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Versturen..." : "Verstuur bericht"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
