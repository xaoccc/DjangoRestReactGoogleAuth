import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { handleGoogleCallback } from './loader.js';
import GoogleCallback from "./components/GoogleCallback.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/google/callback",
    loader: handleGoogleCallback,
    element: GoogleCallback,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;