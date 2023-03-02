// ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import  AuthContext  from '../context/AuthContext';

function ProtectedRoute({ path, ...props }) {
  const { user } = useContext(AuthContext);
  return user ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate replace to="/login" />
  );
}

export default ProtectedRoute;
