import React from "react";
import { ArrowUpRight, Camera, Menu, X } from "lucide-react";
import { useState } from "react";
import { photographer } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["About", "about"], ["Services", "services"], ["Work", "work"], ["Contact", "contact"]];
  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-icon"><Camera size={17}/></span><h1>{photographer.shortName}</h1></a>
        <div className="desktop-nav">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        <a className="nav-button" href="#contact">Book a shoot <ArrowUpRight size={15}/></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="mobile-nav">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Book a shoot</a></div>}
    </header>
  );
}
