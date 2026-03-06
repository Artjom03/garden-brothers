

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DetailedServices from "./components/DetailedServices";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import AdviceTips from "./components/AdviceTips";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <AdviceTips />
      <FAQ />
      <QuoteForm />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Hero />
      <DetailedServices />
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
