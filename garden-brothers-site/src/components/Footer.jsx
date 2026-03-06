import React from "react";


export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div>
          <div className="font-bold text-xl mb-2">Contact</div>
          <div>Email: <a href="mailto:gardenbrothersBE@gmail.com">gardenbrothersBE@gmail.com</a></div>
          <div>Telefoon: <span style={{ opacity: 0.7 }}>0123 45 67 89</span></div>
          <div>Adres: <span style={{ opacity: 0.7 }}>Straatnaam 1, 1000 Gemeente</span></div>
          <div>Openingstijden: <span style={{ opacity: 0.7 }}>Ma-Vr 8:00-18:00</span></div>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            TikTok
          </a>
        </div>
      </div>
      <div className="footer-copyright">&copy; {new Date().getFullYear()} Garden Brothers. Alle rechten voorbehouden.</div>
    </footer>
  );
}
