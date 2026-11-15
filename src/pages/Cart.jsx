import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { QtyControl } from '../components/CartDrawer'
import PageHeader, { useTitle } from '../components/PageHeader'
import { formatGBP, shippingFor, SHIPPING } from '../data/products'

export default function Cart() {
  useTitle('Your basket')
  const { lines, subtotal, setQty, remove } = useCart()
  const shipping = shippingFor(subtotal, 'uk')

  return (
    <>
      <PageHeader title="Your basket" />
      <div className="wrap py-12 lg:py-16">
        {lines.length === 0 ? (
          <div className="card p-10 text-center max-w-xl mx-auto">
            <p className="font-display text-2xl font-semibold">Your basket is empty</p>
            <p className="mt-2 text-ink-soft">Find headphones, earbuds, wearables and desk gear in the shop.</p>
            <Link to="/shop" className="btn-primary mt-6">Browse the shop</Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
            <ul className="divide-y divide-line border-y border-line">
              {lines.map(({ slug, qty, product }) => (
                <li key={slug} className="py-6 flex gap-5">
                  <Link to={`/shop/${slug}`} className="shrink-0"><img src={product.image} alt="" className="h-28 w-28 rounded-card object-cover bg-mist" /></Link>
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <Link to={`/shop/${slug}`} className="font-display text-lg font-semibold hover:text-cove">{product.name}</Link>
                      <p className="text-sm text-ink-faint">{product.sku} · {formatGBP(product.price)} each</p>
                      <button onClick={() => remove(slug)} className="mt-3 inline-flex items-center gap-1 text-sm text-ink-faint hover:text-ink"><Trash2 size={14} /> Remove</button>
                    </div>
                    <div className="flex items-center gap-6">
                      <QtyControl qty={qty} onChange={(q) => setQty(slug, q)} />
                      <span className="w-20 text-right font-semibold">{formatGBP(product.price * qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="card p-6 sm:p-7 lg:sticky lg:top-32">
              <h2 className="text-xl font-semibold">Order summary</h2>
              <dl className="mt-5 space-y-3 text-[15px]">
                <div className="flex justify-between"><dt className="text-ink-soft">Subtotal</dt><dd>{formatGBP(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-soft">UK delivery</dt><dd>{shipping === 0 ? 'Free' : formatGBP(shipping)}</dd></div>
                <div className="flex justify-between border-t border-line pt-3 text-lg font-semibold"><dt>Estimated total</dt><dd>{formatGBP(subtotal + shipping)}</dd></div>
              </dl>
              <p className="mt-2 text-sm text-ink-faint">Includes VAT. Free UK delivery over {formatGBP(SHIPPING.freeThreshold)}. International rates shown at checkout.</p>
              <Link to="/checkout" className="btn-primary w-full mt-6">Go to checkout</Link>
              <Link to="/shop" className="btn-outline w-full mt-3">Continue shopping</Link>
            </aside>
          </div>
        )}
      </div>
    </>
  )
}
