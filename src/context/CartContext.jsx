import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'

const KEY = 'veltrioncove_cart_v1'
const CartContext = createContext(null)

function load() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(parsed) ? parsed.filter((i) => getProduct(i.slug) && i.qty > 0) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch { /* storage unavailable */ }
  }, [items])

  const api = useMemo(() => {
    const lines = items.map((i) => ({ ...i, product: getProduct(i.slug) }))
    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0)
    return {
      lines, count, subtotal, open, setOpen,
      add: (slug, qty = 1) => {
        setItems((prev) => {
          const found = prev.find((i) => i.slug === slug)
          if (found) return prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(i.qty + qty, 10) } : i))
          return [...prev, { slug, qty: Math.min(qty, 10) }]
        })
        setOpen(true)
      },
      setQty: (slug, qty) =>
        setItems((prev) =>
          qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(qty, 10) } : i)),
        ),
      remove: (slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)),
      clear: () => setItems([]),
    }
  }, [items, open])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
