import React from 'react';
import Navbar from '../Nav-Footer/Navbar.jsx';
import Footer from '../Nav-Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}