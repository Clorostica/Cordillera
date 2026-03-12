import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const slides = [
  {
    tag: 'Bestseller',
    title: 'Rosen',
    desc: 'Die Königinnen der Blumen. Ideal, um Liebe, Dankbarkeit oder Bewunderung auszudrücken – in über 20 Sorten verfügbar.',
    img: '/img/slider1.jpg',
  },
  {
    tag: 'Beliebt',
    title: 'Bunte Sträuße',
    desc: 'Farbenfrohe Blumensträuße, die Freude und Farbe in jeden Moment bringen. Täglich frisch von Hand arrangiert.',
    img: '/img/slider2.jpg',
  },
  {
    tag: 'Exklusiv',
    title: 'Blumenarrangements',
    desc: 'Stilvolle Kombinationen aus Blumen und Grünpflanzen, die jeden Raum verschönern und jeden Anlass veredeln.',
    img: '/img/slider3.jpeg',
  },
]

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section className="creative-slider" id="menu">
      <div className="container">
        <Swiper
          className="creative-swiper"
          modules={[Autoplay]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          onSwiper={(s) => { swiperRef.current = s }}
          onRealIndexChange={(s) => setActiveIndex(s.realIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="creative-slide">

                {/* Left: text content */}
                <div className="creative-slide__panel">
                  <div className="creative-slide__accent-line" />
                  <span className="creative-slide__tag">{slide.tag}</span>
                  <h2 className="creative-slide__title">{slide.title}</h2>
                  <p className="creative-slide__desc">{slide.desc}</p>
                  <div className="creative-slide__btns">
                    <button className="btn-primary">Jetzt kaufen</button>
                    <button className="btn-outline">Zum Katalog →</button>
                  </div>
                  <span className="creative-slide__deco-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Right: contained photo */}
                <div className="creative-slide__img-frame">
                  <img src={slide.img} alt={slide.title} />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="creative-nav">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`creative-nav__dot ${activeIndex === i ? 'active' : ''}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              aria-label={`Folie ${i + 1}`}
            />
          ))}
          <div className="creative-nav__arrows">
            <button
              className="creative-nav__arrow"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Zurück"
            >‹</button>
            <button
              className="creative-nav__arrow"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Weiter"
            >›</button>
          </div>
        </div>
      </div>
    </section>
  )
}
