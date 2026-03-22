import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX, HiPlus, HiMinus, HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore()
  const navigate = useNavigate()
  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  const handleCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-dark">
                El teu carret <span className="text-accent">({totalItems})</span>
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-gray-400 hover:text-dark transition-colors"
              >
                <HiOutlineX size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg mb-2">El carret està buit</p>
                  <p className="text-gray-300 text-sm">Afegeix productes per començar</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    className="flex gap-4 pb-4 border-b border-gray-50"
                  >
                    {/* Thumbnail */}
                    <div
                      className={`w-20 h-24 rounded-lg bg-gradient-to-br ${item.gradient} shrink-0`}
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-dark truncate">{item.name}</h3>
                      <p className="text-sm font-bold text-accent mt-1">
                        {item.price.toFixed(2)}€
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 text-gray-500 hover:border-accent hover:text-accent transition-colors"
                        >
                          <HiMinus size={12} />
                        </button>
                        <span className="text-sm font-bold text-dark w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-gray-200 text-gray-500 hover:border-accent hover:text-accent transition-colors"
                        >
                          <HiPlus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="self-start p-1 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <HiOutlineTrash size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-gray-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-xl font-black text-dark">
                    {totalPrice.toFixed(2)}€
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 font-bold text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]"
                >
                  Finalitzar compra
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-gray-400 hover:text-dark font-medium transition-colors"
                >
                  Continuar comprant
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
