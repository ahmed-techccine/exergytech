
import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage'; // New ContactPage

// Helper to scroll to hash element if present in URL
const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location; // e.g., "#contact"
    if (hash && hash.length > 1) { // Ensure hash is not empty and not just "#"
      const elementId = hash.substring(1); // Remove '#' to get "contact"
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      } else {
        // Element not found for the hash, scroll to top smoothly as a fallback
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // No hash, or hash is just "#", scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]); // Re-run when location changes

  return null;
};

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-exergy-dark-bg">
      <Header />
      <ScrollToHashElement /> {/* Handles scrolling */}
      <main className="flex-grow">
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add other routes here, e.g., for Careers if it becomes a full page */}
        <Route path="*" element={<HomePage />} /> {/* Fallback to HomePage or a NotFoundPage */}
      </Route>
    </Routes>
  );
};

export default App;