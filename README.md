# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
# DevStack

DevStack is a responsive React app for exploring development technologies and building a personal technology stack.

## Technologies

- React 19 and TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- Local JSON data

## Features

- Responsive sticky navbar with a mobile menu
- Technology cards loaded from JSON with category, difficulty, badge, rating, and icons
- Add, remove, and remove-all stack management with toast notifications

## Run Locally

```bash
npm install
npm run dev
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like markup inside JavaScript or TypeScript. React uses it to describe the UI.

### 2. What is the difference between props and state?

Props are read-only values passed from a parent to a child. State is data owned by a component that can change and trigger a new render.

### 3. What does the `useState` hook do, and where did you use it?

`useState` adds state to a function component. This project uses it for the mobile menu and the selected stack technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load JSON data?

`useEffect` runs side effects after rendering, such as fetching data. This project uses a promise with React `Suspense` and `use`, so `useEffect` was not needed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item changed, was added, or was removed, so it can update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays different UI based on a condition. The stack shows an empty message when there are no selected technologies and a list otherwise.

### 7. How do you pass data between a parent and child?

A parent passes data through props. A child can send an event back by calling a callback function passed to it as a prop.

