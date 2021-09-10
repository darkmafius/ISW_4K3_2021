import React from 'react';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';

const Menu = (props) => {
  const { carrito } = props;
  console.log(carrito.length);

  return (
    <Navbar expand="lg">
      <Container className="px-4 px-lg-5">
        <Navbar.Brand href="#home">PedidosYa</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1" />
              Carrito
              <span className="badge bg-dark text-white ms-1 rounded-pill">{carrito.length}</span>
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
