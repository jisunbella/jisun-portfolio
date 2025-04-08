import './App.css';
import Main from './components/main/Main';
import About from './components/about/About';
import Careers from './components/careers/Careers';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';

import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeHash = useActiveSection();
  return (
    <div className="App">
      <NavBar />
      <Sidebar activeHash={activeHash} />
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
