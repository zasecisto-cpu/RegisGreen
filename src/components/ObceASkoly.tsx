import { motion } from "motion/react";
import { TreePine, Check, ArrowLeft, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

interface ObceASkolyProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export default function ObceASkoly({ onBackToHome, onContactClick }: ObceASkolyProps) {
  const benefits = [
    "Kompletní paušální správa bez starostí pro radnici",
    "Desítky kilogramů lahodného medu ročně pro dárkové účely obce",
    "Atraktivní edukační prvek s možností proskleného úlu",
    "Zvýšení biodiverzity a opylovací kapacity v regionu",
    "Pozitivní PR a zájem občanů o ekologická témata",
  ];

  const additionalInfo = [
    {
      title: "Edukační programy",
      description: "Možnost uspořádání komentovaných prohlídek pro místní školy, školky a veřejnost. Děti se seznámí s významem včel v přírodě.",
      icon: BookOpen,
    },
    {
      title: "Bezpečnost na prvním místě",
      description: "Úly umísťujeme tak, aby neohrožovaly obyvatele. Pracujeme s mírnými včelstvy a celou lokalitu řádně označíme.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 text-brand-green hover:text-brand-gold font-bold text-xs uppercase tracking-widest mb-10 transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Zpět na hlavní stránku</span>
        </button>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-none border border-brand-gold/30 inline-block">
            Pro obce, města a školy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-green tracking-tight uppercase">
            Obecní včelařství a biodiverzita
          </h1>
          <p className="text-base sm:text-lg text-brand-green/75 leading-relaxed">
            Pomáháme samosprávám a školám zapojit se do podpory opylovačů a rozvoje regionální biodiverzity s nulovou provozní zátěží.
          </p>
        </div>

        {/* Content Section (Obecní apiárium Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-brand-green/15 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden art-shadow-flat text-left"
          >
            <div className="absolute top-0 right-0 h-1.5 w-full bg-brand-gold" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-green/10">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-green/5 text-brand-green p-3.5 shrink-0 border border-brand-green/10">
                    <TreePine className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold font-display text-brand-green uppercase tracking-tight">
                      Obecní apiárium
                    </h2>
                    <p className="text-brand-gold font-bold text-[10px] tracking-wider uppercase mt-0.5">
                      Úly v parku nebo v zahradě
                    </p>
                  </div>
                </div>
                <span className="bg-brand-beige text-brand-gold-dark font-bold text-[10px] uppercase tracking-wider px-2.5 py-1.5 border border-brand-gold/30 shrink-0">
                  OBLÍBENÉ U OBCÍ
                </span>
              </div>

              <p className="text-brand-green/85 text-sm sm:text-base leading-relaxed">
                Kompletní instalace a správa včelstev na vybraném veřejném či neveřejném pozemku města či obce. Obyvatelé získají živý kontakt s přírodou a obec prémiový propagační dar.
              </p>

              {/* Benefits checklist */}
              <div className="space-y-3.5 pt-4 border-t border-brand-green/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-green/50 font-bold block mb-2">
                  Co program obsahuje:
                </span>
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-green/90">
                    <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </div>
                    <span className="leading-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-green/10">
              <button
                onClick={onContactClick}
                className="w-full bg-brand-green hover:bg-brand-gold hover:text-brand-green-dark text-white font-bold text-xs uppercase tracking-widest py-4 px-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-brand-green"
              >
                <span>Máme zájem o obecní úly</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Sidebar / Additional Info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            {additionalInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="bg-white border border-brand-green/10 p-6 art-shadow-flat relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-gold/10 text-brand-gold p-2.5 shrink-0 border border-brand-gold/20 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-extrabold text-brand-green text-sm uppercase tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-green/70 leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand-green text-white p-6 border border-brand-gold/20 art-shadow-gold"
            >
              <h4 className="font-extrabold text-brand-gold text-xs uppercase tracking-wider mb-2">
                Profesionální B2G servis
              </h4>
              <p className="text-xs text-brand-beige/80 leading-relaxed">
                Zajišťujeme veškerou legislativu spojenou s registrací stanoviště, hlášením na Českomoravský svaz chovatelů včel i veterinární povolení. Pro obec nevzniká žádná byrokratická zátěž.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
