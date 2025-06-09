import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './components/About';
import ShopPage from './pages/ShopPage';
import OurStoryPage from './pages/OurStoryPage';
import Contact from './components/Contact';
import PhotosPage from './pages/PhotosPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;