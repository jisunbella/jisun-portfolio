import './App.css';

import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/Container';

import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeHash = useActiveSection();
  return (
    <div className="App">
      <NavBar />
      <Sidebar activeHash={activeHash} />
      <Container />
    </div>
  );
}

export default App;
