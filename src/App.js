import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
    
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
