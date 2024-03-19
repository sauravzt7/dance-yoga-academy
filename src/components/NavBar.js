import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "animate.css/animate.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="animate__animated animate__fadeInDown">
      <Container>
        <Navbar.Brand href="#home">Dance & Yoga Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#instructors">Our Instructors</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
