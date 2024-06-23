import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { token } = useAuth();

  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;