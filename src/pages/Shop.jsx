import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import PageHeader, { useTitle } from '../components/PageHeader'
import { PRODUCTS, CATEGORIES } from '../data/products'

const SORTS = {
  featured: { label: 'Featured', fn: (a, b) => Number(b.featured) - Number(a.featured) },
  'price-asc': { label: 'Price, low to high', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price, high to low', fn: (a, b) => b.price - a.price },
  name: { label: 'Name, A to Z', fn: (a, b) => a.name.localeCompare(b.name) },
}

export default function Shop() {
  useTitle('Shop')
  const [params, setParams] = useSearchParams()
  const category = CATEGORIES.includes(params.get('category')) ? params.get('category') : 'All'
  const sort = SORTS[params.get('sort')] ? params.get('sort') : 'featured'

  const list = useMemo(
    () => PRODUCTS.filter((p) => category === 'All' || p.category === category).slice().sort(SORTS[sort].fn),
    [category, sort],
  )

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'All' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <>
      <PageHeader title="Shop" intro="Audio, wearables and desk accessories. All prices include UK VAT, with free UK delivery on orders over £40." />
      <div className="wrap py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {['All', ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => update('category', c)}
                aria-pressed={category === c}
                className={`chip border ${category === c ? 'bg-ink border-ink text-white' : 'border-line text-ink-soft hover:border-ink hover:text-ink'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 text-sm text-ink-soft">
            Sort by
            <select value={sort} onChange={(e) => update('sort', e.target.value)} className="field !w-auto !py-2 !rounded-full">
              {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </label>
        </div>
        <p className="text-sm text-ink-faint mb-6" aria-live="polite">{list.length} product{list.length === 1 ? '' : 's'}</p>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </>
  )
}
