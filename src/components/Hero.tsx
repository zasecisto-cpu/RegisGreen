import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <header
      id="hero"
      className="relative min-h-screen bg-brand-green text-white flex items-center pt-24 overflow-hidden"
    >
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg id="bg-honeycomb-pattern" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path
                d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 97 L56 113 L56 145 L28 161 L0 145 L0 113 Z"
                fill="none"
                stroke="#c8860a"
                strokeWidth="1"
              />
              <path
                d="M56 48 L84 64 L84 96 L56 112 L28 96 L28 64 Z"
                fill="none"
                stroke="#c8860a"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Decorative Radial Lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-green-light/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-green-dark/80 border border-brand-gold/30 px-4 py-1.5 rounded-none"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">
                PRO FIRMY A MODERNÍ MĚSTA V MORAVSKOSLEZSKÉM KRAJI
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight leading-[1.1] text-white"
              >
                REGIS <span className="text-brand-gold">GREEN</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-gold font-display leading-tight uppercase tracking-tight"
              >
                Biodiverzita, kterou můžete doložit.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl font-bold text-brand-beige leading-relaxed max-w-2xl mt-4"
              >
                Včelstva, květnaté louky a pestré lesy v Beskydech – kompletní přírodní program pro vaši firmu s ročním shrnutím ze stanoviště, fotodokumentací a GPS souřadnicemi.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm sm:text-base text-brand-beige/80 max-w-xl leading-relaxed italic border-l-2 border-brand-gold pl-4 mt-6"
            >
              Nekupujete certifikát z druhé strany světa. Financujete konkrétní úly, konkrétní louku a konkrétní stromy, které můžete kdykoliv navštívit – 30 minut od Ostravy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-cta-primary"
                onClick={() => onScrollTo("kontakt")}
                className="bg-brand-gold hover:bg-brand-green-dark text-white hover:text-brand-gold font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 border border-brand-gold shadow-xl flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>CHCI NABÍDKU PRO FIRMU</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-secondary"
                onClick={() => onScrollTo("co-nabizime")}
                className="border border-brand-beige/30 hover:border-brand-gold hover:text-brand-gold text-brand-beige font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 bg-brand-green-dark/30 hover:bg-brand-green-dark/50 flex items-center justify-center cursor-pointer"
              >
                ŘEŠENÍ PRO OBCE A ŠKOLY
              </button>
            </motion.div>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-brand-green-light/20 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-brand-beige/70">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Působnost v celém MSK</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-brand-beige/70">
                <ShieldCheck className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Péče aktivních včelařů</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-brand-beige/70 col-span-2 sm:col-span-1">
                <Award className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Report ze stanoviště v ceně</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Premium SVG Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, type: "spring", stiffness: 50 }}
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border-2 border-dashed border-brand-gold/30 rounded-full animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-4 border border-brand-gold/15 rounded-full" />
              
              {/* Main SVG Illustration */}
              <div className="relative z-10 w-4/5 h-4/5 bg-brand-green-dark/60 rounded-full border-2 border-brand-gold/40 flex items-center justify-center shadow-2xl p-6">
                <svg
                  id="hero-illustration-svg"
                  viewBox="0 0 200 200"
                  className="w-full h-full text-brand-gold"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hexagonal beehive center */}
                  <g transform="translate(100, 100)">
                    {/* Honeycomb grid back */}
                    <path
                      d="M-30,-17 L-15,-26 L15,-26 L30,-17 L30,17 L15,26 L-15,26 L-30,17 Z"
                      fill="rgba(200, 134, 10, 0.05)"
                      stroke="rgba(200, 134, 10, 0.2)"
                      strokeWidth="1.5"
                    />
                    
                    {/* Modern stylized wooden beehive */}
                    <g transform="translate(0, 10)">
                      {/* Roof */}
                      <path d="M-45,-45 L45,-45 L35,-55 L-35,-55 Z" fill="#9c6808" />
                      {/* Top box */}
                      <rect x="-35" y="-40" width="70" height="22" rx="2" fill="#c8860a" />
                      <line x1="-35" y1="-29" x2="35" y2="-29" stroke="#1a3a2a" strokeWidth="2" />
                      <circle cx="0" cy="-29" r="4" fill="#1a3a2a" />
                      
                      {/* Middle box */}
                      <rect x="-35" y="-14" width="70" height="22" rx="2" fill="#9c6808" />
                      <line x1="-35" y1="-3" x2="35" y2="-3" stroke="#1a3a2a" strokeWidth="2" />
                      
                      {/* Bottom box */}
                      <rect x="-35" y="12" width="70" height="22" rx="2" fill="#c8860a" />
                      {/* Flight entry hole */}
                      <path d="M-12,25 L12,25 L8,18 L-8,18 Z" fill="#1a3a2a" />
                      {/* Stand legs */}
                      <rect x="-30" y="34" width="8" height="12" fill="#5a3d05" />
                      <rect x="22" y="34" width="8" height="12" fill="#5a3d05" />
                    </g>

                    {/* Bees flying around */}
                    {/* Bee 1 */}
                    <g transform="translate(-50, -40) scale(0.7) rotate(-20)">
                      <ellipse cx="0" cy="0" rx="10" ry="7" fill="#c8860a" />
                      <path d="M-4, -5 L-4, 5 M1, -7 L1, 7" stroke="#1a3a2a" strokeWidth="2.5" />
                      {/* Wings */}
                      <ellipse cx="-1" cy="-8" rx="4" ry="7" fill="rgba(255, 255, 255, 0.7)" transform="rotate(-30)" />
                      <ellipse cx="4" cy="-8" rx="3" ry="6" fill="rgba(255, 255, 255, 0.5)" transform="rotate(-15)" />
                    </g>

                    {/* Bee 2 */}
                    <g transform="translate(60, -20) scale(0.6) rotate(35)">
                      <ellipse cx="0" cy="0" rx="10" ry="7" fill="#c8860a" />
                      <path d="M-4, -5 L-4, 5 M1, -7 L1, 7" stroke="#1a3a2a" strokeWidth="2.5" />
                      {/* Wings */}
                      <ellipse cx="-1" cy="-8" rx="4" ry="7" fill="rgba(255, 255, 255, 0.7)" transform="rotate(-30)" />
                      <ellipse cx="4" cy="-8" rx="3" ry="6" fill="rgba(255, 255, 255, 0.5)" transform="rotate(-15)" />
                    </g>

                    {/* Bee 3 (near entry) */}
                    <g transform="translate(25, 45) scale(0.5) rotate(-45)">
                      <ellipse cx="0" cy="0" rx="10" ry="7" fill="#c8860a" />
                      <path d="M-4, -5 L-4, 5 M1, -7 L1, 7" stroke="#1a3a2a" strokeWidth="2.5" />
                      {/* Wings */}
                      <ellipse cx="-1" cy="-8" rx="4" ry="7" fill="rgba(255, 255, 255, 0.7)" transform="rotate(-30)" />
                    </g>

                    {/* Dynamic Flight dotted paths */}
                    <path
                      d="M -70,-10 Q -50,-50 -50,-40"
                      fill="none"
                      stroke="rgba(200, 134, 10, 0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                    />
                    <path
                      d="M 80,10 Q 70,-40 60,-20"
                      fill="none"
                      stroke="rgba(200, 134, 10, 0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                    />
                  </g>
                </svg>
              </div>

              {/* Stats Badge */}
              <div id="stats-badge" className="absolute -bottom-2 -right-2 bg-brand-green-dark border-2 border-brand-gold p-3.5 rounded-none shadow-xl flex items-center space-x-3 z-20">
                <div className="bg-brand-gold/10 p-2 rounded-none text-brand-gold border border-brand-gold/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-black font-display text-white leading-none">14</div>
                  <div className="text-[10px] text-brand-beige/60 uppercase tracking-[0.1em] font-bold">vlastních včelstev</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}
