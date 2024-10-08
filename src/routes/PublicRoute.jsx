// components/PublicRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PublicRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to="/greeting" />;
  }

  return children;
};

export default PublicRoute;
