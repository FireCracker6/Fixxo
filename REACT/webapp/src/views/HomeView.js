import React from 'react'

import '../App.min.css';

import DiscountBanner from '../components/DiscountBanner';
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
import DiscountCard2 from '../components/DiscountCardSection';
import { useState } from 'react';
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections';





const HomeView = () => {
  
  window.top.document.title = "Fixxo."

  const [featuredProducts, setFeaturedProducts ] = useState([
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}

  ])
  const [topProducts, setTopProducts ] = useState([
   
    {id: 5, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 16, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 7, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 8, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}
  ])


  /* latest product */

  const [latestProduct, setLatestTopProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ])

  
  /* best selling product */

  const [bestProduct, setBestProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ])

   /* topRating product */

   const [topRatingProduct, setTopRatingProduct ] = useState([
   
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"}
   
  ])



 
  return (
    <>


       <NavbarGlobal />
    
   
   <Showcase />
    <ProductsBanner />
 
  <ProductGridSection title="Featured Products" products={featuredProducts} /> 
  <ProductGridSection title="Top Products" products={topProducts} /> 
   <PamelaReif />
   <Specialty title={"Our Specialty"} />
  <SpecialOffer1 products={featuredProducts} />
   <SpecialOffer2 products={topProducts}  /> 
   <DiscountBanner title={"Up to 70% off*"} />
   <DiscountCard2 />
   <HomeFooter />
   <Footer />

    </>
  )
}

export default HomeView