import React from "react";

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://youtube.com", label: "YouTube" },
];

const navLinks = [
  { href: "#about", label: "Wie zijn Wij?" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Diensten" },
  { href: "#quote", label: "Gratis Offerte" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo">GARDEN BROTHERS</div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="navbar-socials">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="navbar-social-link"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
