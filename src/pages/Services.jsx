import { useState } from 'react'
import { Check } from 'lucide-react'
import PageHeader, { useTitle } from '../components/PageHeader'
import { img, COMPANY } from '../data/company'

const services = [
  {
    id: 'web', title: 'Website and app development', image: 'dev-desk', from: 1450,
    text: 'Business websites, web apps and mobile apps that load quickly, work on every screen and are easy for your team to update.',
    includes: ['Discovery workshop and sitemap', 'Custom design for desktop and mobile', 'Content management so you can edit pages', 'Accessibility and speed checks before launch', 'Hosting setup, SSL and domain connection', '30 days of post-launch support'],
  },
  {
    id: 'ecommerce', title: 'E-commerce store setup', image: 'code', from: 1950,
    text: 'We set up your online store and marketplace listings so you can take payments, manage stock and ship orders from day one.',
    includes: ['Store build on a platform that suits you', 'Product import, photography guidance and copy', 'Payments, VAT, delivery rates and email receipts', 'Marketplace listing setup and feed sync', 'Order and returns workflow', 'Staff training session'],
  },
  {
    id: 'marketing', title: 'Digital marketing', image: 'team-work', from: 650, unit: 'per month',
    text: 'Search, paid social and email campaigns planned around your margins, with plain-English monthly reports.',
    includes: ['Search engine optimisation audit and fixes', 'Google and social ad campaign management', 'Email newsletters and automated flows', 'Conversion tracking and analytics setup', 'Monthly report and review call', 'No long-term contract, 30 days notice'],
  },
  {
    id: 'consultancy', title: 'IT consultancy', image: 'studio', from: 95, unit: 'per hour',
    text: 'Independent advice for small businesses on systems, software, cyber security and choosing the right tools.',
    includes: ['IT and software health check', 'Cyber Essentials readiness guidance', 'Cloud, email and device setup', 'Supplier and software selection', 'Data protection and backup planning', 'Half-day and day-rate options'],
  },
]

const process = [
  { title: 'Free call', text: 'A 30-minute call to understand your business and what you need.' },
  { title: 'Written proposal', text: 'A fixed scope, timeline and price, sent within three working days.' },
  { title: 'Build and review', text: 'We work in short stages and share progress with you every week.' },
  { title: 'Launch and support', text: 'We launch, train your team and stay on hand for follow-up help.' },
]

export default function Services() {
  useTitle('Services')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: services[0].title, budget: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\n${form.message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Project enquiry: ${form.service}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHeader title="Digital services for small businesses" intro="We sell online every day. We bring that experience to building websites, apps and stores, and to helping small teams market and run them." />

      <div className="wrap py-14 lg:py-20 space-y-20 lg:space-y-28">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-32 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className={`overflow-hidden rounded-[22px] aspect-[4/3] ${i % 2 ? 'lg:order-2' : ''}`}>
              <img src={img(s.image)} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="h-section">{s.title}</h2>
              <p className="mt-4 text-lg text-ink-soft">{s.text}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-2.5 text-[15px]"><Check size={18} className="text-cove shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <p className="rounded-full bg-sand-soft px-4 py-2 font-display font-semibold">
                  From £{s.from.toLocaleString('en-GB')} {s.unit || ''} <span className="font-sans font-normal text-ink-soft text-sm">+ VAT</span>
                </p>
                <a href="#enquire" onClick={() => setForm((f) => ({ ...f, service: s.title }))} className="btn-outline">Enquire about this</a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-mist section">
        <div className="wrap">
          <h2 className="h-section">How a project runs</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="card p-6">
                <span className="font-display text-sm font-semibold text-cove">Step {i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-[15px] text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="h-section">Tell us about your project</h2>
            <p className="lede mt-3">Send a few details and we will arrange a free 30-minute call. Prefer to talk now? Call {COMPANY.phone}.</p>
          </div>
          {sent ? (
            <div className="card p-8 bg-cove-wash border-cove/30" role="status">
              <h3 className="text-2xl font-semibold">Your email is ready to send</h3>
              <p className="mt-2 text-ink-soft">Your email app has opened with your enquiry filled in. Press send and we will reply within one working day. If nothing opened, email us at <a className="text-cove underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
              <button onClick={() => setSent(false)} className="btn-outline mt-6 bg-white">Edit enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
              <div><label className="field-label" htmlFor="s-name">Your name</label><input id="s-name" required className="field" value={form.name} onChange={set('name')} autoComplete="name" /></div>
              <div><label className="field-label" htmlFor="s-email">Email</label><input id="s-email" type="email" required className="field" value={form.email} onChange={set('email')} autoComplete="email" /></div>
              <div><label className="field-label" htmlFor="s-company">Business name</label><input id="s-company" className="field" value={form.company} onChange={set('company')} autoComplete="organization" /></div>
              <div>
                <label className="field-label" htmlFor="s-service">Service</label>
                <select id="s-service" className="field" value={form.service} onChange={set('service')}>
                  {services.map((s) => <option key={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="s-budget">Approximate budget</label>
                <select id="s-budget" className="field" value={form.budget} onChange={set('budget')}>
                  <option value="">Not sure yet</option>
                  <option>Under £2,000</option><option>£2,000 to £5,000</option><option>£5,000 to £10,000</option><option>Over £10,000</option>
                </select>
              </div>
              <div className="sm:col-span-2"><label className="field-label" htmlFor="s-msg">What do you need?</label><textarea id="s-msg" required rows={5} className="field" value={form.message} onChange={set('message')} /></div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button className="btn-primary">Send enquiry</button>
                <p className="text-sm text-ink-faint">We use your details only to reply. See our <a href="/privacy-policy" className="underline">privacy policy</a>.</p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
