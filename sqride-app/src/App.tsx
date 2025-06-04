import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import SecondGallerySection from './components/SecondGallerySection';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <SecondGallerySection />
    </>
  );
};

export default App;
