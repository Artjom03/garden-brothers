import React from "react";

export default function ServiceCard({ title, imgSrc, children }) {
  return (
    <div className="service-card">
      <div className="service-card-img">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="service-card-img" />
        ) : (
          <div className="service-card-img-placeholder">IMG</div>
        )}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <div className="service-card-desc">{children}</div>
    </div>
  );
}
