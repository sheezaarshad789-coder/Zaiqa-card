# Recipe Showcase

A responsive Pakistani recipe showcase built with React and Vite. Explore quick local favourites and weekend specials, with cooking times, difficulty and dietary badges on every recipe card.

The **Zaika Food** logo from `src/assets/zaika-logo.png` appears in the header and footer. Recipe photography and the display fonts are loaded from Unsplash and Google Fonts.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create the production bundle, or `npm run lint` to check the code.

## Components

```text
src/
├── components/
│   ├── Badge.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── RecipeCard.jsx
│   ├── Section.jsx
│   └── helper.js
├── App.jsx
├── App.css
└── index.css
```

`RecipeCard` receives recipe details as props, defaults a missing chef name to **Unknown Chef**, and formats cooking times with `formatCookingTime` in `src/components/helper.js`. `Badge` labels dietary choices and difficulty, while `Section` wraps its cards through `props.children`. Clicking **Order Now** logs `<recipe name> ordered` in the browser console.

Recipe photography is loaded from Unsplash and the site fonts use Google Fonts, so an internet connection is needed for those assets.
