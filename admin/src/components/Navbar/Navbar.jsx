import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img className='logo'src={assets.mealmate_logo1} ></img>
        <img className='profile'src={assets.profile_image} ></img>
    </div>
  )
}

export default Navbar