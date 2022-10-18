
import './App.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import DiscountBanner from './components/DiscountBanner';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import HomeFooter from './components/HomeFooter';
import Navbar from './components/Navbar';
import PamelaReif from './components/PamelaReif';
import ProductsBanner from './components/ProductsBanner';
import Showcase from './components/Showcase';
import SpecialOffer1 from './components/SpecialOffer1';
import SpecialOffer2 from './components/SpecialOffer2';
import Specialty from './components/Specialty';
import Home from './views/HomeView';
import Contacts from './views/ContactsView';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';






function App() {
  return (
   <>

  

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeView />}/>
      <Route path='/productdetails' element={<ProductDetailsView />}/>
      <Route path='/contacts' element={<ContactsView />}/>
      <Route path='*' element={<NotFoundView />}/>

    </Routes>
   
    </BrowserRouter>
   </>
  );
}

export default App;
