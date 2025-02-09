import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Fruits from './pages/Fruits';
import Vegetables from './pages/Vegetables';
import Spices from './pages/Spices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="spices" element={<Spices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;