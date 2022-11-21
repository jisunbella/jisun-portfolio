import React from 'react'
import './Portfolio.css'
import lightAndSalt from '../../assets/lightandsalt/lightandsalt.png'
import eagleEyeMain from '../../assets/eagleeye/eagleeye-main.png'
import artPortalMain from '../../assets/artportal/artPortal-main.png'
import artPortalLogin from '../../assets/artportal/artPortal-login.png'
import artPortalSearch from '../../assets/artportal/artPortal-search.png'
import dmiMain from '../../assets/dmi/dmi-main.png'
import dmiCategory from '../../assets/dmi/dmi-category.png'
import dmiDetail from '../../assets/dmi/dmi-detail.png'
import ftscMain from '../../assets/ftsc/ftsc-main.png'
import ftscLogin from '../../assets/ftsc/ftsc-login.png'
import ftscSignUp from '../../assets/ftsc/ftsc-signup.png'
import ftscBoard from '../../assets/ftsc/ftsc-board.png'
import Carousel from 'react-bootstrap/Carousel';

const Portfolio = () => {
  return (
    <section id='portfolio' className='container portfolio__container'>
      <h3 className='title'>PROJECT</h3>
      <div className='portfolio__contents'>
        {/* <article className='portfolio__content'>
          <img src={lightAndSalt} alt="" />
          <h5>Light and Salt</h5>
          <p>this is light and salt</p>
        </article>
        <article className='portfolio__content'>
          <img src={eagleEyeMain} alt="" />
          <h5>EagleEye</h5>
          <p>this is eagle eye</p>
        </article>
        <article className='portfolio__content'>
          <img src={artPortalMain} alt="" />
          <img src={artPortalLogin} alt="" />
          <img src={artPortalSearch} alt="" />
          <h5>artportal</h5>
          <p>this is artportal</p>
        </article>
        <article className='portfolio__content'>
          <img src={dmiMain} alt="" />
          <img src={dmiCategory} alt="" />
          <img src={dmiDetail} alt="" />
          <h5>E-commerce</h5>
          <p>this is an ecommerce wetsite</p>
        </article>
        <article className='portfolio__content'>
          <img src={lightAndSalt} alt="" />
          <h5>Light and Salt</h5>
          <p>this is light and salt</p>
        </article>
        <article className='portfolio__content'>
          <img src={ftscMain} alt="" />
          <img src={ftscLogin} alt="" />
          <img src={ftscSignUp} alt="" />
          <img src={ftscBoard} alt="" />
          <h5>ftsc</h5>
          <p>this is ftsc</p>
        </article> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lightAndSalt}
              alt="Light & Salt"
            />
            <Carousel.Caption>
              <h3>Searching & rating restaurents</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eagleEyeMain}
              alt="EagleEye"
            />
            <Carousel.Caption>
              <h3>Tracking Drone</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dmiMain}
              alt="E-commerce"
            />
            <Carousel.Caption>
              <h3>E-commerce website</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    </section>
  )
}

export default Portfolio