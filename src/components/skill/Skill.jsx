import React from 'react';
import './Skill.css';
import { BiLogoReact, BiLogoVuejs, BiLogoJquery, BiLogoTypescript, BiLogoJava, BiLogoNodejs, BiLogoGithub } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiCsharp, SiDotnet, SiMicrosoftsqlserver } from 'react-icons/si';
import { TbBrandNuxt } from 'react-icons/tb';

const Skill = () => {
  return (
    <section id='skill'>
      <div className='container'>
        <h4 className='title'>Skill</h4>
        <div className='skill-content'>
          <div className='skill-front row'> 
            <div className='col-md-2 skill-icon'><RiJavascriptFill /></div>
            <div className='col-md-2 skill-icon'><BiLogoReact /></div>
            <div className='col-md-2 skill-icon'><BiLogoVuejs /></div>
            <div className='col-md-2 skill-icon'><TbBrandNuxt /></div>
            <div className='col-md-2 skill-icon'><BiLogoJquery /></div>
            <div className='col-md-2 skill-icon'><BiLogoTypescript /></div>
          </div>
          <div className='skill-back row'>
            <div className='col-md-3 skill-icon'><SiCsharp /></div>
            <div className='col-md-3 skill-icon'><SiDotnet /></div>
            <div className='col-md-3 skill-icon'><BiLogoJava /></div>
            <div className='col-md-3 skill-icon'><BiLogoNodejs /></div>
          </div>
          <div className='skill-others row'>
            <div className='col-md-4 skill-icon'><SiMicrosoftsqlserver /></div>
            <div className='col-md-4 skill-icon'><DiMysql /></div>
            <div className='col-md-4 skill-icon'><BiLogoGithub /></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skill;