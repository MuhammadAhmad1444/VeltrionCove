import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'
import { COMPANY, registrationLine } from '../data/company'

const cols = [
  { title: 'Shop', links: [['All products', '/shop'], ['Audio', '/shop?category=Audio'], ['Wearables', '/shop?category=Wearables'], ['Desk setup', '/shop?category=Desk%20setup'], ['Your basket', '/cart']] },
  { title: 'Services', links: [['Website and app development', '/services#web'], ['E-commerce setup', '/services#ecommerce'], ['Digital marketing', '/services#marketing'], ['IT consultancy', '/services#consultancy']] },
  { title: 'Help', links: [['Contact us', '/contact'], ['FAQs', '/faq'], ['Delivery', '/shipping-policy'], ['Returns and refunds', '/refund-policy'], ['About us', '/about']] },
]

const legal = [
  ['Privacy policy', '/privacy-policy'],
  ['Terms of service', '/terms-of-service'],
  ['Refund policy', '/refund-policy'],
  ['Shipping policy', '/shipping-policy'],
  ['Cookie policy', '/cookie-policy'],
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white/75">
      <div className="wrap py-16 grid gap-12 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
            Tech accessories shipped from London to customers in the UK and abroad, and digital services for small businesses.
          </p>
          <ul className="mt-7 space-y-3 text-[15px]">
            <li className="flex gap-3"><MapPin size={17} className="mt-1 shrink-0 text-cove-light" /><span>{COMPANY.address}</span></li>
            <li className="flex gap-3"><Phone size={17} className="mt-1 shrink-0 text-cove-light" /><a href={COMPANY.phoneHref} className="hover:text-white">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><Mail size={17} className="mt-1 shrink-0 text-cove-light" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></li>
            <li className="flex gap-3"><Clock size={17} className="mt-1 shrink-0 text-cove-light" /><span>{COMPANY.hours}</span></li>
          </ul>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-white text-base font-semibold mb-4">{c.title}</h3>
              <ul className="space-y-2.5 text-[15px]">
                {c.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="hover:text-white">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-[13px] text-white/55">
          <div className="space-y-1">
            <p>{registrationLine()}</p>
            <p>Registered office: {COMPANY.address}</p>
            <p>© {year} {COMPANY.name}. All rights reserved.</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
