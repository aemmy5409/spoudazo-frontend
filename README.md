# Spoudazo - Frontend

A modern, dynamic, and responsive frontend application for **Spoudazo**, built with **React** and **Tailwind CSS**. Spoudazo helps learners efficiently organize, review, and track their study materials across devices, enhanced by AI-powered features.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Available Scripts](#available-scripts)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **AI Generated Tests:** Automatically generate customized tests based on your study material.  
- **Courses Offered:** Browse and enroll in a variety of courses to deepen your knowledge.  
- **PDF Summarizer:** Upload PDFs and get concise summaries for faster review.  
- **Dynamic UI:** React's component-based architecture enables real-time updates and seamless user interactions.  
- **Responsive Design:** Tailwind CSS ensures the app looks great on mobile, tablet, and desktop.

---

## Tech Stack

- **React** - Frontend JavaScript library for building user interfaces  
- **Tailwind CSS** - Utility-first CSS framework for rapid styling and responsive design  
- **React Router** - For client-side routing and navigation  
- **Axios / Fetch API** - For handling API requests  

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)  
- npm package manager  

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/aemmy5409/spoudazo-frontend.git
   cd spoudazo-frontend

2. Install dependencies
    ```bash
    npm install

3. Start the development server
    ```bash
    npm run dev

4. Open http://localhost:5173 to view the app in your browser.

## Project Structure
src/
├── api/              # API calls and services
├── assets/           # Images, fonts, and other static assets
├── components/       # Reusable UI components (buttons, cards, modals)
├── pages/            # Page components (Home, Courses, AI Test, PDF Summarizer)
├── state/            # State management (e.g., context, stores)
├── App.jsx           # Main app component
├── index.css         # Root style 
├── main.jsx          # Entry point

## Available Scripts

- `npm run dev` — Runs the Vite development server with hot module replacement.  
- `npm run build` — Builds the app for production using Vite and SWC.  
- `npm run preview` — Serves the production build locally for preview/testing.  

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request  

Please ensure code quality and add tests where applicable.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

