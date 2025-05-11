import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Layout from './layout';
import Home from './pages/home';
import About from './pages/about';
import PostDetail from './pages/post_detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post_detail/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
