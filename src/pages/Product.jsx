import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, Truck, RotateCcw, ShieldCheck, Check } from 'lucide-react'
import { getProduct, PRODUCTS, formatGBP } from '../data/products'
import { useCart } from '../context/CartContext'
import { QtyControl } from '../components/CartDrawer'
import ProductCard from '../components/ProductCard'
import { useTitle } from '../components/PageHeader'
import NotFound from './NotFound'

export default function Product() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [qty, setQty] = useState(1)
  const { add } = useCart()
  useTitle(product?.name || 'Product not found')

  if (!product) return <NotFound />

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <div className="wrap pt-6">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-cove">
          <ChevronLeft size={16} /> Back to shop
        </Link>
      </div>
      <section className="wrap py-8 lg:py-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[22px] bg-mist aspect-square">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm text-ink-faint">{product.category} · SKU {product.sku}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold">{product.name}</h1>
          <p className="mt-4 font-display text-3xl font-semibold">{formatGBP(product.price)}</p>
          <p className="text-sm text-ink-faint">Including VAT</p>
          <p className="mt-6 text-lg text-ink-soft">{product.summary}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cove-deep">
            <Check size={16} /> In stock, ready to dispatch
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <QtyControl qty={qty} onChange={(q) => setQty(Math.max(1, Math.min(10, q)))} />
            <button onClick={() => add(product.slug, qty)} className="btn-primary flex-1 sm:flex-none sm:min-w-[220px]">
              Add to basket
            </button>
          </div>

          <ul className="mt-8 divide-y divide-line rounded-card border border-line">
            <li className="flex gap-3 p-4"><Truck size={20} className="text-cove shrink-0" /><span className="text-[15px]"><strong className="font-semibold">Delivery:</strong> free UK delivery over £40, otherwise £3.95. International from £9.95.</span></li>
            <li className="flex gap-3 p-4"><RotateCcw size={20} className="text-cove shrink-0" /><span className="text-[15px]"><strong className="font-semibold">Returns:</strong> 30 days to return unused items. <Link to="/refund-policy" className="text-cove underline">Returns policy</Link></span></li>
            <li className="flex gap-3 p-4"><ShieldCheck size={20} className="text-cove shrink-0" /><span className="text-[15px]"><strong className="font-semibold">Warranty:</strong> 12 months against manufacturing faults.</span></li>
          </ul>
        </div>
      </section>

      <section className="wrap pb-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold">About this product</h2>
          <p className="mt-3 text-ink-soft leading-7">{product.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Specifications</h2>
          <dl className="mt-3 divide-y divide-line border-y border-line">
            {product.specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3 text-[15px]">
                <dt className="text-ink-faint">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mist section">
          <div className="wrap">
            <h2 className="h-section mb-10">More in {product.category.toLowerCase()}</h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
