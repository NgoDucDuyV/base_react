import { motion } from "framer-motion"
import { cn } from '../../../lib/utils'
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/client/cart.context"
import { Link } from "react-router-dom"
import type { TProduct } from "@/types/product.type"


interface ProductCardProps {
  product?: TProduct | undefined
  className?: string
}
function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart()

  if (!product) {
    return (
      <motion.article
        className={cn(
          "flex flex-col group",
          className)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative overflow-hidden min-w-[290px] h-[290px] bg-[#F0EEED] rounded-3xl overflow-hidden flex items-center justify-center mb-4 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            alt="T-shirt with Tape Details"
            className="object-contain w-full h-full p-8 group-hover:opacity-[0.6]"
            src="/product/men/product_3.png"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/5">
            <Link to={`/details/1`}
              className={cn(
                "w-[160px] text-center px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-in-out",
                "bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black",
                "shadow-md hover:shadow-xl transform hover:scale-105",
                "translate-y-4 group-hover:translate-y-0"
              )}
            >
              View Details
            </Link>
            <button
              onClick={() => {
              }}
              className={cn(
                "w-[160px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-in-out",
                "bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent",
                "shadow-md hover:shadow-xl transform hover:scale-105",
                "translate-y-4 group-hover:translate-y-0 delay-75"
              )}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </motion.div>

        <h3 className="text-lg font-bold mb-1">T-shirt with Tape Details</h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-2xl rating-star">
            <span>★</span><span>★</span><span>★</span><span>★</span><span className="opacity-50">★</span>
          </div>
          <span className="text-sm text-gray-500">4.5/5</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">100$</span>
          <span className="text-2xl font-bold text-gray-400 line-through">120$</span>
          {
            <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full">-30%</span>
          }
        </div>
      </motion.article>
    )
  }


  return (
    <motion.article
      className="flex flex-col group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={cn("relative overflow-hidden min-w-[290px] h-[290px] bg-[#F0EEED] rounded-3xl overflow-hidden flex items-center justify-center mb-4 group"
          ,className
        )}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          alt="T-shirt with Tape Details"
          className="object-contain w-full h-full p-8 group-hover:opacity-[0.6]"
          src={product?.image_url}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/5">
          <Link to={`/details/${product?.id}`}
            className={cn(
                "w-[160px] text-center px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-in-out",
                "bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black",
                "shadow-md hover:shadow-xl transform hover:scale-105",
                "translate-y-4 group-hover:translate-y-0"
            )}
          >
            View Details
          </Link>
          <button
            onClick={() => product && addToCart(product)}
            className={cn(
              "w-[160px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ease-in-out",
              "bg-white text-black border border-black hover:bg-black hover:text-white hover:border-transparent",
              "shadow-md hover:shadow-xl transform hover:scale-105",
              "translate-y-4 group-hover:translate-y-0 delay-75"
            )}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </motion.div>

      <h3 className="text-lg font-bold mb-1">{product?.name}</h3>

      <div className="flex items-center gap-1 mb-2">
        <div className="flex text-2xl rating-star">
          {
            Array.from({ length: product?.rating }).map((_, index) => (
              <span key={index}>★</span>
            ))
          }
          {
            Array.from({ length: 5 - product?.rating }).map((_, index) => (
              <span key={index} className="opacity-50">★</span>
            ))
          }
        </div>
        <span className="text-sm text-gray-500">{product?.rating}/5</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">{product?.current_price}{product?.currency}</span>
        <span className="text-2xl font-bold text-gray-400 line-through">{product?.original_price}{product?.currency}</span>
        {
          product?.discount_percentage && (
            <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full">-{product?.discount_percentage}%</span>
          )
        }
      </div>
    </motion.article>
  )
}

export default ProductCard