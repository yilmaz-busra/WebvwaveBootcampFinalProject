import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            techcareer.net
          </a>
          <div className="navbar-search">
            <input type="text" placeholder="Etkinlik, Iş ilanı, Blog Ara" />
            <button type="submit">Ara</button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/activities" className="nav-link">
                Etkinlikler
              </a>
            </li>
            <li className="nav-item">
              <a href="/jobpost" className="nav-link">
                Iş Ilanları
              </a>
            </li>
            <li className="nav-item">
              <a href="/education" className="nav-link">
                Eğitimler
              </a>
            </li>
            <li className="nav-item">
              <a href="/companies" className="nav-link">
                Şirketler
              </a>
            </li>
            <li className="nav-item">
              <a href="/giris" className="nav-link">
                Giriş / Üye Ol
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
