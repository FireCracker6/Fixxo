import React from 'react'

import '../App.min.css';

import DiscountBanner from '../components/DiscountBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import HomeFooter from '../components/HomeFooter';

import PamelaReif from '../components/PamelaReif';
import ProductsBanner from '../components/ProductsBanner';
import Showcase from '../components/Showcase';
import SpecialOffer1 from '../components/SpecialOffer1';
import SpecialOffer2 from '../components/SpecialOffer2';
import Specialty from '../components/Specialty';
import NavbarGlobal from '../components/NavbarGlobal';
import ProductGridSection from '../components/sections/ProductGridSection';
import TestGridCard from '../components/TestGridCard';





function HomeView() {

 
  return (
    <>
  

       <NavbarGlobal />
   
   <Showcase />
    <ProductsBanner />
   <FeaturedProducts />
  <ProductGridSection /> 
   <PamelaReif />
   <Specialty />
   <SpecialOffer1 />
   <SpecialOffer2 />
   <DiscountBanner />
   <HomeFooter />
   <Footer />
   {/* <div style={{"height": "5000px"}}></div> */}
    </>
  )
}

export default HomeView