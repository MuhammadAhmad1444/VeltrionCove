import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import PageHeader, { useTitle } from '../components/PageHeader'
import { formatGBP, shippingFor } from '../data/products'
import { COMPANY } from '../data/company'

const makeRef = () => {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  return `VC-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

const steps = ['Basket', 'Delivery details', 'Payment link by email']

export default function Checkout() {
  useTitle('Checkout')
  const { lines, subtotal, clear } = useCart()
  const [region, setRegion] = useState('uk')
  const [done, setDone] = useState(null)
  const [f, setF] = useState({ first: '', last: '', email: '', phone: '', line1: '', line2: '', city: '', postcode: '', country: 'United Kingdom', notes: '', terms: false })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  const shipping = shippingFor(subtotal, region)
  const total = subtotal + shipping

  const submit = (e) => {
    e.preventDefault()
    const ref = makeRef()
    const items = lines.map((l) => `- ${l.qty} x ${l.product.name} (${l.product.sku}) @ ${formatGBP(l.product.price)} = ${formatGBP(l.product.price * l.qty)}`).join('\n')
    const body = [
      `Order reference: ${ref}`, '', 'Items:', items, '',
      `Subtotal: ${formatGBP(subtotal)}`, `Delivery (${region === 'uk' ? 'UK' : 'International'}): ${shipping === 0 ? 'Free' : formatGBP(shipping)}`, `Total (incl. VAT): ${formatGBP(total)}`, '',
      'Deliver to:', `${f.first} ${f.last}`, f.line1, f.line2, `${f.city} ${f.postcode}`, f.country, '',
      `Email: ${f.email}`, `Phone: ${f.phone}`, f.notes ? `Notes: ${f.notes}` : '',
    ].filter((x) => x !== undefined).join('\n')
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Order request ${ref}`)}&body=${encodeURIComponent(body)}`
    setDone({ ref, email: f.email, total })
    clear()
  }

  if (done) {
    return (
      <div className="wrap py-16 lg:py-24 max-w-2xl">
        <CheckCircle2 size={44} className="text-cove" />
        <h1 className="mt-5 text-4xl font-semibold">Thank you, your order request is ready</h1>
        <p className="mt-3 text-lg text-ink-soft">Your order reference is <strong className="text-ink font-display">{done.ref}</strong>.</p>
        <div className="card p-6 mt-8 space-y-3 text-[15px] text-ink-soft">
          <p><strong className="text-ink">What happens next.</strong> Your email app has opened with your order details. Press send so the order reaches us.</p>
          <p>We check stock and email a secure payment link for {formatGBP(done.total)} to {done.email} within one working day. Your order is dispatched as soon as payment clears.</p>
          <p>If your email app did not open, email <a className="text-cove underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> quoting {done.ref}, or call {COMPANY.phone}.</p>
        </div>
        <Link to="/shop" className="btn-primary mt-8">Continue shopping</Link>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <>
        <PageHeader title="Checkout" />
        <div className="wrap py-16 text-center">
          <p className="font-display text-2xl font-semibold">Your basket is empty</p>
          <Link to="/shop" className="btn-primary mt-6">Browse the shop</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader title="Checkout">
        <ol className="mt-6 flex flex-wrap gap-2 text-sm" aria-label="Checkout progress">
          {steps.map((s, i) => (
            <li key={s} className={`chip ${i === 1 ? 'bg-ink text-white' : 'bg-white border border-line text-ink-soft'}`}>{i + 1}. {s}</li>
          ))}
        </ol>
      </PageHeader>
      <form onSubmit={submit} className="wrap py-12 lg:py-16 grid gap-10 lg:grid-cols-[1.5fr_1fr] items-start">
        <div className="space-y-8">
          <fieldset className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Contact details</legend>
            <h2 className="sm:col-span-2 text-xl font-semibold">Contact details</h2>
            <div><label className="field-label" htmlFor="first">First name</label><input id="first" required className="field" value={f.first} onChange={set('first')} autoComplete="given-name" /></div>
            <div><label className="field-label" htmlFor="last">Last name</label><input id="last" required className="field" value={f.last} onChange={set('last')} autoComplete="family-name" /></div>
            <div><label className="field-label" htmlFor="email">Email</label><input id="email" type="email" required className="field" value={f.email} onChange={set('email')} autoComplete="email" /></div>
            <div><label className="field-label" htmlFor="phone">Phone</label><input id="phone" type="tel" required className="field" value={f.phone} onChange={set('phone')} autoComplete="tel" /></div>
          </fieldset>

          <fieldset className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Delivery address</legend>
            <h2 className="sm:col-span-2 text-xl font-semibold">Delivery address</h2>
            <div className="sm:col-span-2 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Delivery region">
              {[['uk', 'United Kingdom', shippingFor(subtotal, 'uk') === 0 ? 'Free' : formatGBP(shippingFor(subtotal, 'uk'))], ['international', 'International', `From ${formatGBP(shippingFor(subtotal, 'international'))}`]].map(([v, label, price]) => (
                <label key={v} className={`cursor-pointer rounded-xl border p-4 ${region === v ? 'border-cove bg-cove-wash' : 'border-line'}`}>
                  <input type="radio" name="region" value={v} checked={region === v} onChange={() => { setRegion(v); setF((x) => ({ ...x, country: v === 'uk' ? 'United Kingdom' : '' })) }} className="sr-only" />
                  <span className="block font-medium">{label}</span>
                  <span className="block text-sm text-ink-soft">{price}</span>
                </label>
              ))}
            </div>
            <div className="sm:col-span-2"><label className="field-label" htmlFor="line1">Address line 1</label><input id="line1" required className="field" value={f.line1} onChange={set('line1')} autoComplete="address-line1" /></div>
            <div className="sm:col-span-2"><label className="field-label" htmlFor="line2">Address line 2 (optional)</label><input id="line2" className="field" value={f.line2} onChange={set('line2')} autoComplete="address-line2" /></div>
            <div><label className="field-label" htmlFor="city">Town or city</label><input id="city" required className="field" value={f.city} onChange={set('city')} autoComplete="address-level2" /></div>
            <div><label className="field-label" htmlFor="postcode">Postcode</label><input id="postcode" required className="field" value={f.postcode} onChange={set('postcode')} autoComplete="postal-code" /></div>
            <div className="sm:col-span-2"><label className="field-label" htmlFor="country">Country</label><input id="country" required readOnly={region === 'uk'} className="field read-only:bg-mist" value={f.country} onChange={set('country')} autoComplete="country-name" /></div>
            <div className="sm:col-span-2"><label className="field-label" htmlFor="notes">Delivery notes (optional)</label><textarea id="notes" rows={3} className="field" value={f.notes} onChange={set('notes')} /></div>
          </fieldset>
        </div>

        <aside className="card p-6 sm:p-7 lg:sticky lg:top-32">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <ul className="mt-5 space-y-4">
            {lines.map(({ slug, qty, product }) => (
              <li key={slug} className="flex gap-3 items-center">
                <img src={product.image} alt="" className="h-14 w-14 rounded-xl object-cover bg-mist" />
                <div className="flex-1 min-w-0 text-[15px]"><p className="font-medium truncate">{product.name}</p><p className="text-ink-faint text-sm">Qty {qty}</p></div>
                <span className="font-semibold text-[15px]">{formatGBP(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2.5 border-t border-line pt-4 text-[15px]">
            <div className="flex justify-between"><dt className="text-ink-soft">Subtotal</dt><dd>{formatGBP(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-ink-soft">Delivery</dt><dd>{shipping === 0 ? 'Free' : formatGBP(shipping)}</dd></div>
            <div className="flex justify-between border-t border-line pt-3 text-lg font-semibold"><dt>Total</dt><dd>{formatGBP(total)}</dd></div>
          </dl>
          <p className="text-sm text-ink-faint mt-1">Includes VAT.</p>

          <div className="mt-6 rounded-xl bg-mist p-4 flex gap-3 text-sm text-ink-soft">
            <Lock size={18} className="text-cove shrink-0 mt-0.5" />
            <p>No payment is taken on this page. We email a secure payment link to confirm your order once we have checked stock.</p>
          </div>

          <label className="mt-5 flex gap-3 text-sm text-ink-soft">
            <input type="checkbox" required checked={f.terms} onChange={set('terms')} className="mt-1 h-4 w-4 accent-[#0E7C86]" />
            <span>I agree to the <Link to="/terms-of-service" className="text-cove underline">terms of service</Link> and have read the <Link to="/refund-policy" className="text-cove underline">refund policy</Link> and <Link to="/privacy-policy" className="text-cove underline">privacy policy</Link>.</span>
          </label>
          <button className="btn-primary w-full mt-6">Send order request</button>
        </aside>
      </form>
    </>
  )
}
