import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
const Header = () => {
  return (
    <header className='max-padd-container flexBetween py-2 bg-white'>
      <img src = {logo} alt = "" height={155} width={155}/>
      <img src ={profile} alt = "" height={46} width={46} />
    </header>
  )
}

export default Header