import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/authSlice';

const RouteListener = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Dispatch an action whenever the route changes
      dispatch(fetchUser());
    }, [location, dispatch]);
  
    return null; // This component does not need to render anything
  };
  
  export default RouteListener;