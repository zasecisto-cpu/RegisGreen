import { Heart } from "lucide-react";

interface FooterProps {
  onGoToObce: () => void;
}

export default function Footer({ onGoToObce }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-green-dark border-t border-brand-green-light/20 text-brand-beige/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-brand-green-light/10 pb-10">
          
          {/* Brand Column */}
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <span className="text-lg font-bold font-display tracking-wider text-white">
                REGIS <span className="text-brand-gold font-black">GREEN</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-brand-beige/60 max-w-sm leading-relaxed">
              Tradiční včelařství a profesionální správa včelstev pro moderní města, udržitelné firmy a inovativní instituce v Moravskoslezském kraji.
            </p>
            <div className="pt-2">
              <button
                onClick={onGoToObce}
                className="text-xs text-brand-gold hover:text-white font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer border border-brand-gold/30 px-3.5 py-2 hover:bg-brand-gold/10"
              >
                Pro obce a školy &rarr;
              </button>
            </div>
          </div>

          {/* Company Details Column */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-white">
              REGIS-CZECH, spol. s r.o.
            </p>
            <p className="text-xs text-brand-beige/60">
              Hradišťská 107, Český Těšín, 735 62
            </p>
            <p className="text-xs text-brand-beige/60">
              IČO: 25364162 | DIČ: CZ25364162
            </p>
          </div>

        </div>

        {/* Legal and system footnotes */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-xs text-brand-beige/40">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Regis Green. Všechna práva vyhrazena. Divize společnosti REGIS-CZECH, spol. s r.o.
          </p>
          <p className="flex items-center space-x-1 justify-center sm:justify-end">
            <span>Vytvořeno s</span>
            <Heart className="h-3 w-3 text-brand-gold fill-brand-gold" />
            <span>v Moravskoslezském kraji pro lepší budoucnost.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
