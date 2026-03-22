import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-light via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          >
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Nova Col·lecció Primavera 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-dark leading-[0.95] tracking-tight">
              Descobreix el
              <br />
              teu <span className="text-accent">estil</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-lg leading-relaxed">
              Peces exclusives amb disseny modern i sostenible. La moda que defineix la teva personalitat.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#productes"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                Comprar ara
              </a>
              <a
                href="#categories"
                className="border-2 border-dark text-dark px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-all"
              >
                Explorar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-violet-300 via-purple-200 to-fuchsia-200 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    </section>
  )
}
