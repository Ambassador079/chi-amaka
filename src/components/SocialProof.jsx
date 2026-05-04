import { motion } from 'framer-motion'
import { REVIEWS } from '../constants'
import ScrollReveal from './ScrollReveal'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, type: 'spring', stiffness: 300 }}
          className="text-amber-400 text-lg"
        >
          ⭐
        </motion.span>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <ScrollReveal variant="scaleIn" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-3xl p-6 shadow-card border border-orange-50 h-full flex flex-col"
      >
        {/* Stars */}
        <StarRating count={review.rating} />

        {/* Review text */}
        <p className="font-body text-brand-brown/75 text-sm md:text-base leading-relaxed mt-3 flex-1">
          "{review.text}"
        </p>

        {/* Reviewer */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-orange-50">
          <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold font-display text-lg flex-shrink-0`}>
            {review.avatar}
          </div>
          <div>
            <p className="font-body font-semibold text-brand-brown text-sm">{review.name}</p>
            <p className="font-body text-brand-brown/50 text-xs">{review.location}</p>
          </div>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="ml-auto text-xl"
          >
            ✅
          </motion.span>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-brand-cream to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-8 text-6xl opacity-10 select-none font-display">"</div>
      <div className="absolute bottom-12 right-8 text-6xl opacity-10 select-none font-display rotate-180">"</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <span className="font-accent text-brand-orange text-xl">— The people have spoken —</span>
          <h2 className="section-title mt-2 mb-4">
            Real <span className="text-brand-orange">Love</span> from Real Customers
          </h2>
          <p className="font-body text-brand-brown/65 text-lg max-w-md mx-auto">
            Don't take our word for it — hear from the people who can't stop ordering 😍
          </p>
        </ScrollReveal>

        {/* Aggregate rating */}
        <ScrollReveal variant="scaleIn" delay={0.1} className="flex justify-center mb-12">
          <div className="glass rounded-3xl px-8 py-5 shadow-card border border-orange-100 flex items-center gap-6">
            <div className="text-center">
              <p className="font-display font-black text-5xl text-brand-orange">4.9</p>
              <p className="font-body text-xs text-brand-brown/50 mt-1">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-orange-100" />
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xl">⭐</span>)}
              </div>
              <p className="font-body text-xs text-brand-brown/50">500+ reviews</p>
            </div>
            <div className="w-px h-12 bg-orange-100" />
            <div className="text-center">
              <p className="font-display font-black text-3xl text-brand-orange">98%</p>
              <p className="font-body text-xs text-brand-brown/50 mt-1">Would reorder</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Bottom CTA teaser */}
        <ScrollReveal variant="fadeUp" delay={0.4} className="text-center mt-12">
          <p className="font-accent text-2xl text-brand-brown/60">
            Join 500+ happy customers. You won't regret it. 🧡
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
