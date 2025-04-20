import "./navbar.css";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSidebar } from "../../contexts/SidebarContext";
const CustomNavbar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { toggleSidebar, toggleSignIn, toggleSignUp } = useSidebar();
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
        </Navbar.Collapse>

        <div className="nav-buttons">
          <Button className="btn-signin" variant="outline-light" onClick={() => {
            toggleSignIn();
            toggleSidebar();
          }}>Login</Button>
          <Button className="btn-signup" variant="outline-light" onClick={() => {
            toggleSignUp();
            toggleSidebar();
          }}>Criar Conta</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export { CustomNavbar };