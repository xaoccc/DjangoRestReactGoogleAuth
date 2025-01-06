import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const jwtData = new URLSearchParams(location.search).get('jwtData');
    const parsedJwtData = jwtData ? JSON.parse(jwtData) : null;

    console.log(JSON.parse(jwtData));

    return (
        <section>
            <nav>
                <img src="../../public/logo.png" alt="logo" />
            </nav>
            {parsedJwtData ? (
                <h2>Welcome, {parsedJwtData.user.first_name}!</h2>
            ) : (
                <p>No JWT data found</p>
            )}
        </section>
    );
};

export default Home;