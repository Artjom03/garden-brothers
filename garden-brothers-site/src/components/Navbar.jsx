import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wie-zijn-wij", label: "Wie zijn Wij?" },
  { href: "/diensten", label: "Diensten" },
  { href: "/offerte", label: "Gratis Offerte" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img
            src="/logo.jpeg"
            alt="Garden Brothers logo"
            className="navbar-logo-img"
          />
          <span>GARDEN BROTHERS</span>
        </div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
