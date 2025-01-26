import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Logging for debugging
  console.log("Auth Check:", {
    path: location.pathname,
    authenticated: isAuthenticated,
    userRole: user?.role
  });

  // Root path handling
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" replace />;
    }
    
    return user?.role === "admin" 
      ? <Navigate to="/admin/dashboard" replace /> 
      : <Navigate to="/shop/home" replace />;
  }

  // Redirect unauthenticated users from protected routes
  const protectedRoutes = ['/admin', '/shop', '/profile'];
  const isProtectedRoute = protectedRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  if (!isAuthenticated && isProtectedRoute) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  // Prevent authenticated users from accessing login/register
  if (
    isAuthenticated && 
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    return user?.role === "admin" 
      ? <Navigate to="/admin/dashboard" replace />
      : <Navigate to="/shop/home" replace />;
  }

  // Admin-specific route protection
  if (isAuthenticated) {
    if (user?.role !== "admin" && location.pathname.includes("/admin")) {
      return <Navigate to="/unauth-page" replace />;
    }

    if (user?.role === "admin" && location.pathname.includes("/shop")) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return <>{children}</>;
}

CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    role: PropTypes.string
  }),
  children: PropTypes.node
};

export default CheckAuth;