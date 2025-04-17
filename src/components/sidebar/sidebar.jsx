import { useSidebar } from "../../contexts/SidebarContext";
import "./sidebar.css";

const Sidebar = () => {
  const { isOpen, toggleSidebar, isSignIn, toggleSignIn, toggleSignUp } = useSidebar();

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`sidebar ${isOpen && 'open'}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <div className="sidebar-content">
          <img
            src="/images/terrasense/terrasense_logovertical_branca.svg"
            alt="Terra Sense AI Logo Vertical Branca"
            id="hero-logo"
          />
          {isSignIn && (
          <>
            <h2>Bem-vindo de volta!</h2>
            <form className="signup-form">
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="********" />
              </div>
              <button type="submit" className="submit-btn">Entrar</button>
            </form>
            <p className="signup-link" onClick={toggleSignUp}>Não possui uma conta? Cadastre-se</p>
          </>
          )}
          {!isSignIn && (
          <>
            <h2>Bem-vindo!</h2>
            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="********" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmar Senha</label>
                <input type="password" id="confirm-password" placeholder="********" />
              </div>
              <button type="submit" className="submit-btn">Cadastrar</button>
            </form>
            <p className="signin-link" onClick={toggleSignIn}>Voltar para o login</p>
          </>
          )}
        </div>
      </div>
    </>
  );
};

export { Sidebar };
