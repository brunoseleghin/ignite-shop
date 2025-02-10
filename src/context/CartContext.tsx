import { createContext, ReactNode, useContext, useState } from "react";
import { DialogContext } from "./DialogContext";

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextProps {
  productsOnCart: ProductProps[]
  existProductOnCart: (id: string) => boolean
  addProductToCart: (product: ProductProps) => void
  removeProductFromCart: (product: ProductProps) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }:  CartContextProviderProps) {
  const { setStatusDialog } = useContext(DialogContext)

  const [productsOnCart, setProductsOnCart] = useState<ProductProps[]>([])

  function addProductToCart(product: ProductProps) {
    setProductsOnCart((oldProducts) => [...oldProducts, product])

    setStatusDialog('open')
  }

  function existProductOnCart(id: string) {
    return productsOnCart.some((item) => item.id === id)
  }

  function removeProductFromCart(product: ProductProps) {
    const newProducts = productsOnCart.filter((item) => item.id !== product.id)

    setProductsOnCart(newProducts)

    if (newProducts.length === 0) {
      setStatusDialog('close')
    }
  }

  return (
    <CartContext.Provider value={{ productsOnCart, existProductOnCart, addProductToCart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  )
}