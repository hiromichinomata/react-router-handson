import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Layout from './layout';
import NotFound from './pages/not_found';
import ProtectedRoute from './components/protected_route';
import About from './pages/about';
import Articles from './pages/article';
import ArticleDetail from './pages/article_detail';
import Comments from './pages/comments';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';
import PostDetail from './pages/post_detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          {/* 存在しないルートのキャッチオール */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
