import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatGBP, SHIPPING } from '../data/products'

export function QtyControl({ qty, onChange, small = false }) {
  const s = small ? 'h-8 w-8' : 'h-10 w-10'
  return (
    <div className="inline-flex items-center rounded-full border border-line">
      <button className={`${s} inline-flex items-center justify-center rounded-full hover:bg-mist`} onClick={() => onChange(qty - 1)} aria-label="Decrease quantity">
        <Minus size={14} />
      </button>
      <span className="w-7 text-center text-sm font-semibold" aria-live="polite">{qty}</span>
      <button className={`${s} inline-flex items-center justify-center rounded-full hover:bg-mist disabled:opacity-40`} onClick={() => onChange(qty + 1)} disabled={qty >= 10} aria-label="Increase quantity">
        <Plus size={14} />
      </button>
    </div>
  )
}

export default function CartDrawer() {
  const { open, setOpen, lines, subtotal, setQty, remove } = useCart()
  const remaining = SHIPPING.freeThreshold - subtotal

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
      <aside
        role="dialog"
        aria-label="Your basket"
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-line">
          <h2 className="text-xl font-semibold">Your basket</h2>
          <button onClick={() => setOpen(false)} className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-mist" aria-label="Close basket">
            <X size={20} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-xl font-semibold">Your basket is empty</p>
            <p className="mt-2 text-ink-soft">Browse headphones, earbuds, wearables and desk gear.</p>
            <Link to="/shop" onClick={() => setOpen(false)} className="btn-primary mt-6">Browse the shop</Link>
          </div>
        ) : (
          <>
            <div className="px-6 py-3 bg-cove-wash text-sm text-cove-deep">
              {remaining > 0 ? <>Add {formatGBP(remaining)} more for free UK delivery.</> : <>Your order qualifies for free UK delivery.</>}
            </div>
            <ul className="flex-1 overflow-y-auto divide-y divide-line px-6">
              {lines.map(({ slug, qty, product }) => (
                <li key={slug} className="py-5 flex gap-4">
                  <img src={product.image} alt="" className="h-20 w-20 rounded-xl object-cover bg-mist" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <Link to={`/shop/${slug}`} onClick={() => setOpen(false)} className="font-medium leading-snug hover:text-cove">{product.name}</Link>
                      <span className="font-semibold">{formatGBP(product.price * qty)}</span>
                    </div>
                    <p className="text-sm text-ink-faint">{product.sku}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <QtyControl small qty={qty} onChange={(q) => setQty(slug, q)} />
                      <button onClick={() => remove(slug)} className="text-ink-faint hover:text-ink inline-flex items-center gap-1 text-sm">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-6 py-5 space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span><span>{formatGBP(subtotal)}</span>
              </div>
              <p className="text-sm text-ink-faint">Prices include VAT. Delivery is calculated at checkout.</p>
              <Link to="/checkout" onClick={() => setOpen(false)} className="btn-primary w-full">Go to checkout</Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="btn-outline w-full">View basket</Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
