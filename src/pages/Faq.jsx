import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import PageHeader, { useTitle } from '../components/PageHeader'
import { COMPANY } from '../data/company'

const groups = [
  {
    title: 'Orders and payment',
    items: [
      ['How do I place an order?', 'Add products to your basket and go to checkout. Enter your delivery details and send your order. We confirm stock and email you a secure payment link within one working day. Your order is dispatched once payment clears.'],
      ['Which payment methods do you accept?', 'Our secure payment link accepts major debit and credit cards, Apple Pay and Google Pay. We never ask for card details by email or phone.'],
      ['Do your prices include VAT?', 'Yes. All prices shown for products include UK VAT at the standard rate. Prices for digital services are shown excluding VAT.'],
      ['Can I change or cancel my order?', `Yes, as long as it has not been dispatched. Email ${COMPANY.email} with your order reference as soon as possible.`],
    ],
  },
  {
    title: 'Delivery',
    items: [
      ['How much is delivery?', 'UK standard delivery is £3.95, or free on orders over £40. International delivery starts from £9.95 and depends on the destination.'],
      ['How long will it take?', 'UK orders arrive in 2 to 4 working days after dispatch. Europe takes 4 to 8 working days and the rest of the world 6 to 12 working days.'],
      ['Do I pay customs charges on international orders?', 'Orders sent outside the UK may be subject to import duties and taxes in the destination country. These are paid by the recipient.'],
    ],
  },
  {
    title: 'Returns and warranty',
    items: [
      ['What is your returns policy?', 'You have 30 days from delivery to return unused items in their original packaging for a full refund. Your statutory right to cancel within 14 days is not affected.'],
      ['What if my product is faulty?', 'Every product has a 12-month warranty against manufacturing faults. Contact us with your order reference and a short description, and we will arrange a repair, replacement or refund.'],
      ['When will I get my refund?', 'We refund to your original payment method within 14 days of receiving your return.'],
    ],
  },
  {
    title: 'Digital services',
    items: [
      ['How are services priced?', 'Each project gets a written proposal with a fixed scope and price before any work starts. Our services page shows starting prices.'],
      ['Do you work with businesses outside London?', 'Yes. We work with small businesses across the UK and internationally, mostly through video calls.'],
    ],
  },
]

export default function Faq() {
  useTitle('Help and FAQs')
  return (
    <>
      <PageHeader title="Help and FAQs" intro="Answers to the questions we are asked most often. Cannot find what you need? Contact our team." />
      <div className="wrap py-14 lg:py-20 grid gap-12 lg:grid-cols-[260px_1fr]">
        <nav aria-label="FAQ sections" className="lg:sticky lg:top-32 self-start">
          <ul className="flex flex-wrap lg:flex-col gap-2">
            {groups.map((g) => (
              <li key={g.title}><a href={`#${g.title.toLowerCase().replace(/\W+/g, '-')}`} className="chip border border-line text-ink-soft hover:border-ink hover:text-ink">{g.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-14 max-w-3xl">
          {groups.map((g) => (
            <section key={g.title} id={g.title.toLowerCase().replace(/\W+/g, '-')} className="scroll-mt-32">
              <h2 className="text-2xl font-semibold mb-4">{g.title}</h2>
              <div className="divide-y divide-line border-y border-line">
                {g.items.map(([q, a]) => (
                  <details key={q} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-[17px]">
                      {q}
                      <ChevronDown size={20} className="shrink-0 text-ink-faint transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="pb-5 text-ink-soft leading-7">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          <div className="rounded-card bg-sand-soft p-7">
            <h2 className="text-xl font-semibold">Still need help?</h2>
            <p className="mt-1 text-ink-soft">Call {COMPANY.phone} or send us a message.</p>
            <Link to="/contact" className="btn-dark mt-5">Contact us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
