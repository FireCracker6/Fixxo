import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenuIcon = ({link, icon}) => {
  return (
   
    <NavLink className=" __btn-background" to={link}>
        <i className={icon}></i>
    </NavLink>
  
  )
}

export default MainMenuIcon