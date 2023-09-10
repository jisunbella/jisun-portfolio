import React from 'react'
import './Career.css'

const Career = () => {
  return (
    <section id='career'>
      <div className='container'>
        <h4 className='title'>Work Experience</h4>
        <div className='row'>
          <div className='col-md-5'>
            <h4 className='about-place'>Feelanet</h4>
            <p className='about-desc'>Web Developer<br/>2019.08 ~ 2022.06</p>
          </div>
          <div className='col-md-7'>
            <ul className='about-detail about-detail-work'>
              <li>Developed the drone tracking project by drawing tracks of drones with real-time data with Incheon International Airport.</li>
              <li>Developed solutions and improved the performance of solutions, and experienced in code reviews and testing.</li>
              <li>Using clean and efficient codes.</li>
              <li>Collaborated with the Designers and QA</li>
              <li><strong>Main Stack: JavaScript • Vue • Nuxt • jQuery • C# • .NET • MSSQL</strong></li>
            </ul>
          </div>
        </div>

        <h4 className='title'>Education</h4>
        <div className='row'>
          <div className='col-md-5'>
            <h4 className='about-place'>Zero To Mastery Academy</h4>
            <p className='about-desc'>Completed React Developer Course in 2023<br/>2023.01 ~ 2023.06</p>
          </div>
          <div className='col-md-7'>
            <ul className='about-detail'>
              <li>Studied basic of React.js and TypeScript.</li>
              <li>Developed an E-commerce website using React.js, Redux, TypeScript, Firebase.</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <h4 className='about-place'>Acorn Academy</h4>
            <p className='about-desc'>Completed a programming course<br/>2019.01 ~ 2019.06</p>
          </div>
          <div className='col-md-7'>
            <ul className='about-detail'>
              <li>Studied HTML, CSS, JavaScript, Java, and MySQL.</li>
              <li>Team project: developed a website for finding restaurants.</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <h4 className='about-place'>Incheon National Univ.</h4>
            <p className='about-desc'>Bachelor of International Trade<br/>2012.03 ~ 2017.02</p>
          </div>
          <div className='col-md-7'>
            <ul className='about-detail'>
              <li>Studied about logistics, economics, finance, and business.</li>
            </ul>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Career;