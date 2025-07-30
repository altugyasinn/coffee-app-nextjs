// src/pages/about.tsx
import Head from 'next/head';
import styles from '@/styles/About.module.css'; // About.module.css'i import edin

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda - Kahve Dükkanı</title>
        <meta name="description" content="Kahve Dükkanımızın hikayesini ve misyonunu keşfedin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Genel .section sınıfını ve About.module.css'teki .aboutSection sınıfını birleştiriyoruz */}
      <section className={`${styles.aboutSection} section`}>
        <div className="container"> {/* Genel .container sınıfını kullanıyoruz */}
          <h1 className={styles.aboutTitle}>Hakkımızda</h1>
          <p className={styles.aboutParagraph}>
            Kahve Dükkanı olarak, en taze ve kaliteli kahve çekirdeklerini dünyanın dört bir yanından
            getirerek size eşsiz bir kahve deneyimi sunmayı hedefliyoruz. Her fincan kahvemizde
            tutku ve özen gizlidir.
          </p>
          <p className={styles.aboutParagraph}>
            Misyonumuz, kahve severlere sadece bir içecek değil, aynı zamanda rahatlayabilecekleri,
            keyif alabilecekleri ve ilham alabilecekleri bir ortam sağlamaktır.
            Her adımda sürdürülebilirliği ön planda tutarak, hem gezegenimize hem de topluma fayda
            sağlamayı amaçlıyoruz.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;