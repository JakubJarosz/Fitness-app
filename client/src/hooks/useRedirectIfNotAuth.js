import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useRedirectIfNotAuthenticated = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.authuser.isAuthenticated);
    
    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/register');
      }
    }, [isAuthenticated, navigate]);
  };
  
  export default useRedirectIfNotAuthenticated;