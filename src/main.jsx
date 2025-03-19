import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './Components/Websites/Home Page/App.jsx';
import Challenges from './Components/Websites/Challenges/Challenges.jsx';
import CodeGenerators from './Components/Websites/Code generators/CodeGenerators.jsx';
import Portfolio from './Components/Websites/Portfolio/Portfolio.jsx';
import Quiz from './Components/Websites/Quiz/Quiz.jsx';
import AdminPanel from './Components/Websites/Admin Panel/AdminPanel.jsx';
import Forum from './Components/Websites/Forum/Forum.jsx';
import Login from './Components/Websites/Login & signup/Login.jsx';
import Signup from './Components/Websites/Login & signup/Signup.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Components/Websites/Blog/Blog';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/challenges', element: <Challenges /> },
  {
    path: '/codeGenerators',
    element: <CodeGenerators />,
  },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/forum', element: <Forum /> },
  { path: '/adminPanel', element: <AdminPanel /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
