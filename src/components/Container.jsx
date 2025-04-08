import Main from './main/Main';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Container = () => {
  return (
    <main className="ml-0 lg:ml-[33.3333%] space-y-32">
      <Main />
      <About />
      {/*<Careers />*/}
      <Projects />
      <Contact />
    </main>
  );
};

export default Container;
