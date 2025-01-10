import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../core/constants';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const route = '/api/v1/auth/registration/';


        try {
            const res = await api.post(route, { email, password });
            console.log(res.data);
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate('/login');
        }

        catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <section className='reg-form-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor='password-one'>Password</label>
                <input
                    type='password'
                    id='password-one'
                    name='password'
                    required
                />
                <label htmlFor='password-two'>Repeat Password</label>
                <input
                    type='password'
                    id='password-two'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button>Register</button>
            </form>
        </section>
    );
}