import React from 'react'
import './About.css'
import Jisun from '../../assets/jisun-about.png'
import Acorn from '../../assets/acorn-logo.png'
import Feelanet from '../../assets/feelanet-logo.png'

const data = [
  {
    id: 1,
    name: 'Feelanet Website',
    img: Feelanet,
    alt: 'Feelanet logo',
    url: 'http://www.feelanet.com/',
    period: 'AUG 2019 - MAY 2022 | Seoul, South Korea',
    desc1: 'Worked at Feelanet as a junior web developer for 3 years.',
    desc2: 'Joined more than 6 projects/solutions using HTML, CSS, JavaScript, Vue.js, C#, .Net, and SQL Server.'
  },
  {
    id: 2,
    name: 'Acorn Academy Website',
    img: Acorn,
    alt: 'Acorn Academy logo',
    url: 'http://www.acornacademy.co.kr/',
    period: 'JAN 2019 - JUN 2019 | Seoul, South Korea',
    desc1: 'Learned programming skill such as HTML, CSS, JavaScript, React.js, Java, Spring, and MySQL.',
    desc2: 'Created a restaurant search & review website as a team project.'
  },
];

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
        <div className='about__career'>
          {
            data.map(({ id, name, img, alt, url, period, desc1, desc2 }) => {
              return (
                <article key={id}>
                  <a href={url} target='_blank' rel='noreferrer' className='about__career-img'>
                    <img src={img} alt={alt} className='about__career-logo' title='Go to website' />
                  </a>
                  <div className='about__career-desc'>
                    <small className='about__career-period'>{period}</small>
                    <ul>
                      <li>{desc1}</li>
                      <li>{desc2}</li>
                    </ul>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default About