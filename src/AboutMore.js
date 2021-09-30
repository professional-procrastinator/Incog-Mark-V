import { Link } from 'react-router-dom'
import './About.css'
import React from 'react'

export const AboutMore = () => {
  return (
    <div className='aboutUsBig'>
      <div className='aboutText'>
        <h2 className='aboutHeading'>ABOUT US</h2>
        <p className='aboutDescr'>WebieCamp is a coding bootcamp, which will help you learn web development. This is suitable for any age, and you will get projects to make too after finishing a course! This is a full front end course on web development, you will learn some javascript front end libraries too such as react, and a framework for it which is next. If you are interested, get started with your journey and we hope you will learn something new! </p>
        <Link className='aboutBack' to='/'>Back to Home</Link>
      </div>
    </div>
  )
}
