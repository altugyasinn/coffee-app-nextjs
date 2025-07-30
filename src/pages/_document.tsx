// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr"> {/* HTML dilini 'tr' olarak ayarlayalım */}
        <Head>
          {/* Font Awesome CSS linki buraya gelecek */}
          {/* Daha önce kullandığınız integrity ve crossorigin değerlerini ekleyin */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-??????????????????????????????????????????????????????????????????????????????????" // Önceki değerlerinizi buraya yapıştırın
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          {/* Diğer global meta etiketleri veya font linkleri buraya gelebilir */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;