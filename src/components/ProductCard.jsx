import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatGBP } from '../data/products'

export default function ProductCard({ product }) {
  const { add } = useCart()
  return (
    <article className="group relative flex flex-col">
      <Link to={`/shop/${product.slug}`} className="block overflow-hidden rounded-card bg-mist aspect-[4/3.4]">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] text-ink-faint">{product.category}</p>
          <h3 className="mt-0.5 font-display text-[17px] font-semibold leading-snug">
            <Link to={`/shop/${product.slug}`} className="hover:text-cove">{product.name}</Link>
          </h3>
          <p className="mt-1 font-semibold">{formatGBP(product.price)}</p>
        </div>
        <button
          onClick={() => add(product.slug)}
          className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white hover:bg-cove"
          aria-label={`Add ${product.name} to basket`}
        >
          <Plus size={18} />
        </button>
      </div>
    </article>
  )
}
