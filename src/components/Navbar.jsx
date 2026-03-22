import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineShoppingBag, HiOutlineSearch, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import useCartStore from '../store/cartStore'

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-dark hover:text-accent transition-colors"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tight text-dark">
            Shop<span className="text-accent">Vibe</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {['Dona', 'Home', 'Accessoris', 'Sales'].map((cat) => (
              <a
                key={cat}
                href={`#productes`}
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors uppercase tracking-wider"
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-accent transition-colors"
            >
              <HiOutlineSearch size={22} />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 text-gray-600 hover:text-accent transition-colors"
            >
              <HiOutlineShoppingBag size={22} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pb-4"
            >
              <input
                type="text"
                placeholder="Cerca productes..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {['Dona', 'Home', 'Accessoris', 'Sales'].map((cat) => (
                <a
                  key={cat}
                  href="#productes"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-accent uppercase tracking-wider py-2"
                >
                  {cat}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
