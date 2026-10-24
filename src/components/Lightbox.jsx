import React from "react";
import { X } from "lucide-react";

export default function Lightbox({ photo, onClose }) {
  if (!photo) return null;
  return <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}><button className="lightbox-close" onClick={onClose} aria-label="Close"><X/></button><div className="lightbox-inner" onClick={(e) => e.stopPropagation()}><img src={photo.src} alt={photo.title}/><div><h3>{photo.title}</h3><p>{photo.description}</p></div></div></div>;
}
