import "./navbar.css";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = React.useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      id="navbar"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container id="container-nav">
        <Navbar.Brand href="/" id="link-logo" className="navbar-brand" onClick={closeMenu}>
          <img
            src="./images/terrasense/terrasense_logohorizontal_branca.svg"
            alt="Terra Sense AI Logo Horizontal Branca"
            className="img-fluid"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="navbar-items" 
          className="navbar-toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbar-items">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0 ul-navmenu">
            {[
              ["Início", "#inicio"],
              ["Quem Somos", "#quem-somos"],
              ["Agro AI", "#agro-ai"],
              ["Notícias", "#noticias"],
              ["Perguntas Frequentes", "#faq"],
              ["Contato", "#contato"]
            ].map(([title, url]) => (
              <Nav.Item key={title}>
                <Nav.Link 
                  href={url} 
                  className="link-menu"
                  onClick={closeMenu}
                >
                  {title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
          <section className="header-buttons">
            <Button 
              href="http://terrasense.ai/login" 
              variant="outline-light" 
              className="btn-link"
              onClick={closeMenu}
            >
              Login
            </Button>
            <Button 
              variant="primary" 
              className="btn-filled"
              onClick={closeMenu}
            >
              Criar Conta
            </Button>
          </section>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { CustomNavbar };