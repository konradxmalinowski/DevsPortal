//#region imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import quizInf03 from './Quiz questions/quiz-inf.03.json';
import quizInf04 from './Quiz questions/quiz-inf.04.json';
import quizInf02 from './Quiz questions/quiz-inf.02.json';
import quizEnglish from './Quiz questions/quiz-english.json';
import quizGerman from './Quiz questions/quiz-german.json';
import quizIT from './Quiz questions/quiz-it.json';

import App from './Components/Websites/Home Page/App.jsx';
import Challenges from './Components/Websites/Challenges/Challenges.jsx';
import CodeGenerators from './Components/Websites/Code generators/CodeGenerators.jsx';
import Portfolio from './Components/Websites/Portfolio/Portfolio.jsx';
import QuizPanel from './Components/Websites/Quiz/QuizPanel.jsx';
import Quiz from './Components/Websites/Quiz/Quiz.jsx';
import AdminPanel from './Components/Websites/Admin Panel/AdminPanel.jsx';
import Login from './Components/Websites/Login & signup/Login.jsx';
import Signup from './Components/Websites/Login & signup/Signup.jsx';
import Blog from './Components/Websites/Blog/Blog';
import ResetPassword from './Components/Websites/Reset Password/ResetPassword.jsx';
import NotFound from './Components/Websites/NotFound/NotFound.jsx';
import PasswordGenerator from './Components/Websites/Password generator/PasswordGenerator.jsx';

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
  {
    path: '/quiz-inf.02',
    element: <Quiz url={quizInf02} />,
  },
  {
    path: '/quiz-inf.03',
    element: <Quiz url={quizInf03} />,
  },
  {
    path: '/quiz-inf.04',
    element: <Quiz url={quizInf04} />,
  },
  {
    path: '/quiz-english',
    element: <Quiz url={quizEnglish} />,
  },
  {
    path: '/quiz-german',
    element: <Quiz url={quizGerman} />,
  },
  {
    path: '/quiz-it',
    element: <Quiz url={quizIT} />,
  },
  { path: '/adminPanel', element: <AdminPanel /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/resetPassword', element: <ResetPassword /> },
  { path: '/generate-password', element: <PasswordGenerator /> },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
