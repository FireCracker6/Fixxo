import React from 'react'
import BlackButton from './BlackButton'

function ProductsFlash() {
  return (


<>

<div className="__GRID-container">
        <div className="item item-1">
            <div className="prod-text">
              <h2><strong style={{ whiteSpace: "pre-line" }}>{"Winter Clearance<br/>Up To 70% OFF".split("<br/>").join("\n")}</strong> </h2>
          
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
           
            <BlackButton />
         
        </div>
        </div>
        <div className="item item-2">
            <div className="prod-text">
                 <h2><strong style={{ whiteSpace: "pre-line" }}>{"New<br/>Arrivals".split("<br/>").join("\n")}</strong></h2>
            
                 <BlackButton />
           </div>
        </div>
    </div>
    
    </>
   
  )
}




export default ProductsFlash