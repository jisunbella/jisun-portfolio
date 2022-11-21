import React from 'react';
import './Home.css';
import Jisun from '../../assets/jisun-hello.png'
import CV from '../../assets/JisunLee_CV.pdf'

const Home = () => {
  return (
    <section id="home">
      <div className='container home__container'>
        <div className="home__content">
          <div className='home__image'>
            <img src={Jisun} alt="Hello" />
          </div>
          <div className="home__desc">
            <h2>Hello World!</h2>
            <h1>I'm <strong>Jisun Lee</strong></h1>
            <h2>Front End Developer</h2>
          </div>
        </div>
        <div className='home__btn'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
