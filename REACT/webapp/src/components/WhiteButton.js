 import React from 'react'
import { NavLink } from 'react-router-dom'

const WhiteButton= ({link, text}) => {
  return (
<div className='buttons'>
    <NavLink  className="white-button btn-border">

<div to={link} >   
<p >{text}</p>  </div>

    </NavLink>
    </div>
  
  )
}

export default WhiteButton 