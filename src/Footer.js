import React from 'react'

export const Footer = () => {
  const footerStyles = {
    padding: "15px",
    background: "black",
    textAlign: "center",
    color: "white",
    width: "100%",
  }
  return (
    <footer style={ footerStyles } className='footer'>
      &copy; WebieCamp 2021 - 2022
    </footer>
  )
}
