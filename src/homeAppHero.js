import { Link } from 'react-router-dom'
import './homeAppHeroMain.css'
import React from 'react'

export const HomeAppHero = () => {
  // MAIN HOME APP HERO COMPONENT
  return (
    <div className='homeAppHeroMain'>
      <div className='homeAppHeroLeftArea'>
        <h1 className='homeAppHeroHeading'>
          A WEB DEV CODING BOOTCAMP FOR YOU
        </h1>
        <p className='homeAppHeroDesc'>
          A coding bootcamp for beginners planning to learn web development. You will learn some technologies that will help you make websites, there will be projects too! So what are you waiting for let's get started! 
        </p>
        <Link className='homeAppHeroGetStarted' to='/register'>Get started</Link>
      </div>
      <div className='homeAppHeroRightArea'>
        <img className='homeAppHeroImage' src='https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?size=338&ext=jpg' />
      </div>
    </div>
  )
}
