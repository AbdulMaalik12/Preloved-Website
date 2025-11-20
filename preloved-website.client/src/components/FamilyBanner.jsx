import { useMemo } from 'react'

export default function FamilyBanner() {
  const img = useMemo(() => (
    import.meta.env.VITE_BG_FAMILY || 'https://images.unsplash.com/photo-1521120098171-0a02172f8639?q=80&w=1920&auto=format&fit=crop'
  ), [])
  return (
    <section className="family-banner" aria-label="Family showcase">
      <div className="family-bg" style={{ backgroundImage: `url(${img})` }} />
      <div className="family-content">
        <h2>Styles for every family</h2>
        <p>Discover new and preloved looks that feel uniquely yours.</p>
      </div>
    </section>
  )
}