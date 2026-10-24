import React from "react";
import { photographer } from "../data/portfolio";
export default function Footer() { return <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} {photographer.name}</span><span>Photography Portfolio</span><a href="#home">Back to top ↑</a></div></footer>; }
