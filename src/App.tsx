import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import PostDetail from './pages/post_detail';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/post_detail/1">Post Detail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post_detail/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
