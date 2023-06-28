import { Container, Nav, Navbar } from "react-bootstrap";
import { NavItens } from "./style";

export default function Header() {
  return (
    <Navbar collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../../public/icon.png"
            width="150px"
            alt="Terceiro Gestor logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavItens className="me-auto">
            <Nav.Link href="#product">Produto</Nav.Link>
            <Nav.Link href="#about">Sobre nós</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contacts">Contatos</Nav.Link>
            <Nav.Link href="#careers">Carreiras</Nav.Link>
          </NavItens>
          <NavItens>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Registro</Nav.Link>
          </NavItens>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};