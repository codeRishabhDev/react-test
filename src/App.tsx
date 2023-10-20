import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import ThankYouPage from './components/thankYouPage/thankYouPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
