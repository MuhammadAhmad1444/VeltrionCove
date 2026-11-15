import { Link } from 'react-router-dom'
import { Truck, RotateCcw, ShieldCheck, Globe2, Code2, ShoppingCart, Megaphone, Server } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useTitle } from '../components/PageHeader'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { img, COMPANY } from '../data/company'

const promises = [
  { icon: Truck, title: 'Dispatched from London', text: 'Orders confirmed by 2pm on a working day leave the same day.' },
  { icon: RotateCcw, title: '30-day returns', text: 'Unused items in original packaging, no questions asked.' },
  { icon: ShieldCheck, title: '12-month warranty', text: 'Every product is covered against manufacturing faults.' },
  { icon: Globe2, title: 'UK and international', text: 'Tracked delivery across the UK, Europe and beyond.' },
]

const steps = [
  { title: 'Add to your basket', text: 'Choose your products and quantities. Prices shown include UK VAT.' },
  { title: 'Send your order', text: 'Enter delivery details at checkout. We check stock and confirm within one working day.' },
  { title: 'Pay securely', text: 'We email you a secure payment link. Your order is dispatched as soon as payment clears.' },
  { title: 'Track it home', text: 'You get a tracking number by email when your parcel leaves our partner warehouse.' },
]

const services = [
  { icon: Code2, title: 'Websites and apps', text: 'Fast, accessible sites and mobile apps built to your brief.', to: '/services#web' },
  { icon: ShoppingCart, title: 'E-commerce setup', text: 'Online stores and marketplace listings, ready to take orders.', to: '/services#ecommerce' },
  { icon: Megaphone, title: 'Digital marketing', text: 'Search, social and email campaigns measured against sales.', to: '/services#marketing' },
  { icon: Server, title: 'IT consultancy', text: 'Practical advice on systems, security and tools for small teams.', to: '/services#consultancy' },
]

export default function Home() {
  useTitle()
  const featured = PRODUCTS.filter((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-mist">
        <div className="wrap py-6 lg:py-8">
          <div className="relative overflow-hidden rounded-[28px] bg-ink text-white">
            <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-cove/30 blur-3xl" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-10 p-7 sm:p-10 lg:p-14 items-center">
              <div className="hero-rise">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/85">
                  <span className="h-2 w-2 rounded-full bg-sand" /> New: Current Pro noise-cancelling earbuds
                </p>
                <h1 className="mt-6 text-white text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-semibold">
                  Good tech for every day, sent from London.
                </h1>
                <p className="mt-5 text-lg text-white/75 max-w-lg">
                  Headphones, earbuds, wearables and desk gear chosen for sound, comfort and build quality. Free UK delivery over £40.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/shop" className="btn-light">Shop all products</Link>
                  <Link to="/services" className="btn-outline-light">Our digital services</Link>
                </div>
                <div className="mt-9 flex flex-wrap gap-2" aria-label="Shop by category">
                  {CATEGORIES.map((c) => (
                    <Link key={c} to={`/shop?category=${encodeURIComponent(c)}`} className="chip bg-white/10 text-white hover:bg-white hover:text-ink">
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-rise-2 relative">
                <div className="overflow-hidden rounded-[22px] ring-1 ring-white/10 aspect-[4/3.6]">
                  <img src={img('hero')} alt="Current Pro true wireless earbuds with charging case" className="h-full w-full object-cover" fetchpriority="high" />
                </div>
                <Link to="/shop/current-pro-earbuds" className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 rounded-2xl bg-white text-ink px-4 py-3 shadow-xl hover:bg-sand-soft">
                  <span className="block text-[13px] text-ink-faint">Current Pro Earbuds</span>
                  <span className="block font-display font-semibold">£69.00 · 28 h battery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="border-b border-line">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {promises.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="h-11 w-11 shrink-0 rounded-xl bg-cove-wash text-cove-deep inline-flex items-center justify-center"><Icon size={20} /></span>
              <div>
                <p className="font-display font-semibold">{title}</p>
                <p className="text-sm text-ink-soft mt-0.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="h-section">Popular right now</h2>
              <p className="lede mt-3">The products our customers reorder and recommend most.</p>
            </div>
            <Link to="/shop" className="btn-outline">See all {PRODUCTS.length} products</Link>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {featured.slice(3, 5).map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* Two sides */}
      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">One company, two ways we help</h2>
          <p className="lede mt-3">We run our own online shop, and we use what we have learned doing it to build and grow online businesses for other people.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card overflow-hidden flex flex-col">
              <img src={img('headphones-studio')} alt="" className="h-60 w-full object-cover" loading="lazy" />
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold">Retail</h3>
                <p className="mt-2 text-ink-soft flex-1">
                  We sell audio, wearables and desk accessories through this website and leading online marketplaces, shipping to customers in the UK and internationally.
                </p>
                <Link to="/shop" className="btn-dark mt-6 self-start">Visit the shop</Link>
              </div>
            </div>
            <div className="card overflow-hidden flex flex-col">
              <img src={img('team-top')} alt="" className="h-60 w-full object-cover" loading="lazy" />
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold">Technology services</h3>
                <p className="mt-2 text-ink-soft flex-1">
                  We build websites and apps, set up online stores, run digital marketing and give IT advice to small businesses that want to sell more online.
                </p>
                <Link to="/services" className="btn-primary mt-6 self-start">Explore services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="h-section">How ordering works</h2>
            <p className="lede mt-3">Four steps from basket to doorstep. If anything is unclear, call or email us and a real person will reply.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={COMPANY.phoneHref} className="btn-outline">{COMPANY.phone}</a>
            </div>
          </div>
          <ol className="grid sm:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand text-ink font-display font-semibold">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-ink-soft text-[15px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marketplaces & shipping */}
      <section className="section bg-cove-deep text-white">
        <div className="wrap grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="h-section text-white">Buy direct or on the marketplaces you already use</h2>
            <p className="mt-4 text-lg text-white/75 max-w-xl">
              Our range is sold here and through established UK and international online marketplaces. Buying direct from veltrioncove.online gets you our full range, our 30-day returns and support from our London team.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              ['UK standard', '£3.95, 2 to 4 working days'],
              ['UK, orders over £40', 'Free delivery'],
              ['Europe', 'From £9.95, 4 to 8 working days'],
              ['Rest of world', 'From £9.95, 6 to 12 working days'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-card bg-white/[0.07] p-5">
                <dt className="text-sm text-white/60">{k}</dt>
                <dd className="mt-1 font-display text-lg font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="h-section">Services for small businesses</h2>
              <p className="lede mt-3">Fixed-scope projects with clear prices, run by people who sell online every day.</p>
            </div>
            <Link to="/services" className="btn-outline">View services and pricing</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text, to }) => (
              <Link key={title} to={to} className="card p-6 hover:border-cove">
                <Icon size={24} className="text-cove" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-[15px] text-ink-soft">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="wrap">
          <div className="rounded-[28px] bg-sand-soft p-8 sm:p-12 lg:p-14 grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Questions about an order or a project?</h2>
              <p className="mt-3 text-lg text-ink-soft">Our team in Fitzrovia replies to every message within one working day.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="btn-dark">Contact us</Link>
              <a href={`mailto:${COMPANY.email}`} className="btn-outline bg-white">{COMPANY.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
