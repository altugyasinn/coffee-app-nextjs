// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="main-footer">
      <div className={`${styles.container} container`}> {/* Genel container sınıfını kullanıyoruz */}
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Kahve Dükkanı</h3>
            <p>Gününüzü özel kılacak en taze kahveler.</p>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-facebook-f"></i> {/* Font Awesome ikonları için */}
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Hızlı Linkler</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Ana Sayfa</Link></li>
              <li><Link href="/products" className={styles.footerLink}>Ürünler</Link></li>
              <li><Link href="/about" className={styles.footerLink}>Hakkımızda</Link></li>
              <li><Link href="/cart" className={styles.footerLink}>Sepet</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>İletişim</Link></li> {/* İletişim sayfası eklenecekse */}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>İletişim</h3>
            <p>Adres: Örnek Cad. No:123, Kahve Şehri, Dünya</p>
            <p>Telefon: (555) 123 45 67</p>
            <p>Email: info@kahvedukkani.com</p>
            <p>Çalışma Saatleri: Pzt-Cuma: 09:00 - 22:00</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Kahve Dükkanı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;