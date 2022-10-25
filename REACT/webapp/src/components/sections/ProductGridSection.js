import React, { useState } from 'react'

import MobileGridCard from '../MobileGridCard';
import ProductCard2 from '../ProductCard2';


const ProductGridSection = () => {

  const [products, setProducts ] = useState([
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"},
    {id: 5, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 6, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 7, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}
  ])

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ? <>
  
     
              {
                products.map(product =>     <MobileGridCard item={product} />)

              }
{/*   <MobileGridCard /> <MobileGridCard />  <MobileGridCard /> */}
  
  </> :   
  
  <div className="container">
    
              <div className="product-gallery-grid"> 
              {
                products.map(product =>    <ProductCard2 item={product} />)

              }
           
                 
              </div>
  </div>;

}

export default ProductGridSection