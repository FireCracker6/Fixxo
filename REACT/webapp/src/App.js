
import './App.min.css';
import FeaturedProducts from './components/FeaturedProducts';
import Navbar from './components/Navbar';
import ProductsBanner from './components/ProductsBanner';
import Showcase from './components/Showcase';






function App() {
  return (
   <>

    <Navbar />
   
    <Showcase />

    <ProductsBanner />
    <FeaturedProducts />
    <div style={{"height": "5000px"}}></div>
    
  
   </>
  );
}

export default App;
