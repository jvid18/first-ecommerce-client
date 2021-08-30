import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">FakeStore</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#/cart">Cart</Nav.Link>
              <Nav.Link href="#/login">Login</Nav.Link>
              <Link className="nav-link" to="/products/new">New product</Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
