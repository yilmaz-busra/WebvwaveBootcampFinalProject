import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="/techcareer-logo.svg"
              alt="TechCareer Logo"
              className="logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Etkinlik, Iş ilanı, Blog Ara"
              className="search-input"
            />
          </div>
          <div className="navbar-hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/activities" className="nav-link">
                Etkinlikler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobpost" className="nav-link">
                Iş Ilanları
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link">
                Eğitimler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/companies" className="nav-link">
                Şirketler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/giris" className="nav-link login-button">
                Giriş / Üye Ol
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
