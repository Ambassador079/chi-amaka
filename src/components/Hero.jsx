import { motion } from 'framer-motion'
import { WHATSAPP_FULL } from '../constants'

const FloatingEmoji = ({ emoji, className, delay = 0 }) => (
  <motion.span
    className={`absolute text-4xl md:text-5xl select-none pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [-5, 5, -5],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {emoji}
  </motion.span>
)

const FoodIllustration = ({ emoji, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`w-36 h-36 md:w-44 md:h-44 rounded-3xl ${color} flex flex-col items-center justify-center shadow-glow-lg relative overflow-hidden`}
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
      <span className="text-7xl md:text-8xl relative z-10 drop-shadow-lg">{emoji}</span>
      <span className="text-white font-body font-semibold text-sm mt-1 relative z-10 drop-shadow">{label}</span>
    </motion.div>
  </motion.div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-orange-50 to-amber-50" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl -translate-y-20 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl translate-y-20 -translate-x-20" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Floating emojis */}
      <FloatingEmoji emoji="🤤" className="top-32 left-8 md:left-20" delay={0} />
      <FloatingEmoji emoji="🍝" className="top-24 right-12 md:right-32" delay={0.5} />
      <FloatingEmoji emoji="🥞" className="bottom-24 left-12 md:left-28" delay={1} />
      <FloatingEmoji emoji="❤️" className="bottom-32 right-8 md:right-24" delay={1.5} />
      <FloatingEmoji emoji="✨" className="top-1/2 left-4 md:left-12 hidden md:block" delay={0.8} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Weekend badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-lg"
              >
                🎉
              </motion.span>
              <span className="font-body font-medium text-brand-orange text-sm">
                Weekend Special is LIVE!
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-brand-brown leading-tight mb-4"
            >
              Happy Beautiful{' '}
              <span className="relative inline-block">
                <span className="text-brand-orange">Weekend</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  ❤️
                </motion.span>
                {/* Underline squiggle */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    d="M2 8 C40 2, 80 12, 120 6 C160 0, 185 10, 198 6"
                    stroke="#FF6B2B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg md:text-xl text-brand-brown/70 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Craving something delicious?{' '}
              <span className="font-semibold text-brand-orange">Our signature noodles</span>{' '}
              and{' '}
              <span className="font-semibold text-amber-500">fluffy pancakes</span>{' '}
              are calling your name!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={WHATSAPP_FULL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(37, 211, 102, 0.4)',
                    '0 0 50px rgba(37, 211, 102, 0.7)',
                    '0 0 20px rgba(37, 211, 102, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="btn-whatsapp text-base md:text-lg"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order Now on WhatsApp
              </motion.a>

              <motion.a
                href="#menu"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 border-2 border-brand-orange text-brand-orange font-semibold px-6 py-4 rounded-full text-base transition-all duration-300 hover:bg-brand-orange hover:text-white"
              >
                See Our Menu ↓
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start flex-wrap"
            >
              {[
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '🔥', text: 'Made Fresh' },
                { icon: '❤️', text: 'Made with Love' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5 text-brand-brown/60 text-sm font-medium">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Food Illustrations */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-6 items-end">
              <FoodIllustration
                emoji="🍝"
                label="Noodles"
                color="bg-gradient-to-br from-orange-400 to-red-500"
                delay={0.3}
              />
              <FoodIllustration
                emoji="🥞"
                label="Pancakes"
                color="bg-gradient-to-br from-amber-400 to-orange-500"
                delay={0.5}
              />
            </div>

            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl px-6 py-4 shadow-card text-center border border-orange-100"
            >
              <div className="flex items-center gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="text-amber-400 text-xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <p className="font-display text-brand-brown font-bold text-lg">4.9 / 5.0</p>
              <p className="font-body text-xs text-brand-brown/60 mt-0.5">500+ happy customers</p>
            </motion.div>

            {/* Accent font tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-accent text-2xl text-brand-orange"
            >
              "Every bite tells a story" ✨
            </motion.p>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80, 1080 0, 1440 40 L1440 80 L0 80 Z" fill="white" fillOpacity="0.6" />
        </svg>
      </div>
    </section>
  )
}
