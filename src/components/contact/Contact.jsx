import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact' className='container'>
      <h3 className='title'>CONTACT</h3>
      <div className="contact-content">
        <div className='contact-element'>
          +82 10-9494-9980
        </div>
        <div className='contact-element'>
          <a href='mailto:easysun93@gmail.com'>easysun93@gmail.com</a>
        </div>
        <div className='contact-element'>
          <a href="https://www.linkedin.com/in/jisunbella/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className='contact-element'>
          <a href="https://github.com/jisunbella" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
};

export default Contact