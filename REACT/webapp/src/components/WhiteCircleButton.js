import React from 'react'

function WhiteCircleButton() {
  return (
    <div className='__whitecirclebuttons'>

    <a href="#" className=" __btn-background"><i className="fa-light fa-magnifying-glass"></i></a>
    <a href="#" className=" __btn-background"><i className="fa-light fa-code-compare fa-flip-vertical"></i></a>
    <a href="#" className=" __btn-background" id='heart'><i className="fa-light fa-heart"></i><span className="badge rounded-pill bg-theme">2</span></a>
    <a href="#" className=" __btn-background" id='cart'><i className="fa-light fa-bag-shopping"></i><span className="badge rounded-pill bg-theme">3</span></a>

  
    </div>
  )
}

export default WhiteCircleButton