import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: '🌸',
    title: 'Extrafrische Blumen',
    desc: 'Direkt vom Züchter zu dir – ohne unnötige Zwischenstationen. Maximale Blütenfrische garantiert.',
  },
  {
    icon: '♻️',
    title: '30% weniger Abfall',
    desc: 'Durch unser nachhaltiges Direktmodell reduzieren wir Blumenverschwendung erheblich.',
  },
  {
    icon: '⚡',
    title: 'Schneller Versand',
    desc: 'Bestellungen bis 12 Uhr werden noch am selben Tag geliefert – pünktlich und frisch.',
  },
  {
    icon: '🤝',
    title: 'Faire Preise für Züchter',
    desc: 'Wir zahlen faire Preise und unterstützen lokale Blumenzüchter direkt und transparent.',
  },
]

export default function Features() {
  const [ref, inView] = useInView()
  return (
    <section className="features section-padding" ref={ref}>
      <div className="container">
        <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', color: 'var(--primary-light)' }}>
          Unser Versprechen
        </span>
        <h2 className="section-title">Warum Cordillera?</h2>
        <p className="section-subtitle">
          Wir verkürzen die Reisezeit der Blumen von 15 auf 5 Tage – für maximale Frische auf deinem Tisch.
        </p>
        <div className="features__grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card fade-up ${inView ? 'visible' : ''}`}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
