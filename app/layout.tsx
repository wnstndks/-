import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
// app/layout.tsx 또는 pages/_app.tsx
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
