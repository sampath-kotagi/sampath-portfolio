import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import PhotoCard from "./PhotoCard";
import Lightbox from "./Lightbox";

export default function GallerySection({ gallery, uploadedPhotos = [] }) {
  const [selected, setSelected] = useState(null);
  const local = uploadedPhotos.filter((p) => p.category === gallery.id).map((p) => ({ ...p, src: URL.createObjectURL(p.blob) }));
  const photos = [...local, ...gallery.photos];
  return <section id={gallery.id} className="gallery-section section"><div className="container">
    <div className="gallery-heading"><div className="gallery-number">{gallery.number}</div><div><p className="eyebrow">SELECTED WORK</p><h2>{gallery.title}</h2></div><p>{gallery.description}</p></div>
    <div className="photo-grid">{photos.map((photo) => <PhotoCard key={photo.id} photo={photo} onOpen={setSelected}/>)}</div>
    <div className="gallery-footer"><span>{photos.length} {photos.length === 1 ? "photograph" : "photographs"} shown</span><a href={gallery.driveLink} target="_blank" rel="noreferrer">View more samples in Drive <ArrowUpRight size={16}/></a></div>
  </div><Lightbox photo={selected} onClose={() => setSelected(null)}/></section>;
}
