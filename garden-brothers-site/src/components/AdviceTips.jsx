import React from "react";
import AdviceCard from "./AdviceCard";

export default function AdviceTips() {
  return (
    <section className="advice-section">
      <h2 className="advice-title">Advies & Tips</h2>
      <div className="advice-cards">
        <AdviceCard img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" title="Deskundig bomen snoeien: tips, voorwaarden en technieken" />
        <AdviceCard img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" title="Tuin met hoge waterstand: slimme plantenkeuze" />
        <AdviceCard img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" title="Onderhoudsvriendelijke tuin inrichten" />
      </div>
    </section>
  );
}
