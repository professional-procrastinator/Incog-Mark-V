import { Link } from 'react-router-dom'
import React from 'react'

export const WhatWillYouLearn = () => {
  return (
    <div className='whatWillYouLearn'>
      <h2 className='whatWillYouLearnHeading'>
        WHAT WILL YOU LEARN? 
      </h2>
      <p className='whatWillYouLearnDescr'>
        You will learn many web development related technologies such as - HTML, CSS, JS, REACT and NEXT! These will help you make websites, and make you a front end master.
      </p>
      <Link to='/courses'>See courses here</Link>
    </div>
  )
}
