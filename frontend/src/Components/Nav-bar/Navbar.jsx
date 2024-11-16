
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from "../../assets/logo.png";

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
        <img src={logo} alt="logo" />
        <p>Jhonathan Methewn</p>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {mobileMenu ? (
          <span className="back-icon">X</span> 
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
          <Link to="Hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} offset={-160} duration={500} onClick={toggleMenu}>
            About me
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-250} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills-section" smooth={true} offset={-150} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li id="btn">
          <Link to="Contact" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

