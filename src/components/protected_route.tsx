// src/components/ProtectedRoute.tsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/auth_context';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
