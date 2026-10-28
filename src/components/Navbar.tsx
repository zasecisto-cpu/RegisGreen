import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

interface NavbarProps {
  onScrollTo: (id: string) => void;
  view: "b2b" | "obce-skoly";
  setView: (view: "b2b" | "obce-skoly") => void;
}

export default function Navbar({ onScrollTo, view, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = view === "b2b"
    ? [
        { label: "Včelstva", id: "co-nabizime" },
        { label: "Doplňky", id: "rozsireni-doplnky" },
        { label: "Kontakt", id: "kontakt" },
      ]
    : [
        { label: "Hlavní stránka", id: "co-nabizime", action: "home" },
        { label: "Kontakt", id: "kontakt", action: "contact" },
      ];

  const handleNavClick = (id: string, action?: string) => {
    setIsOpen(false);
    if (action === "home") {
      setView("b2b");
      setTimeout(() => {
        onScrollTo("hero");
      }, 100);
    } else if (view !== "b2b") {
      setView("b2b");
      setTimeout(() => {
        onScrollTo(id);
      }, 100);
    } else {
      onScrollTo(id);
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-green/95 backdrop-blur-md shadow-lg py-4 border-b border-brand-green-light/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo-container"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => {
              setView("b2b");
              setTimeout(() => {
                onScrollTo("hero");
              }, 50);
            }}
          >
            <div id="logo-icon-bg" className="bg-brand-gold p-2 rounded-none transition-transform duration-300 group-hover:scale-105 border border-brand-green/20">
              <Leaf id="logo-leaf" className="h-5 w-5 text-brand-green-dark" />
            </div>
            <div>
              <span id="logo-text-main" className="text-xl font-extrabold font-display tracking-tight text-white block leading-none">
                REGIS <span className="text-brand-gold font-black">GREEN</span>
              </span>
              <span id="logo-text-sub" className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block mt-1">
                divize REGIS-CZECH
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div id="desktop-menu" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-desktop-${item.id}`}
                onClick={() => handleNavClick(item.id, item.action)}
                className="text-xs font-bold uppercase tracking-widest text-brand-beige/80 hover:text-brand-gold hover:border-b-2 hover:border-brand-gold pb-1 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              id="nav-cta-desktop"
              onClick={() => handleNavClick("kontakt")}
              className="bg-brand-gold hover:bg-brand-green-dark text-white hover:text-brand-gold border border-brand-gold font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-300 shadow-md cursor-pointer"
            >
              Nezávazná nabídka
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-btn-container" className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-beige hover:text-brand-gold p-2 focus:outline-none"
              aria-label="Přepnout menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-4 border-b border-brand-green-light/30 bg-brand-green" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div id="mobile-menu-items" className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-item-mobile-${item.id}`}
              onClick={() => handleNavClick(item.id, item.action)}
              className="block w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-brand-beige/90 hover:bg-brand-green-light hover:text-brand-gold rounded-none transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              id="nav-cta-mobile"
              onClick={() => handleNavClick("kontakt")}
              className="w-full text-center bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-none shadow-md transition-all block cursor-pointer"
            >
              Nezávazná nabídka
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
