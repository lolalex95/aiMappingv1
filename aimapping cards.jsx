import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Custom Animated SVG Backgrounds ---

const TelecomBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" fill="none"
      animate={{ scale: [1, 4], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} />
    <motion.circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" fill="none"
      animate={{ scale: [1, 4], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeOut" }} />
    <circle cx="100" cy="100" r="8" fill="currentColor" />
    <path d="M100 0 L100 200 M0 100 L200 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
  </svg>
);

const EnergiaBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.path d="M110 40 L70 110 L100 115 L90 170 L140 95 L110 90 Z" fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
    <motion.line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3"
       animate={{ x: [-50, 50, -50] }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}/>
  </svg>
);

const CoopBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} style={{ transformOrigin: '100px 100px' }}>
      <circle cx="100" cy="70" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="75" cy="115" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="125" cy="115" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="100" cy="70" r="6" fill="currentColor" />
      <circle cx="75" cy="115" r="6" fill="currentColor" />
      <circle cx="125" cy="115" r="6" fill="currentColor" />
    </motion.g>
  </svg>
);

const InfraBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.g animate={{ y: [0, 40] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
      {[0, 40, 80, 120, 160, 200].map(y => (
         <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="currentColor" strokeWidth="1" />
      ))}
    </motion.g>
    <line x1="40" y1="0" x2="40" y2="200" stroke="currentColor" strokeWidth="2" />
    <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="2" />
    <line x1="160" y1="0" x2="160" y2="200" stroke="currentColor" strokeWidth="2" />
    <motion.rect x="80" y="80" width="40" height="120" fill="currentColor" opacity="0.5"
       animate={{ height: [120, 140, 120], y: [80, 60, 80] }} transition={{ repeat: Infinity, duration: 3 }}/>
  </svg>
);

const MuniBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.g animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <path d="M100 50 C75 50 55 70 55 95 C55 130 100 170 100 170 C100 170 145 130 145 95 C145 70 125 50 100 50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="100" cy="95" r="15" fill="currentColor" />
    </motion.g>
    <motion.ellipse cx="100" cy="180" rx="30" ry="6" fill="currentColor"
       animate={{ scale: [1, 0.7, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}/>
    <rect x="20" y="120" width="30" height="80" fill="currentColor" opacity="0.3" />
    <rect x="150" y="140" width="40" height="60" fill="currentColor" opacity="0.3" />
  </svg>
);

const CatastroBg = () => (
  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.15] text-[#37BEA7]">
    <motion.rect x="20" y="20" width="70" height="90" fill="none" stroke="currentColor" strokeWidth="3"
      strokeDasharray="320" animate={{ strokeDashoffset: [320, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
    <motion.rect x="100" y="20" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="3"
      strokeDasharray="260" animate={{ strokeDashoffset: [260, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }} />
    <motion.rect x="20" y="120" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="3"
      strokeDasharray="320" animate={{ strokeDashoffset: [320, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2 }} />
    <motion.rect x="130" y="80" width="50" height="100" fill="none" stroke="currentColor" strokeWidth="3"
      strokeDasharray="300" animate={{ strokeDashoffset: [300, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }} />
  </svg>
);


// --- Main Application & Logic ---

const CARDS = [
  { id: 'telecom', title: 'Telecomunicaciones', Bg: TelecomBg },
  { id: 'energia', title: 'Energía', Bg: EnergiaBg },
  { id: 'coop', title: 'Cooperativas', Bg: CoopBg },
  { id: 'infra', title: 'Infraestructura', Bg: InfraBg },
  { id: 'muni', title: 'Municipios', Bg: MuniBg },
  { id: 'catastro', title: 'Catastro', Bg: CatastroBg },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle the cards every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Framer Motion variants mapping the visual layers
  const cardVariants = {
    front: { y: 0, scale: 1, opacity: 1, zIndex: 3 },
    middle: { y: -20, scale: 0.95, opacity: 0.8, zIndex: 2 },
    back: { y: -40, scale: 0.9, opacity: 0.5, zIndex: 1 },
    exiting: { y: -150, scale: 1.05, opacity: 0, zIndex: 4 }, // Animates UP and fades out
    hidden: { y: 20, scale: 0.8, opacity: 0, zIndex: 0 },    // Resets invisibly behind the stack
  };

  return (
    // Transparent background wrapper as requested
    <div className="flex items-center justify-center min-h-[600px] w-full bg-transparent font-sans p-4">
      
      <div className="relative w-72 h-[450px] flex items-center justify-center">
        {CARDS.map((card, index) => {
          
          // Calculate relative position based on the looping current index
          const pos = ((index - currentIndex) % CARDS.length + CARDS.length) % CARDS.length;

          let variant = "hidden";
          if (pos === 0) variant = "front";
          else if (pos === 1) variant = "middle";
          else if (pos === 2) variant = "back";
          else if (pos === CARDS.length - 1) variant = "exiting";

          return (
            <motion.div
              key={card.id}
              className="absolute w-72 h-96 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_12px_40px_rgba(55,190,167,0.15)] flex flex-col items-center justify-center overflow-hidden"
              variants={cardVariants}
              initial={false}
              animate={variant}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Internal Animated SVG */}
              <card.Bg />
              
              {/* Card Content (Typography & Accents) */}
              <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
                <h2 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#3BB4A3] to-[#5058A2] bg-clip-text text-transparent">
                  {card.title}
                </h2>
                <div className="w-12 h-1.5 bg-[#37BEA7] rounded-full mt-2" />
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}