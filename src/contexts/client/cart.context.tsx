import React, { createContext, useContext, useEffect, useState } from "react"
import type { TProduct } from "@/types/product.type"
import { toast } from "sonner"

export interface TCartItem extends TProduct {
    quantity: number
}

interface CartContextType {
    cartItems: TCartItem[]
    addToCart: (product: TProduct, quantity?: number) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    totalAmount: number
    cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<TCartItem[]>(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product: TProduct, quantity = 1) => {
        const existingItem = cartItems.find(item => item.id === product.id)

        if (existingItem) {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            )
            toast.success(`Đã cập nhật số lượng ${product.name} trong giỏ hàng`)
        } else {
            setCartItems(prevItems => [...prevItems, { ...product, quantity }])
            toast.success(`Đã thêm ${product.name} vào giỏ hàng`)
        }
    }

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
        toast.success("Đã xóa sản phẩm khỏi giỏ hàng")
    }

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem("cart")
    }

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.current_price * item.quantity,
        0
    )

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalAmount,
                cartCount
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
