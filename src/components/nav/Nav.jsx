import React from 'react'
import './Nav.css'
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <div className="logo">
        <a
          href="#home"
          onClick={() => { setActiveNav('#home') }}
          className='active'
        ><img src={logo} alt="logo" /></a>
      </div>
      <div className="menu">
        <a
          href="#about"
          onClick={() => { setActiveNav('#about') }}
          className={activeNav === '#about' ? 'active' : ''}
        >About</a>
        <a
          href="#skill"
          onClick={() => { setActiveNav('#skill') }}
          className={activeNav === '#skill' ? 'active' : ''}
        >Skill</a>
        <a
          href="#portfolio"
          onClick={() => { setActiveNav('#portfolio') }}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >Project</a>
        <a
          href="#contact"
          onClick={() => { setActiveNav('#contact') }}
          className={activeNav === '#contact' ? 'active' : ''}
        >Contact</a>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/jisunbella/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/jisunbella" target="_blank"><BsGithub /></a>
      </div>
    </nav>
  );
}

export default Nav