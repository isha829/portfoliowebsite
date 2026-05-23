import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar-container ${sticky ? 'dark-nav' : ''}`}>
     
      <div className="logoimg">
        <strong>Inshira Attique</strong>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? (
          <span className="back-icon">✕</span> 
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>

      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
            About me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-80} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li id="btn">
          <Link to="contact" smooth={true} offset={20} duration={500} onClick={toggleMenu}>
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;