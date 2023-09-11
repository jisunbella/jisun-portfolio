import React, { useRef, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const content = useRef(null);
  console.log(content);
  useEffect(() => {
    observer.observe(content.current);

  }, []);

  return (
    <section id="home">
      <div className='container'>
        <div className='home-content' ref={content}>
          <h1>Hello, I am <strong>Jisun Lee</strong>.<br /> A <strong>Frontend </strong> Web Developer based in Korea.</h1>
        </div>
      </div>
    </section>
  );
}


const observer = new IntersectionObserver((e) => {
  e.forEach((param) => {
    if (param.isIntersecting) {
      param.target.style.opacity = 1;
    } else {
      param.target.style.opacity = 0;
    }
  })
});

export default Home;
