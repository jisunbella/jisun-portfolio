import './App.css';
import Home from './components/home/Home';
import Navigation from './components/nav/Navigation';
import About from './components/About/About';
import Career from './components/career/Career'
import Skill from './components/skill/Skill'
import Project from './components/project/Project';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Career />
      <Skill />
      <Project />
      {/*<Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
