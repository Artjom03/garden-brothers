import React, { useRef, useState } from "react";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE_BYTES = 20 * 1024 * 1024;

async function fileToAttachment(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }

  return {
    filename: file.name,
    contentType: file.type || "application/octet-stream",
    size: file.size,
    content: btoa(binary),
  };
}

export default function QuoteForm() {
  const fileInput = useRef();
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

    const selectedFiles = Array.from(fileInput.current?.files || []);
    const acceptedFiles = [];
    const skippedFiles = [];
    let acceptedTotalSize = 0;

    console.log("[QuoteForm] Selected files:", selectedFiles.map((f) => ({ name: f.name, size: f.size })));

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        skippedFiles.push(file.name);
        console.log("[QuoteForm] Skipped (too large):", file.name, file.size);
        continue;
      }

      if (acceptedTotalSize + file.size > MAX_TOTAL_SIZE_BYTES) {
        skippedFiles.push(file.name);
        console.log("[QuoteForm] Skipped (total too large):", file.name);
        continue;
      }

      acceptedFiles.push(file);
      acceptedTotalSize += file.size;
      console.log("[QuoteForm] Accepted:", file.name, file.size);
    }

    console.log("[QuoteForm] Processing", acceptedFiles.length, "files,", skippedFiles.length, "skipped");

    if (skippedFiles.length > 0) {
      const skippedList = skippedFiles.join(", ");
      setSubmitStatus({
        type: "error",
        message: `Deze bestand(en) konden niet meegestuurd worden omdat ze te groot zijn: ${skippedList}. Verklein ze en probeer opnieuw.`,
      });
      return;
    }

    let attachments = [];
    if (acceptedFiles.length > 0) {
      try {
        attachments = await Promise.all(acceptedFiles.map(fileToAttachment));
      } catch {
        setSubmitStatus({
          type: "error",
          message: "Bijlagen konden niet verwerkt worden. Probeer opnieuw.",
        });
        return;
      }
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
        hasFiles: attachments.length > 0,
        attachments,
      },
    };

    try {
      setIsSubmitting(true);
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const apiUrl = isLocalhost ? "https://www.yardbrothers.be/api/send-email" : "/api/send-email";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const rawBody = await response.text();
      console.log("[QuoteForm] Response status:", response.status);
      console.log("[QuoteForm] Response body:", rawBody);

      let result = null;
      if (rawBody) {
        try {
          result = JSON.parse(rawBody);
        } catch {
          result = null;
        }
      }

      console.log("[QuoteForm] Parsed result:", result);

      if (!response.ok || !result?.ok) {
        if (response.status === 413) {
          setSubmitStatus({
            type: "error",
            message: "De bijlagen zijn te groot voor verzending. Gebruik kleinere of minder foto's.",
          });
          return;
        }

        const errorMsg = result?.message || "Verzenden is mislukt. Controleer je gegevens en probeer opnieuw.";
        console.error("[QuoteForm] Error:", errorMsg);
        setSubmitStatus({
          type: "error",
          message: errorMsg,
        });
        return;
      }

      const successMessage = "Je offerteaanvraag is verzonden. We nemen snel contact op.";
      setSubmitStatus({
        type: "success",
        message: successMessage,
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
              <label className="quote-radio-label"><input type="radio" name="grootte" value="onder250" required /> Minder dan 250 vierkante meter</label>
              <label className="quote-radio-label"><input type="radio" name="grootte" value="250-500" /> 250 a 500 vierkante meter</label>
              <label className="quote-radio-label"><input type="radio" name="grootte" value="boven500" /> Meer dan 500 vierkante meter</label>
            </fieldset>
          </div>

          <label className="quote-label quote-grid-gap-top" htmlFor="quote-message">Je bericht *</label>
          <textarea id="quote-message" required placeholder="Noteer hier je vragen of opmerkingen." className="input quote-textarea" />

          <label className="quote-consent">
            <input type="checkbox" required />
            Ik ga ermee akkoord dat de ingevoerde informatie gebruikt zal worden om mij te contacteren.
          </label>

          <div className="quote-upload">
            <label className="quote-label" htmlFor="quote-files">
              Upload foto's van wat er moet gebeuren (optioneel, max 5 MB per bestand)
            </label>
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
