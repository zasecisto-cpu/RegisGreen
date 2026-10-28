import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, MapPin, Building2, AlertCircle, CheckCircle2, ShieldCheck, BarChart3 } from "lucide-react";

interface ContactFormProps {
  selectedInterest: string;
  onInterestChange: (interest: string) => void;
}

export default function ContactForm({ selectedInterest, onInterestChange }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    interestType: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Sync selectedInterest from parent component
  useEffect(() => {
    if (selectedInterest) {
      setFormData((prev) => ({ ...prev, interestType: selectedInterest }));
      // Clear error for interestType if set
      setErrors((prev) => {
        const next = { ...prev };
        delete next.interestType;
        return next;
      });
    }
  }, [selectedInterest]);

  // Validate fields
  const validate = (data: typeof formData) => {
    const tempErrors: Record<string, string> = {};
    if (!data.name.trim()) {
      tempErrors.name = "Jméno a příjmení je povinné pole.";
    }
    if (!data.email.trim()) {
      tempErrors.email = "E-mail je povinné pole.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      tempErrors.email = "Zadejte platnou e-mailovou adresu.";
    }
    if (!data.interestType) {
      tempErrors.interestType = "Vyberte prosím typ zájmu.";
    }
    if (!data.message.trim()) {
      tempErrors.message = "Zpráva pro nás je povinné pole.";
    }
    return tempErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    if (name === "interestType") {
      onInterestChange(value);
    }

    if (submitAttempted || touched[name]) {
      const validationErrors = validate(updatedData);
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid! Show green success card
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        institution: "",
        email: "",
        phone: "",
        interestType: "",
        message: "",
      });
      setErrors({});
      setTouched({});
      setSubmitAttempted(false);
      onInterestChange("");

      // Hide success message after 8 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 8000);
    } else {
      // Focus on first error element
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.focus();
      }
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* KROK 4: DŮVĚRA - 3 body v řadě */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 border-b border-brand-green/10 pb-12 text-left">
          <div className="flex items-start space-x-4 p-4 bg-brand-beige/25 border border-brand-green/5">
            <div className="bg-brand-gold/10 text-brand-gold p-3 shrink-0 border border-brand-gold/20">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-brand-green text-sm uppercase tracking-wide">Působnost v celém MSK</h3>
              <p className="text-xs text-brand-green/70 mt-1 leading-relaxed">Působíme po celém Moravskoslezském kraji. Naše hlavní stanoviště v Beskydech můžete kdykoliv navštívit.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-brand-beige/25 border border-brand-green/5">
            <div className="bg-brand-gold/10 text-brand-gold p-3 shrink-0 border border-brand-gold/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-brand-green text-sm uppercase tracking-wide">Péče aktivních včelařů</h3>
              <p className="text-xs text-brand-green/70 mt-1 leading-relaxed">O včelstva pečují profesionální včelaři. Osazujeme výhradně mírná a bezpečná včelstva.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-brand-beige/25 border border-brand-green/5">
            <div className="bg-brand-gold/10 text-brand-gold p-3 shrink-0 border border-brand-gold/20">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-brand-green text-sm uppercase tracking-wide">Měřitelné, ne greenwashing</h3>
              <p className="text-xs text-brand-green/70 mt-1 leading-relaxed">Financujete hmatatelný přínos pro lokální biodiverzitu s GPS souřadnicemi, deníkem a fotodokumentací.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-4 py-2 rounded-none inline-block">
                Spojte se s námi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-green tracking-tight uppercase">
                MÁTE ZÁJEM O FIREMNÍ VČELSTVA?
              </h2>
              <p className="text-base sm:text-lg text-brand-green/75 leading-relaxed">
                Napište nám o svém projektu. Ať už jste majitel firmy, HR či marketingový manažer, správce budovy nebo starosta – společně vymyslíme řešení na míru vašim možnostem.
              </p>
            </div>

            {/* Practical info with beautiful styling */}
            <div className="space-y-6 pt-2 border-t border-brand-green/10">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/5 text-brand-green p-3 rounded-none border border-brand-green/10 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green text-sm uppercase tracking-wider">Napište nám e-mail</h4>
                  <a href="mailto:info@regisgreen.cz" className="text-brand-gold hover:text-brand-gold-light font-bold text-base transition-colors">
                    info@regisgreen.cz
                  </a>
                  <p className="text-xs text-brand-green/60 mt-0.5">Odpovíme vám většinou do 24 hodin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/5 text-brand-green p-3 rounded-none border border-brand-green/10 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green text-sm uppercase tracking-wider">Zavolejte nám</h4>
                  <a href="tel:+420607547706" className="text-brand-gold hover:text-brand-gold-light font-bold text-base transition-colors">
                    +420 607 547 706
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/5 text-brand-green p-3 rounded-none border border-brand-green/10 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green text-sm uppercase tracking-wider">Adresa kanceláře</h4>
                  <p className="text-brand-green/80 text-sm">
                    REGIS-CZECH, spol. s r.o.<br />
                    Hradišťská 107, Český Těšín, 735 62
                  </p>
                </div>
              </div>
            </div>

            {/* Safety & Trust Note */}
            <div className="bg-white p-5 rounded-none border border-brand-green/15 text-xs sm:text-sm text-brand-green/80 flex items-start space-x-3 art-shadow-flat">
              <div className="bg-brand-gold/10 text-brand-gold rounded-none border border-brand-gold/30 p-1 shrink-0">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <p className="leading-normal">
                <strong>Bezpečnost na prvním místě:</strong> Každé stanoviště konzultujeme a včelstva osazujeme s ohledem na maximální mírnost a bezpečnost pro širokou veřejnost.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white border border-brand-green/15 p-8 md:p-10 rounded-none relative art-shadow-flat">
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-8 bg-emerald-50 border-2 border-emerald-500 text-emerald-850 p-6 rounded-none flex items-start space-x-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-extrabold text-sm text-emerald-900 font-display uppercase tracking-wider">Poptávka byla úspěšně odeslána!</h4>
                    <p className="text-xs mt-1 leading-relaxed text-emerald-800">
                      Děkujeme za váš zájem o projekt Regis Green. Vaše zpráva byla zaznamenána. 
                      <strong> Ozveme se vám zpět s nezávazným návrhem většinou do 24 hodin.</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Jméno */}
                <div className="text-left space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                    Jméno a příjmení <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Např. Jan Novák"
                    className={`w-full px-4 py-3 rounded-none border bg-brand-beige/25 focus:outline-none focus:ring-1 transition-all text-sm ${
                      errors.name
                        ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                        : "border-brand-green/20 focus:ring-brand-gold/10 focus:border-brand-gold"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 pt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Instituce */}
                <div className="text-left space-y-1.5">
                  <label htmlFor="institution" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                    Instituce / Obec / Firma
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Např. Městský úřad"
                    className="w-full px-4 py-3 rounded-none border border-brand-green/20 bg-brand-beige/25 focus:outline-none focus:ring-1 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div className="text-left space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                    E-mail <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="například@posta.cz"
                    className={`w-full px-4 py-3 rounded-none border bg-brand-beige/25 focus:outline-none focus:ring-1 transition-all text-sm ${
                      errors.email
                        ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                        : "border-brand-green/20 focus:ring-brand-gold/10 focus:border-brand-gold"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 flex items-center space-x-1 pt-0.5">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Telefon */}
                <div className="text-left space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                    Telefonní číslo
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Např. +420 123 456 789"
                    className="w-full px-4 py-3 rounded-none border border-brand-green/20 bg-brand-beige/25 focus:outline-none focus:ring-1 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-sm"
                  />
                </div>

              </div>

              {/* Typ zájmu */}
              <div className="text-left space-y-1.5">
                <label htmlFor="interestType" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                  Typ včelařského projektu <span className="text-rose-500">*</span>
                </label>
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-none border bg-brand-beige/25 focus:outline-none focus:ring-1 transition-all cursor-pointer text-sm ${
                    errors.interestType
                      ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                      : "border-brand-green/20 focus:ring-brand-gold/10 focus:border-brand-gold"
                  }`}
                >
                  <option value="">-- Vyberte preferovanou službu --</option>
                  <option value="Adopce včelstva">Adopce včelstva</option>
                  <option value="Vlastní včelstvo">Vlastní včelstvo</option>
                  <option value="Obecní včelařství">Obecní včelařství (obec / škola)</option>
                  <option value="Individuální řešení">Individuální řešení / Jiné</option>
                </select>
                {errors.interestType && (
                  <p className="text-xs text-rose-500 flex items-center space-x-1 pt-0.5">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{errors.interestType}</span>
                  </p>
                )}
              </div>

              {/* Zpráva */}
              <div className="text-left space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-brand-green uppercase tracking-wider">
                  Vaše zpráva / Upřesnění lokality <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  placeholder="Dobrý den, uvažujeme o adopci včelstva pro naši firmu…"
                  className={`w-full px-4 py-3 rounded-none border bg-brand-beige/25 focus:outline-none focus:ring-1 transition-all text-sm ${
                    errors.message
                      ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                      : "border-brand-green/20 focus:ring-brand-gold/10 focus:border-brand-gold"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 flex items-center space-x-1 pt-0.5">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-form-submit"
                className="w-full bg-brand-green hover:bg-brand-gold hover:text-brand-green-dark text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-none transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer border border-brand-green art-shadow-flat"
              >
                <span>Odeslat nezávaznou poptávku</span>
                <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <p className="text-[11px] text-brand-green/60 text-center leading-normal">
                Kliknutím na tlačítko souhlasíte se zpracováním osobních údajů pro účely vyřízení poptávky.<br />
                Odesláním formuláře se nezavazujete k žádné platbě ani odběru služeb.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
