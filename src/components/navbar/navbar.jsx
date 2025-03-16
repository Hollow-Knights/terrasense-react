import "./navbar.css";
import "../utils/buttons/buttonFilled";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarTerrasense = () => {
  return(
    <Navbar class="navbar navbar-expand-lg fixed-top" id="navbar">
      <Container class="container container-nav">
        <Navbar.Brand 
          href="#home" 
          id="link-logo"
          class="navbar-brand">
          <img
              src="/images/terrasense/terrasense_logohorizontal_branca.svg"
              alt="Terra Sense AI Logo Horizontal Branca" />
        </Navbar.Brand>
        <Navbar.Toggle 
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expand="false"
          aria-label="Toggle navigation">
          <i class="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse class="collapse navbar-collapse" id="navbar-items">
          <Nav class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Nav.Link href="#inicio" class="link-menu">Início</Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="#quem-somos" class="link-menu">Quem Somos</Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="#agro-ai" class="link-menu">Agro AI</Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="#noticias" class="link-menu">Notícias</Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="#faq" class="link-menu">Perguntas Frequentes</Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link href="#contato" class="link-menu">Contato</Nav.Link>
            </li>
          </Nav>
          <section class="header-buttons">
            <a href="http://terrasense.ai/login">login</a>
            <buttonFilled class="btn-filled">Criar Conta</buttonFilled>
          </section>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavbarTerrasense};