import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Extensions from "./components/Extensions";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ObceASkoly from "./components/ObceASkoly";

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [view, setView] = useState<"b2b" | "obce-skoly">("b2b");

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceType: string) => {
    setSelectedInterest(serviceType);
    handleScrollTo("kontakt");
  };

  const handleGoToObce = () => {
    setView("obce-skoly");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setView("b2b");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app-root-wrapper" className="min-h-screen bg-brand-beige font-sans text-brand-green-dark selection:bg-brand-gold/30 selection:text-brand-green-dark antialiased">
      {/* Sticky Top Navigation */}
      <Navbar onScrollTo={handleScrollTo} view={view} setView={setView} />

      {/* Main Page Layout */}
      <main id="main-content">
        {view === "b2b" ? (
          <>
            {/* KROK 1 — HERO */}
            <Hero onScrollTo={handleScrollTo} />

            {/* KROK 2 — JEDNO ROZHODNUTÍ: DVĚ KARTY */}
            <Services onSelectService={handleSelectService} onScrollTo={handleScrollTo} />

            {/* KROK 3 — ROZŠÍŘENÍ */}
            <Extensions onScrollTo={handleScrollTo} />
          </>
        ) : (
          /* Municipalities and Schools subpage */
          <ObceASkoly
            onBackToHome={handleBackToHome}
            onContactClick={() => {
              setSelectedInterest("Obecní včelařství");
              handleScrollTo("kontakt");
            }}
          />
        )}

        {/* KROK 4 — DŮVĚRA + KONTAKT */}
        <ContactForm
          selectedInterest={selectedInterest}
          onInterestChange={setSelectedInterest}
        />
      </main>

      {/* Complete Footer */}
      <Footer onGoToObce={handleGoToObce} />
    </div>
  );
}
