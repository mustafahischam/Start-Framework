import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top ${styles.navbar} ${isScrolled ? styles.shrink : ''}`} id="mainNav">
      <div className="container">
        <NavLink className="navbar-brand text-white fw-bolder fs-2" to="/">Start Framework</NavLink>
        <button className={`navbar-toggler text-uppercase font-weight-bold text-white rounded ${styles.toggler_button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto text-white bg">
            <li className="nav-item mx-0 mx-lg-1"><NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link py-1 px-2  text-white fw-bold rounded` : "nav-link py-1 px-2  rounded text-white fw-bold"} to="about">About</NavLink></li>
            <li className="nav-item mx-0 mx-lg-1"><NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link py-1 px-2  text-white fw-bold rounded` : "nav-link py-1 px-2  rounded text-white fw-bold"} to="portfolio">Portfolio</NavLink></li>
            <li className="nav-item mx-0 mx-lg-1"><NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link py-1 px-2 text-white fw-bold rounded` : "nav-link py-1 PX-2 rounded text-white fw-bold"} to="contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}