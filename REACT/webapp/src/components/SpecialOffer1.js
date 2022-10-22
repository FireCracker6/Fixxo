import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import TestGridCard from './TestGridCard';
import WhiteButton from './WhiteButton'

const SpecialOffer1 =()=> {
 

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;

  React.useEffect(() =>  {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );
  return width < breakpoint ? 
  <div className="container-fluid">

          <section class="special-offer-1">
            

                      <div className="container">
            <div class="item-1">
              <h2>2 FOR USD $29</h2>
              <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
            </div>
            </div>
            
            
            <div className="item-2">
                    
                <div className="products-grid-wrapper">

                  <TestGridCard />
              
                </div>
            </div>
                    
          
          </section>
  </div> :  
  
  
        <div className="container-fluid">
                <section className="special-offer-1">
                  

                            
                  <div className="item-1">
                    <h2>2 FOR USD $29</h2>
                    <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
                  </div>
                  
                  <div className="item-2">
                          
                      <div className="products-grid-wrapper">

                          <ProductCard />
                          <ProductCard />
                          <ProductCard />
                          <ProductCard />
                      </div>

                  </div>
                          
                
                </section>
        </div>; 
}

export default SpecialOffer1