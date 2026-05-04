import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_FULL } from "../constants";
import ScrollReveal from "./ScrollReveal";

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-dark w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2"
        >
          <span className="font-display font-black text-2xl md:text-3xl text-white">
            {String(value).padStart(2, "0")}
          </span>
        </motion.div>
      </AnimatePresence>
      <span className="font-body text-xs text-white/60 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

const URGENCY_PHRASES = [
  "Don't dull order now before we sell out! 🔥",
  "Limited portions available today only! 😱",
  "People are ordering RIGHT NOW  don't miss out! ⚡",
  "Your taste buds deserve this  order NOW! 🤤",
];

export default function Urgency() {
  // Countdown: set to end of today for urgency
  const getTimeLeft = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(22, 0, 0, 0); // 10 PM cutoff
    const diff = Math.max(0, end - now);
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [time, setTime] = useState(getTimeLeft);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % URGENCY_PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Deep warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-[#3D1800] to-brand-dark" />

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-brand-orange/40"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow spots */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Spinning fire badge */}
        <ScrollReveal variant="scaleIn">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-5 py-2 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-xl"
            >
              🔥
            </motion.span>
            <span className="font-body font-semibold text-brand-orange text-sm uppercase tracking-wider">
              Limited Availability
            </span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
              className="text-xl"
            >
              🔥
            </motion.span>
          </motion.div>
        </ScrollReveal>

        {/* Rotating urgency phrase */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="h-16 md:h-14 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={phraseIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight px-4"
              >
                {URGENCY_PHRASES[phraseIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="font-body text-white/60 text-lg mb-10">
            Orders close at{" "}
            <span className="text-brand-amber font-semibold">10:00 PM</span>{" "}
            today — don't sleep on this! 😤
          </p>
        </ScrollReveal>

        {/* Countdown */}
        <ScrollReveal variant="scaleIn" delay={0.3}>
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
            <CountdownUnit value={time.hours} label="Hours" />
            <span className="font-display text-3xl text-brand-orange font-black pb-6">
              :
            </span>
            <CountdownUnit value={time.minutes} label="Minutes" />
            <span className="font-display text-3xl text-brand-orange font-black pb-6">
              :
            </span>
            <CountdownUnit value={time.seconds} label="Seconds" />
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal variant="scaleIn" delay={0.4}>
          <motion.a
            href={WHATSAPP_FULL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(255, 107, 43, 0.5)",
                "0 0 70px rgba(255, 107, 43, 0.9)",
                "0 0 30px rgba(255, 107, 43, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-orange to-brand-red text-white font-bold px-10 py-5 rounded-full text-xl"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🍽️
            </motion.span>
            Order Before It's Gone!
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
