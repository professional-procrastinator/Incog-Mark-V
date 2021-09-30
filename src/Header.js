import './header.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

// Header component code

export const Header = ( { title } ) => {
  // Getting title as a prop and destructuring it
  return (
    <header className='header'>
      {/* RENDERING HEADER */}
      <div className='headerLeftArea'>
        <div className='title'><i className="fa fa-keyboard-o" aria-hidden="true"></i> &nbsp; { title }</div>
      </div>
      <div className='headerRightArea'>
        <nav className='nav'>
          <ul className='navList'>
            <li className='navListItem'>
              <Link className='navLink' to='/'>Home</Link>
            </li>
            <li className='navListItem'>
              <Link className='navLink' to='/courses'>Courses</Link>
            </li>
            <li className='navListItem'>
              <Link className='navLink' to='/about'>About</Link>
            </li>
            <li className='navListItem'>
              <Link className='navLink' to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "title",
}

export default Header;