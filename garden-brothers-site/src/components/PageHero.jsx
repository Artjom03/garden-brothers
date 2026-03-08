import React from "react";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero-section">
      <div className="container page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
