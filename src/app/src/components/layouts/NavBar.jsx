import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <img
          src="https://psasattorneys.com/files/2020/03/hand_shake.png"
          height="30"
          alt=""
          loading="lazy"
        />
        <Navbar.Brand href="/">MiAbogadoYA.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-item nav-link" to="/">
              Inicio
            </NavLink>
            <NavDropdown
              title="Usuarios"
              id="basic-nav-dropdown"
              align="end"
              variant="dark"
              menuVariant="dark"
            >
              <NavLink to="/listusers">
                <NavDropdown.Item
                  as="li"
                  className="dropdown-item"
                  href="#action/"
                >
                  Listar
                </NavDropdown.Item>
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
