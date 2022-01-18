import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="me-auto">
          {Auth.loggedIn() ? (
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
            </>
          ) : ( 
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
