import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle GitHub Pages SPA routing
const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get('p');
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
