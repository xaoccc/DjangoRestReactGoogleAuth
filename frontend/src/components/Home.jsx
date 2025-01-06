import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { jwtData } = useAuth();

    useEffect(() => {
      if (jwtData) {
        console.log('JWT Data:', jwtData);
      }
    }, [jwtData]);

    return (
        <section>
            <nav>
                <img src="../../public/logo.png" alt="logo" />
            </nav>
            {jwtData ? (
                <h2>Welcome, {jwtData.user.first_name}!</h2>
            ) : (
                <p>No JWT data found</p>
            )}
        </section>
    );
};

export default Home;