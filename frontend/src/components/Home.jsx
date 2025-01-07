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
                <ul>
                    {jwtData ? (
                        <>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/aboutus">About Us</a>
                            </li>
                            <li>
                                <a href="/logout">Logout</a>
                            </li>
                        </>
                    ) : (
                        <li>
                            <a href="/">Login</a>
                        </li>
                    )}


                </ul>
            </nav>
            {jwtData ? (
                <h2>Welcome, {jwtData.user.first_name}!</h2>
            ) : (
                <p>You are not logged in</p>
            )}
        </section>
    );
};

export default Home;