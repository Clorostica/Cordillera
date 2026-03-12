import { useInView } from '../hooks/useInView'

const stats = [
  { number: '+80', label: 'Blumensorten' },
  { number: '5 Tage', label: 'Reisezeit vom Züchter' },
  { number: '30%', label: 'Weniger Abfall' },
  { number: 'Berlin', label: 'Direkt geliefert' },
]

export default function StatsBar() {
  const [ref, inView] = useInView()
  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className={`stats__item fade-up ${inView ? 'visible' : ''}`}>
              <span className="stats__number">{s.number}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
