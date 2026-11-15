import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHeader, { useTitle } from '../components/PageHeader'
import { COMPANY } from '../data/company'

const topics = ['An order I have placed', 'A product question', 'Returns and refunds', 'Digital services enquiry', 'Something else']

export default function Contact() {
  useTitle('Contact us')
  const [form, setForm] = useState({ name: '', email: '', order: '', topic: topics[0], message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\nOrder reference: ${form.order || 'n/a'}\nTopic: ${form.topic}\n\n${form.message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Website message: ${form.topic}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const details = [
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Phone, label: 'Telephone', value: COMPANY.phone, href: COMPANY.phoneHref },
    { icon: MapPin, label: 'Office', value: COMPANY.address },
    { icon: Clock, label: 'Opening hours', value: COMPANY.hours },
  ]

  return (
    <>
      <PageHeader title="Contact us" intro="Questions about an order, a product or a project? Send us a message and our London team will reply within one working day." />
      <section className="wrap py-14 lg:py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <ul className="space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="card p-5 flex gap-4">
                <span className="h-11 w-11 shrink-0 rounded-xl bg-cove-wash text-cove-deep inline-flex items-center justify-center"><Icon size={20} /></span>
                <div>
                  <p className="text-sm text-ink-faint">{label}</p>
                  {href ? <a href={href} className="font-medium hover:text-cove break-all">{value}</a> : <p className="font-medium">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-ink-soft">
            Looking for delivery times or how to return something? Our <Link to="/faq" className="text-cove underline">help page</Link> answers the most common questions.
          </p>
        </div>

        {sent ? (
          <div className="card p-8 bg-cove-wash border-cove/30 self-start" role="status">
            <h2 className="text-2xl font-semibold">Your message is ready to send</h2>
            <p className="mt-2 text-ink-soft">Your email app has opened with your message filled in. Press send and we will reply within one working day. If nothing opened, email <a className="text-cove underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> directly.</p>
            <button onClick={() => setSent(false)} className="btn-outline mt-6 bg-white">Edit message</button>
          </div>
        ) : (
          <form onSubmit={submit} className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2 self-start">
            <h2 className="sm:col-span-2 text-2xl font-semibold">Send a message</h2>
            <div><label className="field-label" htmlFor="c-name">Your name</label><input id="c-name" required className="field" value={form.name} onChange={set('name')} autoComplete="name" /></div>
            <div><label className="field-label" htmlFor="c-email">Email</label><input id="c-email" type="email" required className="field" value={form.email} onChange={set('email')} autoComplete="email" /></div>
            <div>
              <label className="field-label" htmlFor="c-topic">What is it about?</label>
              <select id="c-topic" className="field" value={form.topic} onChange={set('topic')}>{topics.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
            <div><label className="field-label" htmlFor="c-order">Order reference (optional)</label><input id="c-order" className="field" placeholder="VC-" value={form.order} onChange={set('order')} /></div>
            <div className="sm:col-span-2"><label className="field-label" htmlFor="c-msg">Message</label><textarea id="c-msg" required rows={6} className="field" value={form.message} onChange={set('message')} /></div>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button className="btn-primary">Send message</button>
              <p className="text-sm text-ink-faint">We use your details only to reply. <Link to="/privacy-policy" className="underline">Privacy policy</Link></p>
            </div>
          </form>
        )}
      </section>
    </>
  )
}
