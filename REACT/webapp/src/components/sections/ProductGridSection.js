import React from 'react'
import { ProductCard } from '../ProductCard'
import TestGridCard from '../TestGridCard';

const ProductGridSection = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;

  React.useEffect(() =>  {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ? <><TestGridCard /> <TestGridCard />  <TestGridCard /></> :   <div className="container"><div className="product-gallery-grid"> <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard /></div></div>;

}

export default ProductGridSection