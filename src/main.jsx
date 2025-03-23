//#region imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './Components/Websites/Home Page/App.jsx';
import Challenges from './Components/Websites/Challenges/Challenges.jsx';
import CodeGenerators from './Components/Websites/Code generators/CodeGenerators.jsx';
import Portfolio from './Components/Websites/Portfolio/Portfolio.jsx';
import QuizPanel from './Components/Websites/Quiz/QuizPanel.jsx';
import AdminPanel from './Components/Websites/Admin Panel/AdminPanel.jsx';
import Forum from './Components/Websites/Forum/Forum.jsx';
import Login from './Components/Websites/Login & signup/Login.jsx';
import Signup from './Components/Websites/Login & signup/Signup.jsx';
import Blog from './Components/Websites/Blog/Blog';
import ResetPassword from './Components/Websites/Reset Password/ResetPassword.jsx';

import './common-styles.css';
//#endregion

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/challenges', element: <Challenges /> },
  {
    path: '/codeGenerators',
    element: <CodeGenerators />,
  },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/quizPanel', element: <QuizPanel /> },
  { path: '/forum', element: <Forum /> },
  { path: '/adminPanel', element: <AdminPanel /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/resetPassword', element: <ResetPassword /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
