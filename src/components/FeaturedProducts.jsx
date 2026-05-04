import { motion } from 'framer-motion'
import { PRODUCTS } from '../constants'
import ScrollReveal from './ScrollReveal'

function StarRow() {
  return (
    <div className="flex gap-0.5 mt-1">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, type: 'spring', stiffness: 400 }}
          className="text-amber-400 text-sm"
        >
          ⭐
        </motion.span>
      ))}
    </div>
  )
}

function ProductCard({ product, index }) {
  const waMessage = encodeURIComponent(`Hi Chi Amaka! I'd like to order ${product.name} please 😋`)
  const orderLink = `https://wa.me/2349012333083?text=${waMessage}`

  return (
    <ScrollReveal variant={index % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="bg-white rounded-3xl overflow-hidden shadow-card border border-orange-50 group flex flex-col"
      >
        {/* Image Header */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute top-4 right-4"
          >
            <span className={`bg-gradient-to-r ${product.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
              {product.badge}
            </span>
          </motion.div>

          {/* Title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display font-black text-2xl md:text-3xl text-white drop-shadow-lg">
              {product.name}
            </h3>
            <p className="font-body text-white/80 text-sm mt-0.5">{product.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Menu items with prices */}
          <div className="space-y-4 mb-5">
            {product.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start justify-between gap-3 pb-4 border-b border-orange-50 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="font-body font-semibold text-brand-brown text-sm md:text-base">{item.name}</p>
                  <p className="font-body text-brand-brown/55 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  <StarRow />
                </div>
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className={`flex-shrink-0 bg-gradient-to-r ${product.color} text-white font-bold text-sm px-3 py-1.5 rounded-xl shadow-md mt-0.5`}
                >
                  {item.price}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Perks */}
          {product.perks && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="bg-orange-50 rounded-2xl p-4 mb-5"
            >
              <p className="font-body font-semibold text-brand-orange text-xs uppercase tracking-wider mb-2">
                🎁 Comes With
              </p>
              <ul className="space-y-1.5">
                {product.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-brand-brown/70 text-xs font-body">
                    <span className="text-green-500">✅</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Order button */}
          <motion.a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                '0 0 15px rgba(255,107,43,0.3)',
                '0 0 35px rgba(255,107,43,0.6)',
                '0 0 15px rgba(255,107,43,0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className={`mt-auto flex items-center justify-center gap-2 w-full bg-gradient-to-r ${product.color} text-white font-bold py-4 rounded-2xl text-sm md:text-base`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Order Now on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function FeaturedProducts() {
  return (
    <section id="menu" className="py-20 md:py-28 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-70" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <span className="font-accent text-brand-orange text-xl">— This week's stars —</span>
          <h2 className="section-title mt-2 mb-3">
            Our Signature <span className="text-brand-orange">Menu</span>
          </h2>
          <div className="flex items-center justify-center gap-3 text-brand-brown/50 text-sm font-medium mt-2">
            <span>FRESH</span><span className="text-brand-orange">·</span>
            <span>TASTY</span><span className="text-brand-orange">·</span>
            <span>SATISFYING</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3} className="text-center mt-10">
          <p className="font-accent text-brand-brown/45 text-lg">
            All dishes made fresh — no preservatives, just pure love 🧡
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
