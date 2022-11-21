import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
