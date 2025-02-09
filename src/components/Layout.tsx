import React from 'react';
import { Outlet } from 'react-router-dom';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = () => {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;