import React from 'react'
import MainMenuIcon from './MainMenuIcon';
function WhiteCircleButton() {
  return (
    <div className='__whitecirclebuttons'>
     <MainMenuIcon link="/search" icon="fa-light fa-magnifying-glass" />
     <MainMenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
     <MainMenuIcon link="/wishlist" icon="fa-light fa-heart" />
     <MainMenuIcon link="/shoppingcart" icon="fa-light fa-bag-shopping" />

    </div>
  )
}

export default WhiteCircleButton