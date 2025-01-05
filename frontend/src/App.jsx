import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { AuthProvider } from './context/AuthContext';
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> 
  );
}

export default App;