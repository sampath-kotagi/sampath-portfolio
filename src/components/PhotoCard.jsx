import React from "react";
export default function PhotoCard({ photo, onOpen }) {
  return <article className="photo-card" onClick={() => onOpen(photo)}><div className="photo-frame"><img src={photo.src} alt={photo.title}/><span className="view-photo">View</span></div><div className="photo-copy"><h3>{photo.title}</h3><p>{photo.description}</p></div></article>;
}
