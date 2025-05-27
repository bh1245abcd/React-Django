import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../src/pages/Contact.jsx'
import Categorie from '../src/pages/Categories.jsx'
import Signup from '../src/pages/homepages/signup.jsx'
import Cart from '../src/pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx';
import WishlistProvider from './pages/WishlistContext.jsx';
import Navbar from './pages/homepages/navbar.jsx';
import Footer from './pages/homepages/Footer.jsx';
import Login from './pages/homepages/login.jsx';
import Blog from './pages/Blog.jsx'
import Men from './pages/men.jsx'
import Women from './pages/women.jsx'
import Kid from './pages/kid.jsx'
import Product from './pages/product.jsx';
import About from './pages/About.jsx'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Categories' element={<Categorie/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/kid' element={<Kid/>} />    
        <Route path='/Product' element={<Product/>} />    
        <Route path='/About' element={<About/>} />        
        <Route path='/Product' element={<Product/>} />        
        <Route path='/Blog' element={<Blog/>} />        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
