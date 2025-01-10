import appRoutes from './routes.js'
import Login from "../../components/Login.jsx";
import Register from "../../components/Register.jsx";
import Home from "../../components/Home.jsx";
import NotFound from "../../components/NotFound.jsx";
import GoogleCallback from "../../components/GoogleCallback.jsx";
import { handleGoogleCallback } from '../../loader.js';

const routesConfig = [
    {
        path: appRoutes.INDEX,
        element: <Login />
    },
    {
        path: appRoutes.REGISTER,
        element: <Register />
    },
    {
        path: appRoutes.HOME,
        element: <Home />
    },
    {
        path: appRoutes.UNKNOWN,
        element: <NotFound />
    },
    {
        path: appRoutes.GOOGLE_CALLBACK,
        loader: handleGoogleCallback,
        element: <GoogleCallback />
    },

]

export default routesConfig;