import React from "react";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-overlay" />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-column">
            <h3 className="footer-heading">Onze gegevens</h3>
            <p className="footer-text">
              Yard Brothers is jouw partner voor professioneel tuinonderhoud en
              hogedrukreiniging in Oost-Vlaanderen &amp; Antwerpen.
            </p>
            <ul className="footer-list">
              <li>
                <span className="footer-list-label">Telefoon:</span>
                <span className="footer-list-value">+32 472 69 66 71</span>
              </li>
              <li>
                <span className="footer-list-label">Email:</span>
                <a href="mailto:info@gardenbrothersbe.com" className="footer-link">
                  info@gardenbrothersbe.com
                </a>
              </li>
              <li>
                <span className="footer-list-label">Regio:</span>
                <span className="footer-list-value">Oost-Vlaanderen &amp; Antwerpen</span>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Navigatie</h3>
            <ul className="footer-links-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/diensten" className="footer-link">Diensten</a></li>
              <li><a href="/realisaties" className="footer-link">Realisaties</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/offerte" className="footer-link">Offerte</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Privacy</h3>
            <ul className="footer-links-list">
              <li><a href="/privacybeleid" className="footer-link">Privacybeleid</a></li>
              <li><a href="/cookiebeleid" className="footer-link">Cookiebeleid</a></li>
              <li><a href="/algemene-voorwaarden" className="footer-link">Algemene voorwaarden</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.png" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="/tik tok.png" alt="TikTok" className="footer-social-icon" />
            </a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Yard Brothers. Alle rechten voorbehouden.
          </div>
        </div>
      </div>
    </footer>
  );
}
