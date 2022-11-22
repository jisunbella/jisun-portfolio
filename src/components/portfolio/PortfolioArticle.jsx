import React, { useState } from 'react'
import data from './PortfolioData'
import './PortfolioArticle.css'

const PortfolioArticle = (props) => {
  const cat = props.cat;
  const selectedCat = data.filter(x => x.category === cat);

  if (cat === 'all') {
    return (
      <div className='portfolio__contents'>
        {
          data.map(({ id, title, imgSrc, category, desc, stack }) => {
            return (
              <article key={id} className='portfolio__content'>
                <img src={imgSrc[0]} alt={title} />
                <div className='portfolio__desc'>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <p>{stack}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className='portfolio__contents'>
        {
          selectedCat.map(({ id, title, imgSrc, category, desc, stack }) => {
            return (
              <article key={id} className='portfolio__content'>
                <img src={imgSrc[0]} alt={title} />
                <div className='portfolio__desc'>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <p>{stack}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    )
  }
}


export default PortfolioArticle