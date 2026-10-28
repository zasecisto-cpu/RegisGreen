import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Flower, TreePine, BarChart3, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface ExtensionsProps {
  onScrollTo: (id: string) => void;
}

export default function Extensions({ onScrollTo }: ExtensionsProps) {
  const [activeTab, setActiveTab] = useState<"meadow" | "forest" | "esg" | null>(null);

  const toggleTab = (tab: "meadow" | "forest" | "esg") => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
      // Wait a moment for expansion, then scroll to it
      setTimeout(() => {
        const element = document.getElementById("extension-details-content");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  };

  // Meadow contents
  const meadowFeatures = [
    "Návrh a založení louky (regionální osivová směs, příprava půdy, výsev)",
    "Údržba po celou dobu smlouvy (sečení 1–2× ročně, kontrola stavu)",
    "Víceletý závazek 3–5 let – žádná jednorázová akce, která za rok zaroste",
    "Roční přehled: GPS a výměra plochy, fotodokumentace v průběhu sezóny, přehled kvetoucích druhů, u kombinace se včelstvy i stav a aktivita včelstev",
    "Informační cedule s logem vaší firmy (volitelně)",
  ];

  // Forest contents
  const forestOverstandards = [
    {
      title: "Pestřejší druhová skladba nad zákonné minimum",
      description: "Jedle, buk, dub, javor, třešeň ptačí a další meliorační a zpevňující dřeviny nahrazují smrkové monokultury.",
    },
    {
      title: "Ochrana sazenic",
      description: "Oplocenky a individuální mechanická/chemická ochrana proti zvěři, bez které se listnáče a jedle v lese neprosadí.",
    },
    {
      title: "Následná péče o výsadbu",
      description: "Ožínání trávy a odstraňování buřeně v prvních letech, kdy o přežití malého stromku rozhoduje každá sezóna.",
    },
  ];

  const forestWhatsIncluded = [
    "Konkrétní počet sazenic s určením druhu a přesné lokality (GPS souřadnice)",
    "Fotodokumentace výsadby a každoroční fotoreport z vývoje vašeho lesa",
    "Roční přehled: zhodnocení ujímavosti, plánované dosadby a provedená péče",
    "Možnost výsadby vlastníma rukama – zážitkový teambuildingový den v lese",
  ];

  // ESG contents
  const esgBasicBenefits = [
    "Celoroční péče o stanoviště",
    "Deník včelstev a záznamy z kontrol",
    "Roční shrnutí sezóny + fotodokumentace",
    "10 kg medu / lokace / rok",
  ];

  const esgPlusBenefits = [
    "Vše ze základního reportu",
    "Laboratorní rozbor medu z akreditované laboratoře (fyzikálně-chemické ukazatele, těžké kovy)",
    "Pylová analýza — mapa rostlinných zdrojů a druhové pestrosti v okolí areálu",
    "Lokačně vázaný podklad pro ESRS E4",
    "Rezidua pesticidů: cílený rozbor na vyžádání",
  ];

  return (
    <section id="rozsireni-doplnky" className="py-20 md:py-28 bg-brand-beige-dark/10 relative overflow-hidden border-t border-brand-green/10">
      {/* Decorative gradients */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-none border border-brand-gold/30 inline-block"
          >
            KROK 3 — ROZŠÍŘENÍ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-green tracking-tight uppercase"
          >
            Chcete jít dál než k medu?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-green/70 max-w-2xl mx-auto leading-relaxed"
          >
            Tři doplňky, které si vybíráte podle potřeby — ne balíček, žádné povinnosti navíc.
          </motion.p>
        </div>

        {/* 3 Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Tile 1: Květnatá louka */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 bg-white border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
              activeTab === "meadow"
                ? "border-brand-gold ring-2 ring-brand-gold/30 art-shadow-gold"
                : "border-brand-green/10 hover:border-brand-green/30 art-shadow-flat"
            }`}
            onClick={() => toggleTab("meadow")}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-gold">
                <Flower className="h-6 w-6 shrink-0" />
                <h3 className="font-extrabold font-display text-brand-green uppercase tracking-tight text-base sm:text-lg">
                  Květnatá louka
                </h3>
              </div>
              <p className="text-brand-green/80 text-xs sm:text-sm leading-relaxed">
                Louka u nás v Beskydech nebo — pokud máte vlastní pozemek — u vás. Doložitelný dopad pro vaši výroční zprávu.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider hover:underline">
                {activeTab === "meadow" ? "Zavřít detail ↑" : "Zjistit víc →"}
              </span>
            </div>
          </motion.div>

          {/* Tile 2: Obnova lesa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className={`p-6 bg-white border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
              activeTab === "forest"
                ? "border-brand-gold ring-2 ring-brand-gold/30 art-shadow-gold"
                : "border-brand-green/10 hover:border-brand-green/30 art-shadow-flat"
            }`}
            onClick={() => toggleTab("forest")}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-gold">
                <TreePine className="h-6 w-6 shrink-0" />
                <h3 className="font-extrabold font-display text-brand-green uppercase tracking-tight text-base sm:text-lg">
                  Obnova lesa
                </h3>
              </div>
              <p className="text-brand-green/80 text-xs sm:text-sm leading-relaxed">
                Podpoříme druhově pestřejší les v Beskydech nad rámec zákonné povinnosti — s GPS a fotoreportem.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider hover:underline">
                {activeTab === "forest" ? "Zavřít detail ↑" : "Zjistit víc →"}
              </span>
            </div>
          </motion.div>

          {/* Tile 3: ESG Report Plus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`p-6 bg-white border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
              activeTab === "esg"
                ? "border-brand-gold ring-2 ring-brand-gold/30 art-shadow-gold"
                : "border-brand-green/10 hover:border-brand-green/30 art-shadow-flat"
            }`}
            onClick={() => toggleTab("esg")}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-gold">
                <BarChart3 className="h-6 w-6 shrink-0" />
                <h3 className="font-extrabold font-display text-brand-green uppercase tracking-tight text-base sm:text-lg">
                  ESG Report Plus
                </h3>
              </div>
              <p className="text-brand-green/80 text-xs sm:text-sm leading-relaxed">
                Laboratorní rozbor medu a pylová analýza — lokačně vázaný podklad pro ESRS E4, ne jen fotky.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider hover:underline">
                {activeTab === "esg" ? "Zavřít detail ↑" : "Zjistit víc →"}
              </span>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Accordion Details Panel */}
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab}
              id="extension-details-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-5xl mx-auto overflow-hidden bg-white border border-brand-green/10 p-4 sm:p-8 md:p-12 text-left mb-12 art-shadow-flat"
            >
              {activeTab === "meadow" && (
                <div className="space-y-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1.5 inline-block">
                      Doplněk v detailu
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-green uppercase tracking-tight mt-4">
                      Květnatá louka pro vaše včely – a pro vaši výroční zprávu
                    </h4>
                    <p className="text-sm sm:text-base text-brand-green/75 mt-3 leading-relaxed">
                      Včelstvo bez pastvy je jen polovina příběhu. Květnatá louka je zdroj potravy pro opylovače v období, kdy jim zemědělská krajina nemá co nabídnout – a zároveň nejsnáze doložitelný biodiverzitní počin, jaký může firma financovat.
                    </p>
                  </div>

                  {/* Card for location */}
                  <div className="bg-brand-beige-dark/15 border border-brand-green/10 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-green/5 text-brand-green p-3 shrink-0 border border-brand-green/10">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-brand-green text-lg uppercase tracking-tight leading-none">
                            Louka u nás
                          </h5>
                          <p className="text-brand-gold font-bold text-xs tracking-wider uppercase mt-1">
                            Mistřovice, Beskydy
                          </p>
                        </div>
                      </div>
                      <p className="text-brand-green/80 text-sm leading-relaxed">
                        Založíme a udržujeme květnatou louku z regionální osivové směsi na našich pozemcích – přímo tam, kde stojí včelstva. Vaše louka, vaše včely, jedno místo, jeden příběh. Ideální v kombinaci s adopcí včelstva. Hmyzí domky z našeho dřeva pro hmyzí opylovače jsou součástí doplňkových aktivit.
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-brand-green text-white border border-brand-green-light/20 p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-10 translate-y-10">
                      <Flower className="w-80 h-80" />
                    </div>

                    <h5 className="text-xl font-extrabold font-display text-brand-gold uppercase tracking-tight mb-6 pb-3 border-b border-brand-beige/10">
                      Co je součástí projektu včelích luk
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                      {meadowFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-beige/90">
                          <div className="bg-brand-gold/20 text-brand-gold rounded-none border border-brand-gold/40 p-1 mt-0.5 shrink-0">
                            <Check className="h-3.5 w-3.5 stroke-[3px]" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-brand-beige/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-brand-beige/65 italic max-w-xl">
                        Poznámka: Plochy financované klientem vedeme odděleně od ploch se státní podporou. To, co financujete vy, financujete jen vy – a přesně to také vykazujete ve svém ročním přehledu.
                      </p>
                      <button
                        onClick={() => onScrollTo("kontakt")}
                        className="bg-brand-gold hover:bg-white hover:text-brand-green-dark text-white font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-none transition-all duration-300 flex items-center space-x-1.5 group shrink-0 border border-brand-gold cursor-pointer"
                      >
                        <span>Nezávazná konzultace</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "forest" && (
                <div className="space-y-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1.5 inline-block">
                      Doplněk v detailu
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-green uppercase tracking-tight mt-4">
                      Obnova druhově pestrého lesa v Beskydech
                    </h4>
                    <p className="text-sm sm:text-base text-brand-green/75 mt-3 leading-relaxed">
                      Vlastníme lesy v Beskydech a obnovujeme je tak, aby obstály v měnícím se klimatu – s pestrou druhovou skladbou, ne jako smrkovou monokulturu.
                    </p>
                  </div>

                  {/* Overstandard explanation */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-5">
                      <h5 className="text-xl font-extrabold font-display text-brand-green uppercase tracking-tight">
                        Příspěvek na lesní nadstandard, ne na zákonnou povinnost
                      </h5>
                      <p className="text-brand-green/80 text-xs sm:text-sm leading-relaxed">
                        Zákon vlastníkům lesa ukládá povinnost les po těžbě či kůrovcové kalamitě obnovit. My chceme jít dál – a právě tento ekologický nadstandard, který běžné lesnictví opomíjí, financuje vaše firma. Společně vybudujeme stabilní smíšený les, který tu poroste stovky let.
                      </p>

                      <div className="space-y-4 pt-4 border-t border-brand-green/10">
                        {forestOverstandards.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 p-1 shrink-0 mt-0.5">
                              <ShieldCheck className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <h6 className="font-extrabold text-brand-green text-xs uppercase tracking-wide">
                                {item.title}
                              </h6>
                              <p className="text-[11px] sm:text-xs text-brand-green/70 mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-brand-green text-white p-6 sm:p-8 border-2 border-brand-gold art-shadow-gold relative overflow-hidden flex flex-col justify-between">
                      <div className="space-y-4 relative z-10">
                        <span className="bg-brand-gold/20 text-brand-gold font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-brand-gold/30 inline-block">
                          DOKLADATELNÝ DOPAD
                        </span>

                        <h5 className="text-lg font-extrabold font-display text-brand-gold uppercase tracking-tight">
                          Co obdržíte v rámci podpory lesa
                        </h5>

                        <div className="space-y-3 border-t border-brand-beige/10 pt-4">
                          {forestWhatsIncluded.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2 text-xs text-brand-beige/90">
                              <div className="bg-brand-gold/15 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                                <Check className="h-3 w-3 stroke-[3px]" />
                              </div>
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-brand-beige/10">
                        <button
                          onClick={() => onScrollTo("kontakt")}
                          className="w-full bg-brand-gold hover:bg-white hover:text-brand-green-dark text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-brand-gold"
                        >
                          <span>Chci financovat výsadbu</span>
                          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "esg" && (
                <div className="space-y-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1.5 inline-block">
                      Doplněk v detailu
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-green uppercase tracking-tight mt-4">
                      Měřitelná udržitelnost, ne greenwashing
                    </h4>
                    <p className="text-sm sm:text-base text-brand-green/75 mt-3 leading-relaxed">
                      Ke každému projektu dodáváme dokumentaci, kterou reálně použijete v komunikaci firmy. A pro firmy, které chtějí jít dál, nabízíme laboratorně podložený ESG balíček – žádná vymyšlená čísla, jen ověřitelná data.
                    </p>
                  </div>

                  {/* Base vs Plus Table cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Basic report card */}
                    <div className="bg-brand-green text-white border border-brand-green-light/20 p-6 sm:p-8 flex flex-col justify-between relative art-shadow-flat">
                      <div className="space-y-5 text-left">
                        <div>
                          <span className="bg-brand-green-light/20 text-brand-beige font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1.5 border border-brand-green-light/30">
                            SOUČÁST KAŽDÉHO PAUŠÁLU
                          </span>
                        </div>
                        
                        <div className="pt-2">
                          <h5 className="text-xl font-extrabold font-display text-brand-gold uppercase tracking-tight">
                            Report ze stanoviště
                          </h5>
                          <p className="text-brand-beige/70 font-semibold text-[10px] tracking-widest uppercase mt-0.5">
                            Součást měsíčního paušálu
                          </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-3 border-t border-brand-beige/10 pt-4">
                          {esgBasicBenefits.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2.5 text-xs text-brand-beige/90">
                              <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                                <Check className="h-3 w-3 stroke-[3px]" />
                              </div>
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Plus report card */}
                    <div className="bg-brand-green text-white border-2 border-brand-gold p-6 sm:p-8 flex flex-col justify-between relative art-shadow-gold">
                      <span className="absolute -top-3 left-6 bg-brand-gold text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 border border-brand-gold-dark shadow-md">
                        VOLITELNÝ BALÍČEK
                      </span>

                      <div className="space-y-5 text-left pt-2">
                        <div>
                          <h5 className="text-xl sm:text-2xl font-extrabold font-display text-brand-gold leading-tight uppercase tracking-tight">
                            ESG Report Plus
                          </h5>
                          <p className="text-brand-beige/90 text-[11px] sm:text-xs mt-0.5 font-semibold leading-relaxed">
                            Volitelný balíček pro firmy s reportovací povinností
                          </p>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-3 border-t border-brand-beige/10 pt-4">
                          {esgPlusBenefits.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2.5 text-xs text-brand-beige/90">
                              <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-0.5 mt-0.5 shrink-0">
                                <Check className="h-3 w-3 stroke-[3px]" />
                              </div>
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Inside */}
                      <div className="mt-6 pt-4 border-t border-brand-beige/10">
                        <button
                          onClick={() => onScrollTo("kontakt")}
                          className="w-full bg-brand-gold hover:bg-white hover:text-brand-green-dark text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-brand-gold"
                        >
                          <span>Chci ukázkový ESG report</span>
                          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Footnote */}
                  <div className="text-center max-w-2xl mx-auto">
                    <p className="text-[11px] sm:text-xs text-brand-green/70 leading-relaxed italic">
                      Cenu balíčku ESG Report Plus stanovíme podle počtu lokalit a rozsahu analýz. Report není auditní zprávou — je podkladem, který vašemu týmu a auditorovi usnadní práci.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
