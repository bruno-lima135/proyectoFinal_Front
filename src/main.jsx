import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
   },

  {
    path: '/login', 
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
