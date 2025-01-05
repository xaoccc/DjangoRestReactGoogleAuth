import { googleCallbackUri, googleClientId } from '../config.js';

export default function Login() {
    const googleSignInUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${googleCallbackUri}&prompt=consent&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile&access_type=offline`;

    return (
        <section>
            <h1>Welcome!</h1>
            <button>
                <a href={googleSignInUrl}>Sign in with Google</a>
            </button>
        </section>

    );
}