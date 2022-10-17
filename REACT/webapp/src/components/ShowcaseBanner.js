import React from 'react'
import RedButton from './RedButton'

function ShowcaseBanner() {
  return (
<>
        <div className='sale-banner'>
        <h1><strong style={{ whiteSpace: "pre-line" }}>{"SALE UP <br/>To 50% OFF".split("<br/>").join("\n")}</strong> </h1>
       
           
             <p>Online shopping free home delivery over $100</p>
             <div className='top-banner-btn'> <RedButton /> </div>
            </div>
    
            </>
       
    
  )
}

export default ShowcaseBanner