import { motion } from "framer-motion";
import { WHATSAPP_FULL } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 px-4 relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl">🍽️</span>
            <span className="font-display font-black text-3xl text-white">
              Chi <span className="text-brand-orange">Amaka</span>
            </span>
          </div>
          <p className="font-accent text-brand-orange/80 text-xl">
            Made with love, served hot ❤️
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-6 mb-8 flex-wrap"
        >
          <a
            href="#menu"
            className="font-body text-white/50 hover:text-brand-orange transition-colors text-sm"
          >
            Our Menu
          </a>
          <span className="text-white/20">•</span>
          <a
            href={WHATSAPP_FULL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/50 hover:text-brand-orange transition-colors text-sm"
          >
            Order on WhatsApp
          </a>
          <span className="text-white/20">•</span>
          <span className="font-body text-white/50 text-sm">
            📍 LeadCity University Ibadan
          </span>
        </motion.div>

        {/* Social / WhatsApp */}
        <motion.a
          href={WHATSAPP_FULL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-[#25D366] border border-[#25D366]/30 rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#25D366]/10 transition-all"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          +234 901 233 3083
        </motion.a>

        {/* Bottom divider */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="font-body text-white/25 text-xs">
            © {new Date().getFullYear()} Chi Amaka. All rights reserved. 🧡
          </p>
        </div>
      </div>
    </footer>
  );
}
