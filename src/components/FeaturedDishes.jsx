import { useInView } from '../hooks/useInView'

const bouquets = [
  {
    image: '/img/f1.jpg',
    hoverImage: '/img/f4.jpg',
    name: 'Wasserfall-Sonnenuntergang',
    desc: 'Rosen und Lilien in warmen Herbsttönen – harmonisch und berührend arrangiert.',
    price: '€ 54,60',
  },
  {
    image: '/img/f2.jpg',
    hoverImage: '/img/6.avif',
    name: 'Zarte Frische',
    desc: 'Rosa und rote Gerbera in einem lebendigen Frühlingsstrauß voller Leichtigkeit.',
    price: '€ 54,60',
  },
  {
    image: '/img/f3.jpg',
    hoverImage: '/img/7.avif',
    name: 'Elegante Harmonie',
    desc: 'Weiße Lilien und Rosen – zeitlos, elegant und für jeden Anlass geeignet.',
    price: '€ 54,60',
  },
  {
    image: '/img/f4.jpg',
    hoverImage: '/img/8.avif',
    name: 'Sommerwind',
    desc: 'Bunte saisonale Mischung, die Leichtigkeit und pure Freude ausstrahlt.',
    price: '€ 54,60',
  },
]

export default function FeaturedDishes() {
  const [ref, inView] = useInView()
  return (
    <section className="featured section-padding" id="nosotros" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="tag">Am beliebtesten</span>
            <h2 className="section-title">Die beliebtesten Geschenke</h2>
            <p className="section-subtitle">
              Pflanzen für ein neues Zuhause. Ein Strauß, um einen grauen Tag zu erhellen.
              Eine Karte ohne besonderen Anlass. Und vieles mehr.
            </p>
          </div>
          <a href="#menu" className="see-all-link">Vollständige Kollektion →</a>
        </div>
        <div className="dishes-grid">
          {bouquets.map((item, i) => (
            <article key={i} className={`dish-card fade-up ${inView ? 'visible' : ''}`}>
              <div className="dish-card__image-wrap">
                <img className="dish-card__image" src={item.image} alt={item.name} />
                <img className="dish-card__image-hover" src={item.hoverImage} alt="" aria-hidden="true" />
              </div>
              <div className="dish-card__body">
                <h3 className="dish-card__name">{item.name}</h3>
                <p className="dish-card__desc">{item.desc}</p>
                <div className="dish-card__footer">
                  <span className="dish-card__price">{item.price}</span>
                  <button className="dish-card__btn">Details →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
