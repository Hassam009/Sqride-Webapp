// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import SecondGallerySection from './components/SecondGallerySection';
import Footer from './components/Footer';
import LoginPage from './Authentication/login';

const App: React.FC = () => {
  const location = useLocation();

  // Only hide the footer on the login page
  const hideFooter = location.pathname === '/login';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <MenuSection />
            <GallerySection />
            <SecondGallerySection />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
