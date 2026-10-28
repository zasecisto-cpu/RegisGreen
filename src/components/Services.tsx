import { motion } from "motion/react";
import { Check, ArrowRight, Gift, Building2 } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceType: string) => void;
  onScrollTo: (id: string) => void;
}

export default function Services({ onSelectService, onScrollTo }: ServicesProps) {
  const cardAFeatures = [
    "patronátní smlouva a certifikát",
    "sklenice medu s vaší etiketou",
    "vaše logo na úlu",
    "roční shrnutí a fotky",
  ];

  const cardBFeatures = [
    "instalace a péče (min. 2 úly)",
    "10 kg medu ročně s vlastní etiketou",
    "deník a roční report",
    "posouzení bezpečnosti u střech",
  ];

  return (
    <section id="co-nabizime" className="py-20 md:py-28 bg-brand-beige border-t border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-none border border-brand-gold/30 inline-block"
          >
            KROK 2 — ROZHODNUTÍ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-green tracking-tight uppercase"
          >
            Vyberte si, kde budou vaše včely
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-green/70 max-w-2xl mx-auto leading-relaxed"
          >
            O vše ostatní se postaráme my.
          </motion.p>
        </div>

        {/* 2 Main Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch mb-12">
          
          {/* Card A: ADOPCE VČELSTVA (Zvýrazněná se zlatým rámem a stínem) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-brand-gold p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 art-shadow-gold text-left"
          >
            {/* Top gold badge */}
            <span className="absolute -top-3.5 left-6 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 bg-brand-gold text-white border border-brand-gold-dark shadow-sm">
              NEJOBLÍBENĚJŠÍ
            </span>

            <div className="space-y-6">
              {/* Header block */}
              <div className="flex items-center space-x-4 pb-4 border-b border-brand-green/10">
                <div className="bg-brand-gold/10 text-brand-gold p-3 shrink-0 border border-brand-gold/20">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display text-brand-green uppercase tracking-tight leading-none">
                    Adopce včelstva
                  </h3>
                  <p className="text-brand-green/60 font-bold text-xs uppercase tracking-wider mt-1.5">
                    Nepotřebujete pozemek ani střechu
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="py-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black font-display text-brand-gold tracking-tight">
                    od 25 000 Kč
                  </span>
                  <span className="text-xs text-brand-green/60 font-semibold uppercase tracking-wider">
                    / rok bez DPH
                  </span>
                </div>
              </div>

              {/* Perex (Exactly one sentence max) */}
              <p className="text-brand-green/80 text-sm leading-relaxed">
                Včelstva stojí na našem stanovišti v Beskydech. Vy získáte med s vaší etiketou, příběh a podklady pro komunikaci — bez jediného metru vlastní plochy.
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-4 border-t border-brand-green/10">
                {cardAFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-green/90">
                    <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => onSelectService("Adopce včelstva")}
                className="w-full bg-brand-gold hover:bg-brand-green hover:text-white text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-brand-gold"
              >
                <span>Mám zájem</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card B: VLASTNÍ VČELSTVO (Neutrální - bez zlatého rámu) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-brand-green/15 p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 hover:border-brand-green/35 art-shadow-flat text-left"
          >
            <div className="space-y-6">
              {/* Header block */}
              <div className="flex items-center space-x-4 pb-4 border-b border-brand-green/10">
                <div className="bg-brand-green/5 text-brand-green p-3 shrink-0 border border-brand-green/10">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display text-brand-green uppercase tracking-tight leading-none">
                    Vlastní včelstvo
                  </h3>
                  <p className="text-brand-green/60 font-bold text-xs uppercase tracking-wider mt-1.5">
                    Úly přímo ve vašem areálu
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="py-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black font-display text-brand-gold tracking-tight">
                    1 350 Kč
                  </span>
                  <span className="text-xs text-brand-green/60 font-semibold uppercase tracking-wider">
                    / úl / měsíc bez DPH
                  </span>
                </div>
              </div>

              {/* Perex (Exactly one sentence max) */}
              <p className="text-brand-green/80 text-sm leading-relaxed">
                Postavíme stanoviště na vaší střeše nebo pozemku a kompletně se o něj staráme — vy máte včely na dohled z okna.
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-4 border-t border-brand-green/10">
                {cardBFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-green/90">
                    <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Drobný zlatý text pod odrážkami */}
              <div className="pt-2">
                <p className="text-xs text-brand-gold font-bold">
                  Přijímáme max. 3 nové lokality za sezónu.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => onSelectService("Vlastní včelstvo")}
                className="w-full bg-brand-green hover:bg-brand-gold text-white font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-brand-green"
              >
                <span>Mám zájem</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Individual solution raw line under both cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-brand-green/80"
        >
          Potřebujete individuální řešení — školu, obec nebo víc lokalit?{" "}
          <button
            onClick={() => onScrollTo("kontakt")}
            className="text-brand-gold hover:text-brand-green font-bold underline transition-colors duration-200 cursor-pointer"
          >
            Napište nám &rarr;
          </button>
        </motion.div>

      </div>
    </section>
  );
}
