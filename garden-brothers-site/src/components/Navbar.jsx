import React, { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/wie-zijn-wij", label: "Over ons" },
  { href: "/realisaties", label: "Realisaties" },
  { href: "/faq", label: "FAQ" },
  { href: "/offerte", label: "Offerte" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img
            src="/logo.jpeg"
            alt="Yard Brothers logo"
            className="navbar-logo-img"
          />
          <span>YARD BROTHERS</span>
        </div>

        <button
          type="button"
          className={`navbar-toggle${isMenuOpen ? " open" : ""}`}
          aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        <ul className={`navbar-links${isMenuOpen ? " open" : ""}`}>
          {navLinks.map((link) => {
            const isOfferte = link.href === "/offerte";
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link${isOfferte ? " navbar-link-cta" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
