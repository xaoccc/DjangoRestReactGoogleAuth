import { useLoaderData, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React, { useEffect } from 'react';

const GoogleCallback = () => {
  const jwtData = useLoaderData(); // Get the jwtData returned from the loader
  const { setJwtData } = useAuth();
  const navigate = useNavigate();

  // Update context and redirect to home
  React.useEffect(() => {
    if (jwtData) {
      setJwtData(jwtData); // Update the AuthContext with jwtData
      navigate('/home'); // Redirect to the Home route
    }
  }, [jwtData, setJwtData, navigate]);

  return <div>Processing...</div>;
};

export default GoogleCallback;
