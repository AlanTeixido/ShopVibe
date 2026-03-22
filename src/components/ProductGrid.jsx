import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiAdjustments } from 'react-icons/hi'
import products from '../data/products'
import ProductCard from './ProductCard'

const CATEGORIES = ['Tots', 'Dona', 'Home', 'Accessoris', 'Sales']
const SORT_OPTIONS = [
  { value: 'default', label: 'Recomanats' },
  { value: 'price-asc', label: 'Preu: menor a major' },
  { value: 'price-desc', label: 'Preu: major a menor' },
  { value: 'name', label: 'Nom A-Z' },
]

export default function ProductGrid() {
  const [category, setCategory] = useState('Tots')
  const [sort, setSort] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]

    if (category !== 'Tots') {
      list = list.filter((p) => p.category === category.toLowerCase())
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return list
  }, [category, sort])

  return (
    <section id="productes" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-dark tracking-tight"
          >
            Tots els <span className="text-accent">productes</span>
          </motion.h2>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-lg"
          >
            <HiAdjustments size={18} />
            Filtres
          </button>
        </div>

        {/* Filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters || typeof window !== 'undefined' ? 'auto' : 0 }}
          className={`${showFilters ? 'block' : 'hidden'} sm:block mb-8`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    category === cat
                      ? 'bg-accent text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:border-accent"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category + sort}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16 text-lg">
            No s'han trobat productes en aquesta categoria.
          </p>
        )}
      </div>
    </section>
  )
}
