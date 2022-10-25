import React from 'react'
import WhiteButton from './WhiteButton'
import { ProductCard } from './ProductCard'
import MobileGridCard from './MobileGridCard'
import { useState } from 'react'
import ProductCard2 from './ProductCard2'

const SpecialOffer2 = ({product}) => {

  const [products, setProducts ] = useState([
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}
  ])



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
     <div className="products-grid-wrapper"> 
              
               {
                products.map(product =>    <MobileGridCard product={product} />)

              }
               
               
               
                </div> 
                       
                        </div>

                  </div>

          
                  
                 
                        

            </section>
      </div> :  
      
      
            <div className="container-fluid">
                    <section className="special-offer-2">
                      
                    <div className="item-1">
                              
                              <div className="products-grid-wrapper">
        
                                
                      {
                products.map(product =>    <ProductCard2 item={product} />)

              }
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