import React from 'react'
import { ProductCard } from '../ProductCard'
import MobileGridCard from '../MobileGridCard';

const ProductGridSection = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ? <><MobileGridCard /> <MobileGridCard />  <MobileGridCard /></> :   
  
  <div className="container">
    
              <div className="product-gallery-grid"> <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </div>
  </div>;

}

export default ProductGridSection