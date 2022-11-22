import React from 'react'
import './Portfolio.css'
import PortfolioArticle from './PortfolioArticle'
import { useState } from 'react'

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState('all');

  return (
    <section id='portfolio' className='container portfolio__container'>
      <h3 className='title'>PROJECT</h3>
      <div className='portfolio__category'>
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

      <PortfolioArticle cat={activeCat} />
    </section>
  )
}

export default Portfolio