import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { FaGithubAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='container contact__container'>
      <h3 className='title'>CONTACT</h3>
      <div className="contact__content">
        <div className='contact__content-element'>
          <MdOutlineEmail className='contact__content-logo' />
          <div><a href='mailto:jisun.bella.lee@gmail.com'>jisun.bella.lee@gmail.com</a></div>
        </div>
        <div className='contact__content-element'>
          <AiOutlinePhone className='contact__content-logo' />
          <div>0466 117 227</div>
        </div>
        <div className='contact__content-element'>
          <RiLinkedinBoxFill className='contact__content-logo' />
          <div><a href="https://www.linkedin.com/in/jisunbella/" target="_blank">jisunbella</a></div>
        </div>
        <div className='contact__content-element'>
          <FaGithubAlt className='contact__content-logo' />
          <div><a href="https://github.com/jisunbella" target="_blank">jisunbella</a></div>
        </div>
      </div>
    </section>
  )
}

export default Contact