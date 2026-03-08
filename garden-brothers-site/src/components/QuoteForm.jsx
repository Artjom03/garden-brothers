import React, { useRef, useState } from "react";

export default function QuoteForm() {
  const fileInput = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setSubmitStatus({ type: "error", message: "Controleer je gegevens en probeer opnieuw." });
      return;
    }

    const payload = {
      formType: "offerte",
      data: {
        name: form["quote-firstname"].value,
        address: form["quote-address"].value,
        phone: form["quote-phone"].value,
        email: form["quote-email"].value,
        subject: form["quote-subject"].value,
        sector: form.elements["sector"]?.value,
        size: form.elements["grootte"]?.value,
        message: form["quote-message"].value,
        hasFiles: Boolean(fileInput.current?.files?.length),
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

      setSubmitStatus({
        type: "success",
        message: "Je offerteaanvraag is verzonden. We nemen snel contact op.",
      });
      form.reset();
    } catch {
      setSubmitStatus({ type: "error", message: "Netwerkfout. Probeer later opnieuw." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="quote-section">
      <div className="container quote-container">
        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <h2 className="quote-title">Vraag gratis offerte aan</h2>
          {submitStatus && (
            <div className={`form-status ${submitStatus.type}`} role="status" aria-live="polite">
              {submitStatus.message}
            </div>
          )}
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

          <button type="submit" className="quote-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Versturen..." : "Verstuur bericht"}
          </button>
        </form>
      </div>
    </section>
  );
}
