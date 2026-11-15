import { Link } from 'react-router-dom'

export function Mark({ className = 'h-9 w-9', dark = false }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={dark ? '#FFFFFF' : '#0C2B33'} />
      <path d="M14 18 L28 46 L42 18" fill="none" stroke={dark ? '#0C2B33' : '#FFFFFF'} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 26 A10 10 0 1 0 50 40" fill="none" stroke="#2BB3BD" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label="Veltrion Cove home">
      <Mark dark={light} />
      <span className={`font-display text-[19px] font-semibold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Veltrion<span className={light ? 'text-cove-light' : 'text-cove'}> Cove</span>
      </span>
    </Link>
  )
}
