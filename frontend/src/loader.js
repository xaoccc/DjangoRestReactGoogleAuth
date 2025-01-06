import './index.css';
import { redirect } from 'react-router-dom';


export const handleGoogleCallback = async (context) => {
  // Exchange callback's code for JWT tokens

  const { request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (code) {
    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/google/', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const jwtData = await response.json();
      console.log(jwtData);

      if (!response.ok) {
        throw new Error(jwtData.error || 'Failed to fetch JWT data');
      }

      return jwtData;
      
    } catch (err) {
      console.error(err);
      throw new Response('Bad request', { status: 400 });
    }
  }

  throw new Response('Not Found', { status: 404 });
};