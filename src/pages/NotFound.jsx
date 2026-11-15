import { Link } from 'react-router-dom'
import { useTitle } from '../components/PageHeader'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="wrap py-24 lg:py-32 max-w-2xl">
      <p className="font-display text-7xl font-semibold text-cove">404</p>
      <h1 className="mt-4 text-4xl font-semibold">We cannot find that page</h1>
      <p className="mt-3 text-lg text-ink-soft">The link may be out of date or the product may no longer be available. Try the shop or go back to the home page.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/shop" className="btn-primary">Browse the shop</Link>
        <Link to="/" className="btn-outline">Home page</Link>
      </div>
    </section>
  )
}
