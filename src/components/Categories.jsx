import { motion } from 'framer-motion'

const categories = [
  { name: 'Dona', gradient: 'from-pink-200 to-rose-300', emoji: '👗' },
  { name: 'Home', gradient: 'from-blue-200 to-indigo-300', emoji: '👔' },
  { name: 'Accessoris', gradient: 'from-amber-200 to-yellow-300', emoji: '👜' },
  { name: 'Sales', gradient: 'from-red-200 to-orange-300', emoji: '🏷️' },
]

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      delay: i * 0.1,
    },
  }),
}

export default function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-3xl sm:text-4xl font-black text-dark text-center mb-12 tracking-tight"
        >
          Explora per <span className="text-accent">categoria</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#productes"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                <span className="text-6xl sm:text-7xl group-hover:scale-125 transition-transform duration-300">
                  {cat.emoji}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
