import React from "react";
import { Quote } from "lucide-react";
import { photographer } from "../data/portfolio";

export default function About() {
  return <section id="about" className="section about-section"><div className="container about-grid"><div><p className="eyebrow">ABOUT THE PHOTOGRAPHER</p><h2>Quiet observation. Strong composition. Honest photographs.</h2></div><div className="about-copy"><Quote size={28}/><p>{photographer.about}</p><p>Every gallery is curated to show both the finished image and the story behind the work.</p></div></div></section>;
}
