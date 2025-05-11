import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Layout from './layout';
import Home from './pages/home';
import About from './pages/about';
import Articles from './pages/article';
import ArticleDetail from './pages/article_detail';
import Comments from './pages/comments';
import PostDetail from './pages/post_detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post_detail/:id" element={<PostDetail />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
