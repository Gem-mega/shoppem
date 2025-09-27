import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
