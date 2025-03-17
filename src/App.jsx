import './App.css';
import { Hero } from './components/hero/hero';
// import { NavbarTerrasense } from './components/navbar/navbar';
import { About } from './components/about/about';
import { AgroAI } from './components/agro-ai/agro-ai';
import { Faq } from './components/faq/faq';
import { ContactUs } from './components/forms/forms';
import { Footer } from './components/footer/footer';
import { News } from './components/news/news';

function App() {
  return (
    <div className="App">
      {/* <NavbarTerrasense /> */}
      <Hero />
      <About />
      <AgroAI />
      <News />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

