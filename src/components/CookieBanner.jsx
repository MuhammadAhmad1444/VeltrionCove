import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'veltrioncove_cookie_consent'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let stored = null
    try { stored = localStorage.getItem(KEY) } catch { /* ignore */ }
    if (!stored) {
      const t = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const choose = (value) => {
    try { localStorage.setItem(KEY, value) } catch { /* ignore */ }
    setShow(false)
  }

  if (!show) return null

  return (
    <div role="region" aria-label="Cookie preferences" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 sm:max-w-sm">
      <div className="rounded-card bg-white border border-line shadow-xl p-5">
        <p className="font-display font-semibold">Cookies on this site</p>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
          We use essential cookies to run the shop and your basket. With your permission we also use analytics cookies to improve the site. Read our <Link to="/cookie-policy" className="text-cove underline">cookie policy</Link>.
        </p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => choose('all')} className="btn-primary !py-2 !px-4 text-sm flex-1">Accept all</button>
          <button onClick={() => choose('essential')} className="btn-outline !py-2 !px-4 text-sm flex-1">Essential only</button>
        </div>
      </div>
    </div>
  )
}
