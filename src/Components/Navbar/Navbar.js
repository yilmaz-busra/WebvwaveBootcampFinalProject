import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "./NavbarCss.css";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <Navbar expand="lg" className="">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center raito-cont"
        >
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <img
              src="/techcareer-logo.svg"
              alt="TechCareer Logo"
              className="logo"
            />
          </Navbar.Brand>

          {/* Search Icon */}
          <div className={`navbar-search ${isSearchOpen ? "open" : ""}`}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Etkinlik, İş ilanı, Blog Ara"
                className={`search-input ${isSearchOpen ? "expand" : ""}`}
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                className="search-icon"
                onClick={toggleSearch}
              >
                🔍
              </Button>
            </Form>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
          <Navbar.Collapse id="navbarScroll" className={isOpen ? "show" : ""}>
            <Nav className="me-auto my-2 my-lg-0 navbar-nav">
              <Nav.Item className="nav-item">
                <Nav.Link as={Link} to="/events" className="nav-link">
                  Etkinlikler
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link as={Link} to="/jobpost" className="nav-link">
                  İş İlanları
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link as={Link} to="/education" className="nav-link">
                  Eğitimler
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link as={Link} to="/companies" className="nav-link">
                  Şirketler
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  as={Link}
                  to="/giris"
                  className="nav-link login-button"
                >
                  Giriş / Üye Ol
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbar1;
