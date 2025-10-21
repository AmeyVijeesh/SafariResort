/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Script from 'next/script';
import localFont from 'next/font/local';

const canela = localFont({
  src: [
    {
      path: '/fonts/Canela-Medium-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-canela',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={canela.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>The Zarari - Safari Resort in Botswana</title>
        <Script
          id="fontawesome"
          src="https://kit.fontawesome.com/a076d05399.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
