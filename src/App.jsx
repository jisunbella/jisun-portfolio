import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import About from './components/about/About';
import Careers from './components/careers/Careers';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      {/*<Careers />*/}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
