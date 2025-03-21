import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';

import './Quiz.css';
import QuizItem from './QuizItem.jsx';

const Quiz = () => {
  return (
    <>
      <Header />
      <div className="quiz-wrapper ">
        <section>
          <QuizItem
            label="INF.02"
            onClick={() => window.open('https://www.google.com')}
            description="Test your knowledge of computer system administration and peripheral device operation. Prepare for practical vocational tasks!"
          />
          <QuizItem
            label="INF.03"
            onClick={() =>
              window.open('https://portfolio-website.ct8.pl/websites/exam-test')
            }
            description="A quiz on creating and managing websites and databases. Perfect for aspiring programmers and IT administrators."
          />
          <QuizItem
            label="INF.04"
            onClick={() => window.open('https://www.google.com')}
            description="Tackle questions about designing and programming desktop and mobile applications. Enhance your coding skills!"
          />
          <QuizItem
            label="English B2"
            onClick={() => window.open('https://www.google.com')}
            description="Assess your English skills at B2 level. The quiz covers grammar, vocabulary, and reading comprehension."
          />
          <QuizItem
            label="German B1"
            onClick={() => window.open('https://www.google.com')}
            description="Test your German at B1 level! The quiz includes grammar, vocabulary, and basic communication exercises."
          />
          <QuizItem
            label="IT - basics"
            onClick={() => window.open('https://www.google.com')}
            description="Learn the basics of IT: hardware, software, and computer networks. A great starting point for tech beginners!"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
