import { googleCallbackUri, googleClientId } from '../config.js';
import { Link } from 'react-router-dom';

export default function Login() {
    const googleSignInUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${googleCallbackUri}&prompt=consent&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile&access_type=offline`;

    return (
        <section>
            <h1>Welcome!</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
                <button>Log in</button>
            </form>
            <p>or</p>
            <button>
                <Link to={googleSignInUrl}>Sign in with Google</Link>
            </button>

        </section>

    );
}