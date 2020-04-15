import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarLanding = (props) => {
  return (
    <Navbar className="navbar-inner" sticky="top">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="mr-auto">
            {/* <Nav.Link href="https://www.linkedin.com/in/m-amirazmi/">
              <i class="fab fa-linkedin fa-lg"></i>
            </Nav.Link>
            <Nav.Link href="https://github.com/m-amirazmi/">
              <i class="fab fa-github-square fa-lg"></i> */}
            {/* </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#story">My Story</Nav.Link>
            <Nav.Link href="#projects">My Project</Nav.Link>
            <Nav.Link href="#skills">My Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLanding;
