import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { userInfo } = useSelector(state => state.authReducer);

  if (!userInfo) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render child routes/components
  return <Outlet />;
}
