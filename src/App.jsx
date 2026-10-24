import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import GallerySection from "./components/GallerySection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryManager from "./components/GalleryManager";
import { galleries } from "./data/portfolio";
import { useGalleryStorage } from "./hooks/useGalleryStorage";

function Portfolio() {
  const { uploadedPhotos } = useGalleryStorage();
  return <><Navbar/><main><Hero/><About/><Services/><section id="work" className="work-intro section"><div className="container"><p className="eyebrow">THE GALLERIES</p><h2>A selection of work across four visual stories.</h2></div></section>{galleries.map((gallery) => <GallerySection key={gallery.id} gallery={gallery} uploadedPhotos={uploadedPhotos}/>)}<Contact/></main><Footer/></>;
}

export default function App() {
  const [manager, setManager] = useState(window.location.hash === "#manage");
  useEffect(() => { const onHash = () => setManager(window.location.hash === "#manage"); window.addEventListener("hashchange", onHash); return () => window.removeEventListener("hashchange", onHash); }, []);
  return manager ? <GalleryManager/> : <Portfolio/>;
}
