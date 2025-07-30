// src/components/Layout.tsx
import React, { useEffect, useState } from 'react'; // useState import edildi
import Navbar from './Navbar';
import Footer from './Footer';
import layoutStyles from '@/styles/Layout.module.css';
import navbarStyles from '@/components/Navbar.module.css'; // navbarStyles olarak import edildi
import footerStyles from '@/components/Footer.module.css'; // footerStyles olarak import edildi

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Bileşenler render edildikten sonra yükseklikleri al
  useEffect(() => {
    const updateHeights = () => {
      const navbarElement = document.querySelector(`.${navbarStyles.navbar}`) as HTMLElement | null;
      const footerElement = document.querySelector(`.${footerStyles.footer}`) as HTMLElement | null; // Footer'ı sınıfıyla seçiyoruz

      let navbarHeight = 0;
      if (navbarElement) {
        navbarHeight = navbarElement.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      }

      let footerHeight = 0;
      if (footerElement) {
        footerHeight = footerElement.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
      }

      // Eğer dinamik olarak --main-min-height set etmek istersen:
      // const viewportHeight = window.innerHeight;
      // const mainMinHeight = viewportHeight - navbarHeight - footerHeight;
      // document.documentElement.style.setProperty('--main-min-height', `${mainMinHeight}px`);
    };

    // DOM hazır olduğunda yüksekliği güncelle
    updateHeights();
    // Pencere boyutlandığında yüksekliği güncelle
    window.addEventListener('resize', updateHeights);
    // Resimler veya diğer dinamik içerik yüklendiğinde de güncelleme yapabiliriz (isteğe bağlı)
    window.addEventListener('load', updateHeights); // Sayfa tamamen yüklendiğinde

    // Temizlik fonksiyonu
    return () => {
      window.removeEventListener('resize', updateHeights);
      window.removeEventListener('load', updateHeights);
    };
  }, []); // Sadece bir kere çalışır (component mount edildiğinde)

  return (
    <div className={layoutStyles.layoutContainer}>
      <Navbar />
      <main className={layoutStyles.mainContentWrapper}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;