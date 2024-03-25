import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Header = ({appName}) => {
  return (
    <Navbar data-bs-theme='dark' style={{ backgroundColor: `#ff6666` }}>
      <Container>
        <Navbar.Brand href="#">{appName}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
