import React from "react";
import { ArrowLeft, Camera, ImagePlus, Trash2, Upload } from "lucide-react";
import { useMemo, useState } from "react";
import { galleries } from "../data/portfolio";
import { objectUrlForPhoto, useGalleryStorage } from "../hooks/useGalleryStorage";

export default function GalleryManager() {
  const [category, setCategory] = useState("street");
  const [message, setMessage] = useState("");
  const { uploadedPhotos, addFiles, removePhoto } = useGalleryStorage();
  const selected = useMemo(() => uploadedPhotos.filter((p) => p.category === category), [uploadedPhotos, category]);

  const handleFiles = async (e) => {
    const files = e.target.files;
    if (!files?.length) return;
    await addFiles(category, files);
    setMessage(`${files.length} photo${files.length > 1 ? "s" : ""} added to ${category}.`);
    e.target.value = "";
  };

  return <main className="manager-page"><div className="container manager-shell"><div className="manager-head"><div><p className="eyebrow">PHOTOGRAPHER STUDIO</p><h1>Gallery Manager</h1><p>Select photos directly from your device and preview them in the portfolio.</p></div><a className="button light" href="#home"><ArrowLeft size={16}/> Back to portfolio</a></div>
    <div className="manager-note"><strong>How this works</strong><span>Choose a category, click upload and select multiple images from your computer. These uploads are stored in this browser using IndexedDB. They are not uploaded to a public server.</span></div>
    <div className="category-tabs">{galleries.map((g) => <button className={category === g.id ? "active" : ""} key={g.id} onClick={() => setCategory(g.id)}>{g.title}</button>)}</div>
    <label className="upload-box"><input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={handleFiles}/><ImagePlus size={34}/><strong>Choose photographs from your device</strong><span>JPG, PNG, WEBP or GIF · You can select multiple files at once</span><b><Upload size={16}/> Select photos</b></label>
    {message && <p className="upload-message">{message}</p>}
    <div className="manager-grid">{selected.map((photo) => <div className="manager-card" key={photo.id}><img src={objectUrlForPhoto(photo)} alt={photo.title}/><div><strong>{photo.name}</strong><button onClick={() => removePhoto(photo.id)} title="Remove photo"><Trash2 size={16}/></button></div></div>)}</div>
    {!selected.length && <div className="empty-manager"><Camera size={30}/><p>No device uploads in this category yet.</p></div>}
  </div></main>;
}
