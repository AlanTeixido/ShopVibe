import { motion } from 'framer-motion'
import { HiOutlinePlus } from 'react-icons/hi'
import useCartStore from '../store/cartStore'

export default function ProductCard({ product, index }) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 16,
        delay: (index % 4) * 0.08,
      }}
      className="group relative"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
        <div
          className={`w-full h-full bg-gradient-to-br ${product.gradient} group-hover:scale-110 transition-transform duration-500`}
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${
              product.badge === 'OFERTA'
                ? 'bg-red-500 text-white'
                : 'bg-accent text-white'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Add to cart overlay */}
        <motion.button
          onClick={() => addItem(product)}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-3 left-3 right-3 bg-dark/90 hover:bg-accent text-white py-3 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <HiOutlinePlus size={16} />
          Afegir al carret
        </motion.button>
      </div>

      {/* Info */}
      <div>
        <h3 className="text-sm font-semibold text-dark truncate">{product.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{product.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-dark">{product.price.toFixed(2)}€</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toFixed(2)}€
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
