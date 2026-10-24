import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/portfolio";

export default function Services() {
  return <section id="services" className="section services-section">
    <div className="container">
      <div className="section-heading split"><div><p className="eyebrow">WHAT I DO</p><h2>Photography for real moments and meaningful stories.</h2></div><p>From a single portrait to a complete wedding story, each assignment is planned around the people, place and purpose behind it.</p></div>
      <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight size={20}/></article>)}</div>
    </div>
  </section>;
}
