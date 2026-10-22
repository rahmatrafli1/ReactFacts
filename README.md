# ReactFacts

A small React app that shows fun facts about React. It's built with Vite and styled with plain CSS, following a Figma design.

## Features

- `Navbar` with the React logo and the "ReactFacts" title, in a semantic `<header>` and `<nav>`
- `Main` section with a heading and a list of React facts
- Decorative gray React logo set as a CSS `background-image`

## Tech stack

- React 19 (release candidate)
- Vite
- CSS

## Project structure

```
├── components/
│   ├── Navbar.jsx
│   └── Main.jsx
├── images/
│   ├── react-logo.png
│   └── react-logo-half.png
├── App.jsx
├── index.jsx
├── index.css
└── index.html
```

## Getting started

```
npm install
npm start
```

Then open the local URL that Vite prints, usually http://localhost:5173.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm start`/`dev` | Start the dev server         |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |

## Credits

Based on a challenge from [Scrimba](https://scrimba.com).
