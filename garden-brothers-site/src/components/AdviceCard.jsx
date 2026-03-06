import React from "react";

export default function AdviceCard({ img, title, children }) {
  return (
    <div className="advice-card">
      <img src={img} alt={title} className="advice-card-img" />
      <div className="advice-card-label">
        <div className="advice-card-title">{title}</div>
        {children && <div className="advice-card-desc">{children}</div>}
      </div>
    </div>
  );
}
