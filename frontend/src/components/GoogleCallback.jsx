import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const GoogleCallback = () => {
  const { setAuthData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { jwtData } = useRouteData(); // Access the jwtData from the loader

  React.useEffect(() => {
    if (jwtData) {
      setAuthData(jwtData);
      navigate('/home');
    }
  }, [location.state, setAuthData, navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallback;
