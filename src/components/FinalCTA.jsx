import { motion } from 'framer-motion'
import { WHATSAPP_FULL } from '../constants'
import ScrollReveal from './ScrollReveal'

const FOOD_EMOJIS = ['🍝', '🥞', '🍽️', '🔥', '❤️', '✨', '🤤', '😍']

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Radial warm gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-brand-cream" />

      {/* Scattered food emojis */}
      {FOOD_EMOJIS.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl select-none pointer-events-none opacity-20"
          style={{
            left: `${8 + (i * 12) % 88}%`,
            top: `${10 + (i * 19) % 75}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Icon */}
        <ScrollReveal variant="scaleIn">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl mb-6 block"
          >
            🍽️
          </motion.div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brand-brown leading-tight mb-6">
            Ready to eat something{' '}
            <span className="relative inline-block">
              <span className="text-brand-orange">amazing?</span>
              <motion.div
                className="absolute -inset-2 rounded-lg bg-brand-orange/10 -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h2>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="font-body text-brand-brown/65 text-lg md:text-xl max-w-lg mx-auto mb-4 leading-relaxed">
            Chi Amaka's signature noodles and fluffy pancakes are just one WhatsApp message away.
            Your perfect weekend meal is waiting. 🤤
          </p>
          <p className="font-accent text-brand-orange text-xl mb-10">
            We deliver happiness, one plate at a time 🧡
          </p>
        </ScrollReveal>

        {/* Big CTA */}
        <ScrollReveal variant="scaleIn" delay={0.3}>
          <motion.a
            href={WHATSAPP_FULL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(37, 211, 102, 0.4)',
                '0 0 60px rgba(37, 211, 102, 0.8)',
                '0 0 20px rgba(37, 211, 102, 0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-full text-xl md:text-2xl shadow-xl"
          >
            <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp Now
          </motion.a>
        </ScrollReveal>

        {/* Reassurance micro-copy */}
        <ScrollReveal variant="fadeUp" delay={0.45}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8">
            {[
              { icon: '⚡', text: 'Quick response' },
              { icon: '🔒', text: 'No hidden fees' },
              { icon: '🍽️', text: 'Made fresh for you' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-brand-brown/50 text-sm">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
