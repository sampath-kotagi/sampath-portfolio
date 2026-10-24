# Professional Photographer Portfolio

React + Vite photographer portfolio with separate components, four galleries, lightbox viewing, responsive design, Google Drive links, and a local browser-based Gallery Manager.

## Run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Edit photographer details

Edit `src/data/portfolio.js` for name, introduction, contact links, services, gallery text and Drive links.

## Add permanent website photos

Put image files in `public/images/` and reference them from `src/data/portfolio.js`, for example:

```js
{ id: "street-01", src: "/images/street-01.jpg", title: "My Photo", description: "My description" }
```

You can add 50 or more entries to each gallery. The layout automatically displays four columns on desktop and becomes responsive on smaller screens.

## Upload photos from the device

Open:

`http://localhost:5173/#manage`

Choose a gallery and select multiple images. The Gallery Manager stores selected files in IndexedDB in the current browser, so they remain after a refresh on that same browser/device.

Important: browser uploads are NOT automatically uploaded to your deployed website or shared with visitors. For public, permanent uploads from a photographer dashboard, connect the upload UI to a backend/storage service (for example, a Flask API + object storage/database). For a simple portfolio, placing optimized images in `public/images/` is the reliable deployment method.

## Contact links

Replace the sample Drive, phone, email and LinkedIn values in `src/data/portfolio.js`.
