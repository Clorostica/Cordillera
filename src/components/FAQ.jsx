import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const questions = [
  {
    q: 'Wie kann ich bestellen?',
    a: 'Du kannst direkt auf unserer Website bestellen oder uns telefonisch kontaktieren. Wähle deine Lieblingsblumen und folge den Bestellschritten im Warenkorb. Wir bestätigen innerhalb von 5 Minuten.',
  },
  {
    q: 'Wie funktioniert die Rückgabe?',
    a: 'Wenn du mit deiner Bestellung nicht 100% zufrieden bist, kontaktiere uns innerhalb von 24 Stunden nach dem Empfang. Wir ersetzen den Strauß oder erstatten den Betrag – ohne Fragen.',
  },
  {
    q: 'Wie viel kostet die Lieferung?',
    a: 'Die Lieferkosten variieren je nach Region. Ab einem Bestellwert von €50 ist die Lieferung innerhalb unseres Einzugsgebiets völlig kostenlos.',
  },
  {
    q: 'Wann erhalte ich meine Blumen?',
    a: 'Bestellungen bis 12 Uhr werden in der Regel noch am selben Tag geliefert. Für besondere Anlässe empfehlen wir, mindestens 48 Stunden im Voraus zu bestellen.',
  },
  {
    q: 'Sind die Blumen garantiert frisch?',
    a: 'Absolut. Wir verkürzen die Reisezeit der Blumen von 15 auf 5 Tage und arbeiten direkt mit Züchtern zusammen – maximale Frische ist unser Versprechen.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section className="faq section-padding" ref={ref}>
      <div className="container">
        <div className="faq__grid">
          <div className={`faq__left fade-up ${inView ? 'visible' : ''}`}>
            <span className="tag">Häufige Fragen</span>
            <h2 className="section-title">Haben Sie Fragen?</h2>
            <p>
              Hier findest du Antworten auf die häufigsten Fragen unserer Kunden.
              Bei weiteren Fragen stehen wir dir gerne zur Verfügung.
            </p>
            <button className="faq__contact-btn">
              💬 Schreib uns
            </button>
          </div>
          <div className="faq__items">
            {questions.map((item, i) => (
              <div
                key={i}
                className={`faq__item fade-up ${inView ? 'visible' : ''} ${open === i ? 'open' : ''}`}
              >
                <div className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                  <h3>{item.q}</h3>
                  <span className="faq__icon">{open === i ? '×' : '+'}</span>
                </div>
                <div className="faq__answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
