import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import About from './pages/About';


const App = () => {
  // Get the current location to determine which components to render
  const location = useLocation();

  // Define the paths where Navbar and Footer should not be rendered
  const noNavbarFooterPaths = ['/login'];
  return (
    <>

      {!noNavbarFooterPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      {!noNavbarFooterPaths.includes(location.pathname) && <Footer />}

    </>
  )
}

export default App