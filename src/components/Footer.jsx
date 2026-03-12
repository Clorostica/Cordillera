export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/img/Cordilleralogo.png" alt="Cordillera" />
            <p>
              Frische Blumen direkt vom Züchter. Wir verkürzen die Reisezeit,
              damit du immer die schönsten und frischesten Sträuße erhältst.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#inicio">Startseite</a></li>
              <li><a href="#menu">Blumen</a></li>
              <li><a href="#ofertas">Angebote</a></li>
              <li><a href="#nosotros">Über uns</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Nutzungsbedingungen</a></li>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4>Neuheiten & Angebote</h4>
            <p>Erhalte Infos zu neuen Kollektionen und exklusiven Angeboten direkt in dein Postfach.</p>
            <form
              className="footer__form"
              action="https://formspree.io/f/mknkkrkj"
              method="POST"
            >
              <input
                className="footer__input"
                type="email"
                name="_replyto"
                placeholder="deine@email.de"
                required
              />
              <button type="submit" className="footer__submit">Abonnieren</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Cordillera — Alle Rechte vorbehalten.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👥</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
