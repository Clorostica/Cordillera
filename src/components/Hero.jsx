export default function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* Left: dark panel with content */}
      <div className="hero__panel">
        <div className="hero__content">
          <div className="hero__tag">
            🌸 Frische Blumen direkt vom Züchter
          </div>
          <h1 className="hero__title">
            Blumen, die<br /><em>Herzen</em> berühren
          </h1>
          <p className="hero__paragraph">
            Wir verkürzen die Reisezeit der Blumen von 15 auf 5 Tage –
            für maximale Frische, weniger Abfall und strahlende Farben auf deinem Tisch.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn-primary">
              🌹 Katalog ansehen
            </a>
            <a href="#nosotros" className="btn-outline">
              Unsere Geschichte →
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong className="hero__stat-number">+2.500</strong>
              <span className="hero__stat-label">Sträuße geliefert</span>
            </div>
            <div>
              <strong className="hero__stat-number">98%</strong>
              <span className="hero__stat-label">Zufriedenheit</span>
            </div>
            <div>
              <strong className="hero__stat-number">&lt;24 Std</strong>
              <span className="hero__stat-label">Lieferzeit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: clean photo, no overlay */}
      <div className="hero__photo">
        <img
          className="hero__photo-img"
          src="/img/2.jpg"
          alt="Frische Blumen von Cordillera"
        />
        <div className="hero__badge">
          <div className="hero__badge-icon">🌸</div>
          <div className="hero__badge-text">
            <strong>Neue Kollektion</strong>
            <span>Frühling 2025</span>
          </div>
        </div>
      </div>

    </section>
  )
}
