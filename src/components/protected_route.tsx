import React from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = false; // ここは実際の認証状態に置き換え

  if (!isAuthenticated) {
    // 認証されていなければログインページへリダイレクト
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
