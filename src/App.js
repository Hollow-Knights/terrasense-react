import './App.css';
import { HoverButton, HeaderWhite } from './components/component';
import { greenText, whiteText } from './styles/styles';
import { OutlinedGreenButton, FilledGreenButton } from './styles/button_styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderWhite title="Plantando tecnologia, colhendo resultados" />
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={OutlinedGreenButton}
            onClick={() => console.log("Entro em contato")}>Entrar em contato</button>
          <button style={FilledGreenButton}
            onClick={() => console.log("Botao doiss")}>Criar conta</button>
        </div>
        <p style={greenText}>
          nav bar
        </p>
        <p style={whiteText}>
          nav bar
        </p>
        <HoverButton title="Início" href="#start"/>
      </header>
    </div>
  );
}

export default App;

