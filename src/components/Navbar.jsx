import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Phone } from 'lucide-react'
import Logo from './Logo'
import { useCart } from '../context/CartContext'
import { COMPANY } from '../data/company'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Help', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, setOpen: openCart } = useCart()
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-white/80 text-[13px]">
        <div className="wrap flex h-9 items-center justify-between gap-4">
          <p className="truncate">Free UK delivery on orders over £40. 30-day returns.</p>
          <a href={COMPANY.phoneHref} className="hidden sm:inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={13} /> {COMPANY.phone}
          </a>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur border-b border-line">
        <nav className="wrap flex h-[68px] items-center justify-between" aria-label="Main">
          <Logo />
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${isActive ? 'bg-cove-wash text-cove-deep' : 'text-ink-soft hover:text-ink hover:bg-mist'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link to="/services#enquire" className="hidden md:inline-flex btn-outline !py-2 !px-4 text-sm">Start a project</Link>
            <button
              onClick={() => openCart(true)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-mist text-ink hover:bg-cove-wash"
              aria-label={`Open basket, ${count} item${count === 1 ? '' : 's'}`}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-cove text-white text-[11px] font-bold flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-white z-40 overflow-y-auto">
          <ul className="wrap py-6 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3.5 font-display text-2xl ${isActive ? 'bg-cove-wash text-cove-deep' : 'text-ink'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="wrap pb-10 space-y-3">
            <Link to="/services#enquire" className="btn-primary w-full">Start a project</Link>
            <a href={`mailto:${COMPANY.email}`} className="btn-outline w-full">{COMPANY.email}</a>
          </div>
        </div>
      )}
    </header>
  )
}
