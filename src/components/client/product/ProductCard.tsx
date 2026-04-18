import { motion } from "framer-motion"
import { cn } from '../../../lib/utils'
import { ShoppingCart, Eye, Heart, Star } from "lucide-react"
import { useCart } from "@/contexts/client/cart.context"
import { Link } from "react-router-dom"
import type { TProduct } from "@/types/product.type"

interface ProductCardProps {
  product?: TProduct | any
  className?: string
}

function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart()

  // Default mock data for "UI only" mode
  const displayProduct = product && typeof product === 'object' ? product : {
    id: 1,
    name: "Premium Essential T-Shirt",
    image_url: "/product/men/product_3.png",
    current_price: 89,
    original_price: 120,
    currency: "$",
    rating: 4.8,
    discount_percentage: 25,
    description: "Experience ultimate comfort with our premium cotton blend."
  }

  return (
    <motion.article
      className={cn(
        "group flex flex-col bg-white dark:bg-zinc-900 rounded-[2rem] p-4 transition-all duration-500 premium-shadow premium-shadow-hover",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-6">
        <motion.img
          alt={displayProduct.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          src={displayProduct.image_url}
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <Link 
              to={`/details/${displayProduct.id}`}
              className="p-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
            >
              <Eye size={20} />
            </Link>
            <button
              onClick={() => addToCart(displayProduct)}
              className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg font-medium"
            >
              <ShoppingCart size={18} />
              <span className="text-sm">Add to Cart</span>
            </button>
            <button className="p-3 bg-white text-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100 shadow-lg">
              <Heart size={20} fill="currentColor" className="fill-transparent hover:fill-current" />
            </button>
          </div>
        </div>

        {/* Badge */}
        {displayProduct.discount_percentage && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
              -{displayProduct.discount_percentage}%
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-2">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(displayProduct.rating) ? "currentColor" : "transparent"} 
                className={i < Math.floor(displayProduct.rating) ? "" : "text-zinc-300"}
              />
            ))}
          </div>
          <span className="text-xs text-zinc-400 font-medium ml-1">
            {displayProduct.rating}
          </span>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {displayProduct.name}
        </h3>

        <div className="flex items-end gap-3">
          <span className="text-2xl font-black text-zinc-900 dark:text-white">
            {displayProduct.current_price}{displayProduct.currency}
          </span>
          {displayProduct.original_price && (
            <span className="text-base font-medium text-zinc-400 line-through mb-1">
              {displayProduct.original_price}{displayProduct.currency}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard