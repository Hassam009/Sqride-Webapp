import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import SecondGallerySection from './components/SecondGallerySection';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <SecondGallerySection />
      {/* Footer component can be added here if needed */}
      <Footer />
    </>
  );
};

export default App;
