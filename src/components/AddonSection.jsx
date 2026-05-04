import { motion } from "framer-motion";

const addons = [
  { name: "Extra Noodles", price: "₦500" },
  { name: "Extra Egg (Fried)", price: "₦500" },
  { name: "Extra Egg (Boiled)", price: "₦400" },
  { name: "Extra Egg (Scrambled)", price: "₦400" },
  { name: "Diced Suya Chunk", price: "₦1,000" },
  { name: "Extra Sausage", price: "₦500" },
];

const AddonsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 px-5 bg-gradient-to-br from-[#1A2744] to-[#2d3f6e]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(244,124,38,0.2),transparent_60%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif text-white mb-2"
        >
          Make It <span className="text-yellow-400">Extra</span> 🔥
        </motion.h2>

        {/* DIVIDER */}
        <div className="w-16 h-[3px] bg-yellow-400 mx-auto my-3 rounded-full" />

        {/* SUBTEXT */}
        <p className="text-white/60 text-sm font-semibold uppercase tracking-wider">
          Customize Your Order
        </p>

        {/* GRID */}
        <div className="grid mt-10 gap-4 sm:grid-cols-2">
          {addons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="flex justify-between items-center bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-5 py-4 transition"
            >
              {/* NAME */}
              <div className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                {item.name}
              </div>

              {/* PRICE */}
              <div className="text-yellow-400 font-extrabold text-sm">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddonsSection;
