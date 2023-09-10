import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setVisible] = useState(false);

  // const _fadeIn = () => {
  //   setVisible(true);
  // }

  // window.addEventListener('load', _fadeIn);
  // window.addEventListener('scroll', _fadeIn);
  



  return (
    <section id="home">
      <div className='container'>
        <div className={`home-content fade-in-section ${isVisible ? 'is-visible' : 'is-visible'}`}>
          <h1>Hello, I am <strong>Jisun Lee</strong>.<br /> A <strong>Frontend </strong> Web Developer based in Korea.</h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
