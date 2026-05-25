import React, { useEffect } from "react";

const ELFSIGHT_SCRIPT_SRC = "https://static.elfsight.com/platform/platform.js";
const DEFAULT_WIDGET_ID = "d4ee3a73-3211-4d58-8d00-b25ba382e460";

function resolveWidgetId(rawValue) {
  if (!rawValue || typeof rawValue !== "string") return "";
  const value = rawValue.trim();

  if (!value) return "";

  const classMatch = value.match(/elfsight-app-([a-z0-9-]+)/i);
  if (classMatch?.[1]) return classMatch[1];

  const divMatch = value.match(/app-([a-z0-9-]+)/i);
  if (divMatch?.[1]) return divMatch[1];

  return value;
}

export default function GoogleReviews() {
  const widgetId =
    resolveWidgetId(import.meta.env.VITE_ELFSIGHT_GOOGLE_REVIEWS_ID) || DEFAULT_WIDGET_ID;

  useEffect(() => {
    if (!widgetId) return;

    const existing = document.querySelector(`script[src=\"${ELFSIGHT_SCRIPT_SRC}\"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [widgetId]);

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="container">
        <div className="google-reviews-header">
          <p className="google-reviews-kicker">Wat onze klanten zeggen</p>
          <h2 id="google-reviews-title" className="google-reviews-title">
            Beoordeeld als uitstekend door onze klanten
          </h2>
        </div>
        {widgetId ? (
          <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
        ) : (
          <p className="google-reviews-fallback">
            Google reviews worden binnenkort geladen.
          </p>
        )}
      </div>
    </section>
  );
}
