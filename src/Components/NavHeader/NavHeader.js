import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavHeader.css";

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Arama çubuğu durumu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <span className="hamburger-icon">&#9776;</span>
          )}
        </div>
        <Link to="/" className="navbar-logo">
          tech<span>career</span>.net
        </Link>
        {/* Arama Çubuğu */}
        <div className={`navbar-search ${isSearchOpen ? "active" : ""}`}>
          <input
            type="text"
            placeholder="Etkinlik, İş İlanı, Blog Ara"
            className="search-input"
          />
        </div>
        {/* Arama Butonu (Küçük ekranlar için) */}
        <div className="navbar-search-icon" onClick={toggleSearch}>
          <span className="search-icon">&#128269;</span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li className="dropdown">
            <Link to="/event">Etkinlikler</Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/bootcamp">Bootcamp</Link>
              </li>
              <li>
                <Link to="/about">Hackathon</Link>
              </li>
              <li>
                <Link to="/about">Hiring Challenge </Link>
              </li>
              <li>
                <Link to="/event">Tüm Etkinlikler </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobpost">İş İlanları</Link>
          </li>
          <li>
            <Link to="/education">Eğitimler</Link>
          </li>
          <li className="dropdown">
            <Link to="/">Komünite</Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/community">Komüniteye Katıl</Link>
              </li>
              <li>
                <Link to="#">TDC</Link>
              </li>
              <li>
                <Link to="#">Blog </Link>
              </li>
              <li>
                <Link to="#">Podcast </Link>
              </li>
              <li>
                <Link to="#">Kariyer Rehberi </Link>
              </li>
              <li>
                <Link to="#">Teknik Sözlük</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/companies">Şirketler</Link>
          </li>
          <li>
            <button className="login-btn">Giriş / Üye Ol</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavHeader;
