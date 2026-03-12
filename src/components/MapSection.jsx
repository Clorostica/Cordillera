export default function MapSection() {
  return (
    <section className="map-section" id="contacto">
      <div className="container">
        <span className="tag">Uns finden</span>
        <h2 className="section-title">Wo sind wir?</h2>
        <p className="section-subtitle">
          Besuche uns in unserem Berliner Laden oder bestelle bequem online mit Lieferung nach Hause.
        </p>
      </div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.904640571039!2d13.413117876751054!3d52.52524993584073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1ea617f66d%3A0xe55bf04f7ba71229!2sWadzeckstra%C3%9Fe%204%2C%2010178%20Berlin!5e0!3m2!1sde!2sde!4v1733860311555!5m2!1sde!2sde"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Cordillera"
        />
      </div>
    </section>
  )
}
