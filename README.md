# Whispr Podcast Platform

A responsive podcast discovery and creator platform prototype built with React. Browse shows, explore creator profiles, and try the listener and sign-in screens.

## Requirements

- Node.js 22
- pnpm 10

## Getting started

Install the dependencies and start the Vite development server:

```bash
pnpm install
pnpm dev
```

Vite prints the local preview URL when the server is ready.

## Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm format` | Format project files with Oxfmt |

## Pages

The app uses hash-based navigation:

| Route | Page |
| --- | --- |
| `#/` | Home |
| `#/discover` | Podcast discovery |
| `#/podcast` | Podcast details and episodes |
| `#/creator` | Creator profile |
| `#/dashboard` | Listener dashboard |
| `#/login` | Sign in |
| `#/signup` | Create an account |

## Project structure

```text
public/          Static files, including the favicon and robots.txt
src/
  App.jsx        Home page and shared podcast content
  Root.jsx       Hash-based page routing
  pages.jsx      Discovery, podcast, creator, dashboard, and auth pages
  main.jsx       React entry point
  index.css      Global styles and responsive layouts
index.html       Vite HTML entry point
vite.config.js   Vite, React, and Tailwind CSS configuration
```

## Tech stack

- React 19
- JavaScript
- Vite 8
- Tailwind CSS 4
