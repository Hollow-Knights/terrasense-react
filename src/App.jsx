import './App.css';
import { Hero } from './components/hero/hero';
// import { NavbarTerrasense } from './components/navbar/navbar';
import { About } from './components/about/about';
import { AgroAI } from './components/agro-ai/agro-ai';
import { Faq } from './components/faq/faq';

function App() {
  return (
    <div className="App">
      {/* <NavbarTerrasense /> */}
      <Hero />
      <About />
      <AgroAI />
      <Faq />
    </div>
  );
}

export default App;

