import React, { useRef } from "react";

export default function QuoteForm() {
  const fileInput = useRef();
  return (
    <section id="quote" className="py-16 bg-secondary-light/10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 text-center">
          Vraag gratis offerte aan
        </h2>
        <form className="bg-white rounded-lg shadow p-8 grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="text" placeholder="Voornaam" className="input" />
            <input required type="text" placeholder="Achternaam" className="input" />
            <input required type="text" placeholder="Adres" className="input md:col-span-2" />
            <input required type="text" placeholder="Gemeente" className="input" />
            <input required type="tel" placeholder="Telefoon" className="input" />
            <input required type="email" placeholder="E-mail" className="input md:col-span-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="flex flex-col gap-2">
              <legend className="font-semibold text-primary-dark mb-1">Duid aan welke sector u wij kunnen helpen</legend>
              <label><input type="radio" name="sector" value="tuinonderhoud" required /> Algemeen tuinonderhoud</label>
              <label><input type="radio" name="sector" value="hogedruk" /> Hogedrukreinigen</label>
              <label><input type="radio" name="sector" value="beide" /> Beide</label>
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <legend className="font-semibold text-primary-dark mb-1">Grootte van de grond</legend>
              <label><input type="radio" name="grootte" value="onder250" required /> Onder 250 vierkante meter</label>
              <label><input type="radio" name="grootte" value="250-500" /> 250 a 500 vierkante meter</label>
              <label><input type="radio" name="grootte" value="boven500" /> boven 500 vierkante meter</label>
            </fieldset>
          </div>
          <textarea required placeholder="Geef een omschrijving van de opdracht" className="input min-h-[80px]" />
          <div>
            <label className="block font-semibold text-primary-dark mb-1">Upload foto’s van wat er moet gebeuren</label>
            <input ref={fileInput} type="file" multiple className="block" />
          </div>
          <button type="submit" className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition-colors duration-200">
            Stuur offerte
          </button>
        </form>
      </div>
    </section>
  );
}
