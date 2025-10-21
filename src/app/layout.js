import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const canela = localFont({
  src: [
    {
      path: './fonts/Canela-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Canela-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-canela',
});

export const metadata = {
  title: 'The Zarari — Safari Resort in Botswana',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={canela.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
