import { useInView } from '../hooks/useInView'

const offers = [
  {
    image: '/img/f1.jpg',
    badge: '-30% RABATT',
    name: 'Liebesversprechen',
    desc: 'Anastasien und Astern in verführerischem Bordeaux',
    price: '€ 45,90',
    rating: '★★★★★',
  },
  {
    image: '/img/f2.jpg',
    badge: '-20% RABATT',
    name: 'Aurora-Glanz',
    desc: 'Rosen und Alstromerien in zarten Pastelltönen',
    price: '€ 62,50',
    rating: '★★★★★',
  },
  {
    image: '/img/f3.jpg',
    badge: '-20% RABATT',
    name: 'Kürbiszauber',
    desc: 'Elegante Schönheit in warmen Herbstfarben',
    price: '€ 55,20',
    rating: '★★★★★',
  },
  {
    image: '/img/f4.jpg',
    badge: '-20% RABATT',
    name: 'Warme Brise',
    desc: 'Rosen und Alstromerien – warm und sinnlich',
    price: '€ 62,50',
    rating: '★★★★★',
  },
]

export default function SpecialOffers() {
  const [ref, inView] = useInView()
  return (
    <section className="offers section-padding" id="ofertas" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="tag">Sonderangebote</span>
            <h2 className="section-title">Exklusive Pakete</h2>
            <p className="section-subtitle">
              Blumenpakete mit besonderen Rabatten – perfekt zum Verschenken und Genießen.
            </p>
          </div>
          <a href="#ofertas" className="see-all-link">Alle Angebote ansehen →</a>
        </div>
        <div className="offers-grid">
          {offers.map((offer, i) => (
            <article key={i} className={`offer-card fade-up ${inView ? 'visible' : ''}`}>
              <div className="offer-card__image-wrap">
                <img className="offer-card__image" src={offer.image} alt={offer.name} />
                <span className="offer-card__badge">{offer.badge}</span>
              </div>
              <div className="offer-card__body">
                <h3 className="offer-card__name">{offer.name}</h3>
                <p className="offer-card__desc">{offer.desc}</p>
                <div className="offer-card__footer">
                  <span className="offer-card__price">{offer.price}</span>
                  <span className="offer-card__rating">{offer.rating}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
