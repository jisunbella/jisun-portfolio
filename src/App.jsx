import './App.css';

import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Container from './components/Container';

import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeHash = useActiveSection();
  return (
    <div className="App">
      <NavBar />
      <SideBar activeHash={activeHash} />
      <Container />
    </div>
  );
}

export default App;
