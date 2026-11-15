import PageHeader, { useTitle } from './PageHeader'

export const LAST_UPDATED = '15 November 2026'

export default function LegalPage({ title, intro, children }) {
  useTitle(title)
  return (
    <>
      <PageHeader title={title} intro={intro}>
        <p className="mt-4 text-sm text-ink-faint">Last updated {LAST_UPDATED}</p>
      </PageHeader>
      <div className="wrap py-14 lg:py-20">
        <article className="legal max-w-3xl">{children}</article>
      </div>
    </>
  )
}
