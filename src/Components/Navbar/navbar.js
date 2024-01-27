import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import './navbar.css';
import logo from '../../Assets/Tomahawk--Cut-Bone-In-Rib-Eye-at--St.-Paul--Meat-Shop.jpg';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  document.addEventListener("DOMContentLoaded", function scrollHandler() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY >= 20 || window.scrollY > 0) {
      navbar.classList.add('shadow');
      updateNavbar(true);
    } else {
      navbar.classList.remove('shadow');
      updateNavbar(false);
    }
  window.addEventListener("scroll", scrollHandler);
  
  });

  return (
    <div>
      <nav   
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>
        <a href="#">
          <img className="logoo" src={logo} alt="iReporter" />
        </a>
        <ul className={`navul ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="navli">
            <Link to="/">Home</Link>
          </li>
          <li className="navli">
            <Link to="/about">Beef</Link>
          </li>
          <li className="navli">
            <Link to="/">Chicken</Link>
          </li>
          <li className="navli">
            <Link to="/about">Lamb/Mutton/Goat</Link>
          </li>
          <li className="navli">
            <Link to="/about">Contact US</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'animate1' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'animate2' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'animate3' : ''}`}></div>
        </div>
        <div className="icons">
        <AiOutlineSearch className="icon" size={30}  />
          <AiOutlineUser className="icon" size={30}  />
          <AiOutlineShoppingCart className="icon" size={30}  />
          
        </div>     
      </nav>
    </div>
  );
}

export default Navbar;
