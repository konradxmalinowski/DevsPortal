import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import QuizItem from './QuizItem.jsx';

import './Quiz.css';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

const QuizPanel = () => {
  return (
    <>
      <Header />
      <div className="quiz-wrapper" aria-label="Quiz Panel Section">
        <section aria-label="Available quizzes">
          <QuizItem
            label="INF.02"
            description="Test your knowledge of computer system administration and peripheral device operation. Prepare for practical vocational tasks!"
            to="/quiz-inf.02"
            handleScrollIntoView={handleScrollIntoView}
          />
          <QuizItem
            label="INF.03"
            description="A quiz on creating and managing websites and databases. Perfect for aspiring programmers and IT administrators."
            to="/quiz-inf.03"
            handleScrollIntoView={handleScrollIntoView}
          />
          <QuizItem
            label="INF.04"
            description="Tackle questions about designing and programming desktop and mobile applications. Enhance your coding skills!"
            to="/quiz-inf.04"
            handleScrollIntoView={handleScrollIntoView}
          />
          <QuizItem
            label="English B2"
            description="Assess your English skills at B2 level. The quiz covers grammar, vocabulary, and reading comprehension."
            to="/quiz-english"
            handleScrollIntoView={handleScrollIntoView}
          />
          <QuizItem
            label="German B1"
            description="Test your German at B1 level! The quiz includes grammar, vocabulary, and basic communication exercises."
            to="/quiz-german"
            handleScrollIntoView={handleScrollIntoView}
          />
          <QuizItem
            label="IT - basics"
            description="Learn the basics of IT: hardware, software, and computer networks. A great starting point for tech beginners!"
            to="/quiz-it"
            handleScrollIntoView={handleScrollIntoView}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default QuizPanel;
