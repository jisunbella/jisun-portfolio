import React from 'react'
import data from './CareerData.js'

const AboutCareer = () => {
  return (
    <div className='about__career'>
      {
        data.map(({ id, name, img, alt, url, period, location, position, desc1, desc2 }) => {
          return (
            <article key={id}>
              <div className='about__career-img'>
                <a href={url} target='_blank' rel='noreferrer'>
                  <img src={img} alt={alt} className='about__career-logo' title='Go to website' />
                </a>
              </div>
              <div className='about__career-desc'>
                <div className='about__career-position'>{position}</div>
                <div className='about__career-period'>{period}</div>
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
  )
}

export default AboutCareer