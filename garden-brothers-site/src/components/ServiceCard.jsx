import React from "react";

export default function ServiceCard({ title, imgSrc, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6 max-w-xs mx-auto">
      <div className="w-full h-40 bg-secondary-light flex items-center justify-center mb-4 rounded">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="object-cover h-full w-full rounded" />
        ) : (
          <div className="text-secondary-dark text-6xl font-bold opacity-30">IMG</div>
        )}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <div className="text-gray-700 text-base text-center">{children}</div>
    </div>
  );
}
