import React from 'react'
import './Skill.css'
import { BsFillCheckSquareFill, BsFillBootstrapFill } from 'react-icons/bs'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { RiVuejsFill, RiReactjsFill, RiFileExcel2Line } from 'react-icons/ri'
import { DiJqueryLogo, DiDotnet, DiMsqlServer } from 'react-icons/di'
import { SiTypescript, SiCsharp, SiJava, SiMysql } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'

const Skill = () => {
  return (
    <section id='skill' className='container skill__container'>
      <h3 className='title'>SKILL</h3>
      <div className='skill__content'>
        <div className='skill__article'>
          <h3>Front End</h3>
          <div className="skill__content-logo">
            <article className="skill__details">
              <IoLogoHtml5 className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <IoLogoCss3 className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <IoLogoJavascript className='skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <RiVuejsFill className='skill__details-icon' />
              <div>
                <h4>Vue.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <RiReactjsFill className='skill__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <DiJqueryLogo className='skill__details-icon' />
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillBootstrapFill className='skill__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <SiTypescript className='skill__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className='skill__article'>
          <h3>Back End</h3>
          <div className="skill__content-logo">
            <article className="skill__details">
              <SiCsharp className='skill__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <DiDotnet className='skill__details-icon' />
              <div>
                <h4>ASP.NET</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <DiMsqlServer className='skill__details-icon' />
              <div>
                <h4>SQL Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <IoLogoNodejs className='skill__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="skill__details">
              <SiJava className='skill__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="skill__details">
              <SiMysql className='skill__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className='skill__article'>
          <h3>ETC</h3>
          <div className="skill__content-logo">
            <article className="skill__details">
              <AiFillGithub className='skill__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillGithub className='skill__details-icon' />
              <div>
                <h4>Azure DevOps</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <AiFillGithub className='skill__details-icon' />
              <div>
                <h4>Swagger</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <RiFileExcel2Line className='skill__details-icon' />
              <div>
                <h4>MS Office</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skill__details">
              <FaHandshake className='skill__details-icon' />
              <div>
                <h4>Collaboration</h4>
                <small className='text-light'>-</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill