import { useEffect, useState } from "react";

const DB_NAME = "photographer-portfolio-db";
const STORE = "photos";
const VERSION = 1;

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllPhotos() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE, "readonly").objectStore(STORE).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function savePhotos(items) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    items.forEach((item) => tx.objectStore(STORE).put(item));
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function deletePhoto(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

export function useGalleryStorage() {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const refresh = async () => {
    try {
      setUploadedPhotos(await getAllPhotos());
    } catch (error) {
      console.error("Could not read local gallery storage", error);
    }
  };

  useEffect(() => { refresh(); }, []);

  const addFiles = async (category, files) => {
    const items = await Promise.all(
      Array.from(files).map(async (file, index) => ({
        id: `${category}-${Date.now()}-${index}-${crypto.randomUUID()}`,
        category,
        name: file.name,
        title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        description: "Add your photo description in the Gallery Manager.",
        type: file.type,
        blob: file,
        createdAt: Date.now(),
      }))
    );
    await savePhotos(items);
    await refresh();
  };

  const removePhoto = async (id) => {
    await deletePhoto(id);
    await refresh();
  };

  return { uploadedPhotos, addFiles, removePhoto };
}

export function objectUrlForPhoto(photo) {
  return URL.createObjectURL(photo.blob);
}
