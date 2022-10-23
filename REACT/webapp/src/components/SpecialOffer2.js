import React from 'react'
import WhiteButton from './WhiteButton'
import { ProductCard } from './ProductCard'
import MobileGridCard from './MobileGridCard'

const SpecialOffer2 = () => {


      const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 1200;
    
      React.useEffect(() =>  {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, [] );

      return width < breakpoint ? 
      <div className="container-fluid">
    
           
          <section className="special-offer-2">
          <div className="container">
                  <div class="item-2">
                  <h2>2 FOR USD $29</h2>
                  <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
                  </div>
                  </div>
            
                  <div className="item-1 ">
                        
                        <div className="products-grid-wrapper ">

                        <MobileGridCard />
                        <MobileGridCard />
                        </div>

                  </div>

          
                  
                 
                        

            </section>
      </div> :  
      
      
            <div className="container-fluid">
                    <section className="special-offer-2">
                      
                    <div className="item-1">
                              
                              <div className="products-grid-wrapper">
        
                                  <ProductCard />
                                  <ProductCard />
                                  <ProductCard />
                                  <ProductCard />
                              </div>
        
                          </div>
                                
                      <div className="item-2">
                        <h2>2 FOR USD $29</h2>
                        <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
                      </div>
                      
                
                              
                    
                    </section>
            </div>; 
    }

  


export default SpecialOffer2