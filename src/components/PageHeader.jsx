import { useEffect } from 'react'

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Veltrion Cove` : 'Veltrion Cove | Tech accessories and digital services, London'
  }, [title])
}

export default function PageHeader({ title, intro, children }) {
  return (
    <section className="bg-mist border-b border-line">
      <div className="wrap py-14 lg:py-20">
        <h1 className="text-4xl sm:text-5xl font-semibold max-w-3xl">{title}</h1>
        {intro && <p className="lede mt-4">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
