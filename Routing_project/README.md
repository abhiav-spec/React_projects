# React Routing Project

A modern, single-page application (SPA) built with React and Vite, demonstrating seamless client-side routing and a polished user interface.

## 🚀 Features

- **Client-Side Routing**: Implemented using `react-router-dom` v7 for fast, flicker-free navigation between pages.
- **Modern & Responsive Design**: Built with **Tailwind CSS v4** for a sleek, mobile-first accessible layout.
- **Dynamic Styling**: Each page features unique gradient themes:
  - **Home**: Blue & Indigo theme
  - **About**: Green & Emerald theme
  - **Contact**: Purple & Pink theme
- **Glassmorphism Navbar**: A sticky, translucent navigation bar with blur effects.
- **Interactive Elements**: Hover effects, focus states, and smooth transitions throughout the app.
- **Iconography**: Clean icons using `lucide-react`.

## 🛠️ Technologies Used

- **React 19**: The library for web and native user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **React Router DOM 7**: The standard routing library for React.
- **Tailwind CSS 4**: A utility-first CSS framework for rapid UI development.
- **Lucide React**: Beautiful & consistent open-source icons.

## � Project Structure

```
routing-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## �📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd routing-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📖 Usage

- Click on the navigation links (Home, About, Contact) to switch views.
- Resize the window to see the responsive navbar adapt (hamburger menu on mobile).
- The "Contact Us" page features a styled form ready for future backend integration.

## 📄 License

This project is licensed under the MIT License.
