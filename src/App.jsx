import React from 'react';
import "./App.css";
import Home from './pages/Home/Home';
import Founder_words from './pages/Founder_words/Founder_words';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/founder_story' element={<Founder_words />} />
        </Routes>
    
  );
}

export default App;
