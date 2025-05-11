import React from 'react';
import { Outlet, NavLink } from 'react-router';
import './css/layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>My Blog</h1>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
          {" | "}
          <NavLink to="/articles" className={({ isActive }) => isActive ? 'active' : ''}>
            Article
          </NavLink>
          {" | "}
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
          {" | "}
          <NavLink to="/post_detail/1" className={({ isActive }) => isActive ? 'active' : ''}>
            Posts
          </NavLink>
        </nav>
      </header>
      
      <main className="main">
        {/* 各ページのコンテンツがここに表示される */}
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
