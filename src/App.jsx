
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
