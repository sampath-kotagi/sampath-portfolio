import React from "react";
import { ArrowUpRight, Mail, Phone, ExternalLink } from "lucide-react";
import { photographer } from "../data/portfolio";

export default function Contact() {
  const items = [
    { label: "Google Drive", value: "View full portfolio", href: photographer.driveLink, icon: <ExternalLink/> },
    { label: "Phone", value: photographer.phone, href: `tel:${photographer.phone.replace(/\s/g, "")}`, icon: <Phone/> },
    { label: "Email", value: photographer.email, href: `mailto:${photographer.email}`, icon: <Mail/> },
    { label: "LinkedIn", value: "Professional profile", href: photographer.linkedin, icon: <ArrowUpRight/> },
  ];
  return <section id="contact" className="contact-section section"><div className="container"><div className="contact-top"><p className="eyebrow">CONTACT</p><h2>Have a story worth photographing?</h2><p>Tell me about your project, event or idea. I will get back to you with availability and the next steps.</p></div><div className="contact-list">{items.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span className="contact-icon">{item.icon}</span><span><small>{item.label}</small><strong>{item.value}</strong></span><ArrowUpRight className="contact-arrow"/></a>)}</div></div></section>;
}
