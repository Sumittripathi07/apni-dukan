import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Regester from './components/Regester';
import Login from './components/Login';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/regester' element={<Regester/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
    
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
