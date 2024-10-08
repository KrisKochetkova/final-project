import React, {useContext, useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PrivateRoute = ({children}) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setCurrentUser(parsedUser);
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
      setLoading(false);
    }, [setCurrentUser]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  
    return children;
};

export default PrivateRoute;