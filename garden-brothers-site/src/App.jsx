

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DetailedServices from "./components/DetailedServices";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Steps from "./components/Steps";
import InstagramSection from "./components/InstagramSection";
import GoogleReviews from "./components/GoogleReviews";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import WieZijnWij from "./components/WieZijnWij";
import ContactPage from "./components/ContactPage";
import PageHero from "./components/PageHero";
import LegalData from "./components/LegalData";
import LegalWeb from "./components/LegalWeb";
import TermsConditions from "./components/TermsConditions";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Steps />
      <InstagramSection />
      <GoogleReviews />
    </>
  );
}

function WieZijnWijPage() {
  return (
    <>
      <PageHero
        title="Over ons"
        subtitle="Maak kennis met Garden Brothers en onze manier van werken."
      />
      <WieZijnWij />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Diensten"
        subtitle="Een overzicht van onze professionele tuin- en reinigingswerken."
      />
      <DetailedServices />
    </>
  );
}

function RealisatiesPage() {
  return (
    <>
      <PageHero
        title="Realisaties"
        subtitle="Bekijk voorbeelden van onze before/after projecten."
      />
      <Portfolio />
    </>
  );
}

function FAQPage() {
  return (
    <>
      <PageHero
        title="Veelgestelde vragen"
        subtitle="Hier vind je heldere antwoorden op de meest voorkomende vragen."
      />
      <FAQ />
    </>
  );
}

function ContactRoutePage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Neem contact op voor vragen of een vrijblijvende afspraak."
      />
      <ContactPage />
    </>
  );
}

function OfferteRoutePage() {
  return (
    <>
      <PageHero
        title="Gratis offerte"
        subtitle="Vraag in enkele stappen je offerte op maat aan."
      />
      <QuoteForm />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacybeleid"
        subtitle="Lees hoe wij zorgvuldig met jouw persoonsgegevens omgaan."
      />
      <LegalData />
    </>
  );
}

function CookiePage() {
  return (
    <>
      <PageHero
        title="Cookiebeleid"
        subtitle="Meer informatie over het gebruik van cookies op onze website."
      />
      <LegalWeb />
    </>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero
        title="Algemene voorwaarden"
        subtitle="De spelregels rond offertes, werken en betalingen."
      />
      <TermsConditions />
    </>
  );
}

function App() {
  return (
    <div className="font-sans bg-[#f7f6f3] text-primary-dark">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diensten" element={<ServicesPage />} />
          <Route path="/realisaties" element={<RealisatiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/wie-zijn-wij" element={<WieZijnWijPage />} />
          <Route path="/contact" element={<ContactRoutePage />} />
          <Route path="/offerte" element={<OfferteRoutePage />} />
          <Route path="/privacybeleid" element={<PrivacyPage />} />
          <Route path="/cookiebeleid" element={<CookiePage />} />
          <Route path="/algemene-voorwaarden" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
