import React from 'react'
import './Footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jisun</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/jisunbella/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/jisunbella" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jisun Lee. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer