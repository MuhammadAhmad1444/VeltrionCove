import { Link } from 'react-router-dom'
import PageHeader, { useTitle } from '../components/PageHeader'
import { img, COMPANY } from '../data/company'

const values = [
  { title: 'Fewer, better products', text: 'We test every product for sound, comfort, battery life and build before it goes on sale, and we drop anything that disappoints.' },
  { title: 'Straight answers', text: 'Clear prices including VAT, honest delivery times and a returns policy written in plain English.' },
  { title: 'Help from real people', text: 'Messages are answered by our own team in London, not a script. We aim to reply within one working day.' },
  { title: 'Built to be used', text: 'The websites and stores we build for clients are designed around how their customers buy, not around features.' },
]

export default function About() {
  useTitle('About us')
  return (
    <>
      <PageHeader title="About Veltrion Cove" intro="We are a London e-commerce and technology company. We sell tech accessories online, and we help small businesses build and grow their own online sales." />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="overflow-hidden rounded-[22px] aspect-[4/3]">
            <img src={img('team-work')} alt="The Veltrion Cove team working together" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-4 text-lg text-ink-soft leading-relaxed">
            <h2 className="h-section text-ink">What we do</h2>
            <p>
              Veltrion Cove sells headphones, earbuds, wearables and desk accessories to customers across the UK and internationally, through this website and through leading online marketplaces.
            </p>
            <p>
              Running our own shop taught us what makes an online business work: fast pages, accurate listings, clear delivery and returns, and marketing that pays for itself. We now offer that experience as a service, building websites, apps and online stores, running digital marketing and giving IT advice to small businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="h-section">How we work</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="overflow-hidden rounded-[22px] aspect-[16/10] order-2 lg:order-1">
            <img src={img('london')} alt="London skyline" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="h-section">Company details</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
              {[
                ['Registered name', COMPANY.name],
                ['Registered in', 'England and Wales'],
                ...(COMPANY.number ? [['Company number', COMPANY.number]] : []),
                ['Office', COMPANY.address],
                ['Telephone', COMPANY.phone],
                ['Email', COMPANY.email],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                  <dt className="text-ink-faint">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/contact" className="btn-dark mt-7">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
