

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DetailedServices from "./components/DetailedServices";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

import AdviceTips from "./components/AdviceTips";

function App() {
  return (
    <div className="font-sans bg-[#f7f6f3] text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DetailedServices />
  <Portfolio />
  <AdviceTips />
  <FAQ />
  <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
