import React from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { photographer } from "../data/portfolio";

export default function Hero() {
  return <section id="home" className="hero section">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">{photographer.eyebrow}</p>
        <h1>{photographer.title}</h1>
        <p className="hero-text">{photographer.intro}</p>
        <div className="hero-actions"><a className="button dark" href="#work">Explore the work <ArrowUpRight size={16}/></a><a className="inline-link" href="#contact">Book a shoot <ArrowUpRight size={15}/></a></div>
        <div className="hero-meta"><span><MapPin size={15}/> {photographer.location}</span><span className="dot"/> <span>Available for selected assignments</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-image"><img src={photographer.profileImage} alt={`${photographer.name} portrait`}/></div>
        <div className="hero-stamp">EST.<br/><strong>2026</strong><br/>VISUAL STORIES</div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={16}/></a>
      </div>
    </div>
  </section>;
}
