# My Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcases projects, skills, and contact information in a visually appealing and interactive manner.

## Table of Contents
- [My Portfolio](#my-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Locally](#running-locally)
    - [Building for Production](#building-for-production)
  - [Project Structure](#project-structure)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [License](#license)

## Features
- Responsive design for all devices
- Animated transitions using Framer Motion
- Project showcase with images
- About, Contact, and Home sections
- Mobile-friendly navigation menu
- Loading screen animation

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
```

### Running Locally
```bash
pnpm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Building for Production
```bash
pnpm run build
```

## Project Structure
```
my-portfolio/
├── public/
│   ├── icons/           # Technology icons
│   ├── project-images/  # Project showcase images
│   └── ...
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   │   ├── sections/    # Page sections (home, about, projects, contact)
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Screenshots
Add screenshots or GIFs of your portfolio here to showcase the UI and features.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements.

## License
This project is licensed under the MIT License.
