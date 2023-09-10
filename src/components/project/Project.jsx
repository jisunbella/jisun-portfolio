import React from 'react';
import { useState } from 'react';

import './Project.css';
import './Card.css';
import './CardSlider.css'
import data from './ProjectData';


const Project = () => {
  const [activeCat, setActiveCat] = useState('all');

  return (
    <section id='project' className='container project-container'>
      <h3 className='title'>PROJECT</h3>
      {/*
        <div className='project-category'>
        <button
          onClick={() => { setActiveCat('all') }}
          className={activeCat === 'all' ? 'btn active' : 'btn'}
        >All</button>
        <button
          onClick={() => { setActiveCat('work') }}
          className={activeCat === 'work' ? 'btn active' : 'btn'}
        >Work</button>
        <button
          onClick={() => { setActiveCat('personal') }}
          className={activeCat === 'personal' ? 'btn active' : 'btn'}
        >Personal</button>
      </div>
  */}
      <div className='project-content'>
        <CardSlider data={data} />
      </div>
    </section>
  )
}

const Card = ({ image, title, desc, stack, category }) => {
  return (
    <div className='project-outer'>
      <div className='project-inner'>
        <img src={image} alt={title} />
      </div>
      <div className='project-desc'>
        <h5>{title}</h5>
        <div>{stack}</div>
        <p>{desc}</p>
        {/*<a href="https://github.com/jisunbella/jshop" target='_blank' rel='noreferrer'>GitHub</a>*/}
      </div>
    </div>
  )
};

const CardSlider = ({ data }) => {
  return (
    <div className="card-slider">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          desc={item.desc}
          stack={item.stack}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default Project;