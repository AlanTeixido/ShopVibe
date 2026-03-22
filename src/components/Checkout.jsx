import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import useCartStore from '../store/cartStore'

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCartStore()
  const totalPrice = getTotalPrice()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    clearCart()
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HiCheck className="text-green-500 text-4xl" />
          </div>
          <h2 className="text-2xl font-black text-dark mb-2">Compra simulada!</h2>
          <p className="text-gray-500 mb-8">
            Això és una demo — no s'ha fet cap càrrec real. Gràcies per provar ShopVibe!
          </p>
          <Link
            to="/"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all"
          >
            Tornar a la botiga
          </Link>
        </motion.div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-black text-dark mb-4">El carret està buit</h2>
          <Link
            to="/"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all"
          >
            Tornar a la botiga
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 bg-gray-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-black text-dark mb-8"
        >
          Checkout <span className="text-accent">demo</span>
        </motion.h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 text-sm font-medium">
            Compra simulada — no s'introdueixen dades reals ni es fan càrrecs.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          {/* Form */}
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-sm"
          >
            <h3 className="font-bold text-dark text-lg">Dades d'enviament</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Nom</label>
                <input type="text" defaultValue="Maria García" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                <input type="email" defaultValue="maria@demo.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Adreça</label>
              <input type="text" defaultValue="Carrer de Pau Claris, 123, Barcelona" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Ciutat</label>
                <input type="text" defaultValue="Barcelona" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">CP</label>
                <input type="text" defaultValue="08010" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">País</label>
                <input type="text" defaultValue="Espanya" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
            </div>

            <h3 className="font-bold text-dark text-lg pt-4">Targeta (demo)</h3>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Número de targeta</label>
              <input type="text" defaultValue="4242 4242 4242 4242" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Caducitat</label>
                <input type="text" defaultValue="12/28" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">CVC</label>
                <input type="text" defaultValue="123" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white py-4 font-bold text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] mt-4"
            >
              Confirmar compra (demo)
            </button>
          </motion.form>

          {/* Summary */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm h-fit"
          >
            <h3 className="font-bold text-dark text-lg mb-4">Resum</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600 truncate mr-2">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="text-dark font-medium shrink-0">
                    {(item.price * item.quantity).toFixed(2)}€
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between">
              <span className="font-bold text-dark">Total</span>
              <span className="font-black text-accent text-xl">{totalPrice.toFixed(2)}€</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
