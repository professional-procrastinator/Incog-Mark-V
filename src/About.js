import { Link } from 'react-router-dom'
import './About.css'
import React from 'react'

export default function About() {
  return (
    <div className='aboutUs'>
      <div className='aboutUsImageContainer'>
        <img className='aboutImage' src='https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Bootcamp-MOOC-Learning-Tech-Coding-Programming-Dice-1024x640.png' />
      </div>
      <div className='aboutText'>
        <h2 className='aboutHeading'>ABOUT US</h2>
        <p className='aboutDescr'> A coding bootcamp, which will help you learn web development. This is suitable for any age, and you will get projects to make too after finishing a course! </p>
        <br />
        <Link className='readMoreLink' to='/about'>Read more</Link>
      </div>
    </div>
  )
}
