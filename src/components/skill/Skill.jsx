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
          <h1><RiJavascriptFill /> <BiLogoReact /> <BiLogoVuejs /> <TbBrandNuxt /> <BiLogoJquery /> <BiLogoTypescript /></h1>
          <h1><SiCsharp /> <SiDotnet /> <BiLogoJava /> <BiLogoNodejs /></h1>
          <h1><SiMicrosoftsqlserver /> <DiMysql /> <BiLogoGithub /></h1>
        </div>
      </div>
    </section>
  )
}

export default Skill;