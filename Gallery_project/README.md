# Gallery Project

A modern, responsive image gallery built with **React**, **Vite**, **Tailwind CSS**, and the **Picsum Photos API**. Browse beautiful placeholder images with smooth pagination and a clean, minimal design.

## Features

- 🖼️ **Dynamic Image Gallery** — Fetches high-quality images from Picsum Photos API
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized** — Built with Vite for rapid development and production builds
- 🎨 **Modern UI** — Styled with Tailwind CSS for a sleek look
- 📄 **Pagination** — Navigate through pages of images with Prev/Next buttons
- 🔗 **Direct Links** — Click any image to view it in full resolution on Picsum Photos
- ♿ **Accessible** — Semantic HTML and proper alt text for all images

## Tech Stack

- **React** 19.2.0 — UI library
- **Vite** 7.3.1 — Build tool and dev server
- **Tailwind CSS** 4.1.18 — Utility-first CSS framework
- **Axios** 1.13.4 — HTTP client for API requests
- **JavaScript (ES6+)** — Modern JavaScript features

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhiav-spec/Gallery_project.git
   cd Gallery_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the Project

### Development Server
Start the local development server with hot module replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or the next available port)

### Production Build
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
Gallery_project/
├── src/
│   ├── components/
│   │   ├── Card.jsx          # Individual image card component
│   │   └── Navbar.jsx        # Navigation bar component
│   ├── App.jsx               # Main app component with pagination logic
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles
│   └── assets/               # Static assets
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Usage

1. **Browse Images** — The gallery displays 10 images per page
2. **Navigate Pages** — Use the **Prev** and **Next** buttons to switch between pages
3. **View Full Image** — Click any image card to open it in full resolution
4. **Responsive Layout** — The gallery automatically adapts to your screen size

## API Reference

This project uses the **Picsum Photos API v2**:
- **Endpoint**: `https://picsum.photos/v2/list`
- **Parameters**:
  - `page` — Page number (starts at 1)
  - `limit` — Images per page (default: 10)

Example request:
```
https://picsum.photos/v2/list?page=1&limit=10
```

Response includes properties like:
- `id` — Unique image ID
- `author` — Photographer name
- `download_url` — Direct image URL
- `url` — Link to the image on Picsum Photos

## Customization

### Change Images Per Page
Edit `App.jsx` and modify the API request:
```javascript
const response = await axios.get(
  `https://picsum.photos/v2/list?page=${index}&limit=20` // Change 10 to 20
)
```

### Customize Card Styling
Edit `src/components/Card.jsx` to change the card appearance:
```jsx
<div className='h-40 w-44 rounded-xl'> {/* Adjust height and width */}
```

### Change Colors
Modify Tailwind classes in `App.jsx` and component files. Example:
```jsx
className='bg-black' // Change to 'bg-gray-900' or any Tailwind color
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Tips

- Images are lazy-loaded for better performance
- Vite optimizes the bundle for fast load times
- Tailwind CSS is tree-shaken to include only used styles

## Troubleshooting

### Images Not Loading?
- Check your internet connection
- Verify the Picsum Photos API is accessible
- Open browser DevTools (F12) and check the Console for error messages

### Port Already in Use?
Vite will automatically try the next available port. You can also specify a port:
```bash
npm run dev -- --port 3000
```

### Build Issues?
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## Author

Created by Abhinav Mishra

## Acknowledgments

- [Picsum Photos](https://picsum.photos/) — For the beautiful placeholder image API
- [React](https://react.dev/) — JavaScript library for building UIs
- [Vite](https://vitejs.dev/) — Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework

---

**Happy coding! 🚀**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
