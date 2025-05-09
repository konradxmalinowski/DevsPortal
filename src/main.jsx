import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import quizInf03 from './utils/Quiz questions/quiz-inf.03.json';
import quizInf04 from './utils/Quiz questions/quiz-inf.04.json';
import quizInf02 from './utils/Quiz questions/quiz-inf.02.json';
import quizEnglish from './utils/Quiz questions/quiz-english.json';
import quizGerman from './utils/Quiz questions/quiz-german.json';
import quizIT from './utils/Quiz questions/quiz-it.json';

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
import ScrollToTop from './utils/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/codeGenerators" element={<CodeGenerators />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quizPanel" element={<QuizPanel />} />
        <Route path="/quiz-inf.02" element={<Quiz url={quizInf02} />} />
        <Route path="/quiz-inf.03" element={<Quiz url={quizInf03} />} />
        <Route path="/quiz-inf.04" element={<Quiz url={quizInf04} />} />
        <Route path="/quiz-english" element={<Quiz url={quizEnglish} />} />
        <Route path="/quiz-german" element={<Quiz url={quizGerman} />} />
        <Route path="/quiz-it" element={<Quiz url={quizIT} />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/generate-password" element={<PasswordGenerator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
