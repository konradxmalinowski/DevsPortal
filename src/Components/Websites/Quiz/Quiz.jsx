import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Common components/Button/Button.jsx';

import './styles/Quiz.css';
import comeBackImg from '../../../assets/back.png';

const Quiz = ({ url }) => {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [answersRandomQuestion, setAnswersRandomQuestion] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [idxRandomNumber, setIdxRandomNumber] = useState(null);
  const [answerAStyle, setAnswerAStyle] = useState({
    backgroundColor: '#26282e',
  });
  const [answerBStyle, setAnswerBStyle] = useState({
    backgroundColor: '#26282e',
  });
  const [questionsData, setQuestionsData] = useState([...url]);
  const [isExpanded, setIsExpanded] = useState(false);

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const createQuestion = () => {
    setIsExpanded(true);
    if (questionsData.length === 0) return;

    const questions = questionsData.map((q) => q.name);
    const randomIdx = generateRandomNumber(0, questions.length - 1);
    const question = questions[randomIdx];
    const answers = [questionsData[randomIdx].a, questionsData[randomIdx].b];
    const correct = questionsData[randomIdx].correct;

    setRandomQuestion(question);
    setAnswersRandomQuestion(answers);
    setCorrectAnswers(correct);
    setIdxRandomNumber(randomIdx);
    setAnswerAStyle({ backgroundColor: '#26282e' });
    setAnswerBStyle({ backgroundColor: '#26282e' });
  };

  const checkCorrectness = (key) => {
    if (key === correctAnswers) {
      if (key === 'a') {
        setAnswerAStyle({ backgroundColor: 'var(--color1)' });
      }
      if (key === 'b') {
        setAnswerBStyle({ backgroundColor: 'var(--color1)' });
      }
    } else {
      if (key === 'a') {
        setAnswerAStyle({ backgroundColor: 'var(--color2)' });
      }
      if (key === 'b') {
        setAnswerBStyle({ backgroundColor: 'var(--color2)' });
      }
    }
  };

  return (
    <section
      className="quiz-wrapper-question"
      aria-label="Quiz Question Section"
    >
      {isExpanded && (
        <Link to="/quizPanel" aria-label="Go back to the quiz panel">
          <Button className="arrow-back">
            <img src={comeBackImg} alt="Go back arrow" />
          </Button>
        </Link>
      )}

      <span id="question-number" aria-label="Question number">
        {randomQuestion
          ? `Question ${idxRandomNumber + 1} / ${questionsData.length}`
          : ''}
      </span>
      <button
        id="generateButton"
        className="purple-button"
        onClick={createQuestion}
        aria-label="Generate a new question"
      >
        Generate Question
      </button>
      {randomQuestion && (
        <main>
          <section id="ui-question" aria-label="Current question">
            <p>{randomQuestion}</p>
          </section>
          <section id="ui-answers" aria-label="Answer options">
            <section
              className="answer answerA"
              style={answerAStyle}
              onClick={() => checkCorrectness('a')}
              aria-label={`Answer A: ${answersRandomQuestion[0]}`}
            >
              <p>{answersRandomQuestion[0]}</p>
            </section>
            <section
              className="answer answerB"
              style={answerBStyle}
              onClick={() => checkCorrectness('b')}
              aria-label={`Answer B: ${answersRandomQuestion[1]}`}
            >
              <p>{answersRandomQuestion[1]}</p>
            </section>
          </section>
        </main>
      )}
    </section>
  );
};

export default Quiz;
