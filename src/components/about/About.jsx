import React from 'react'
import './About.css'
import Jisun from '../../assets/jisun-about.png'
import AboutCareer from './AboutCareer'

const About = () => {
  return (
    <section id='about' className='container about__container'>
      <h3 className='title'>ABOUT ME</h3>
      <div className='about__content'>
        <div className='about__me'>
          <div className="about__me-img">
            <img src={Jisun} alt="Jisun" />
          </div>
        </div>

        <AboutCareer />
      </div>
    </section>
  )
}

export default About