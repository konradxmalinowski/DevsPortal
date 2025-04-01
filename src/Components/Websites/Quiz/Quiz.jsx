import React, { useState } from 'react';
import './Quiz.css';

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

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const createQuestion = () => {
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
      if (key === 'a') setAnswerAStyle({ backgroundColor: '#006A67' });
      if (key === 'b') setAnswerBStyle({ backgroundColor: '#006A67' });
    } else {
      if (key === 'a') setAnswerAStyle({ backgroundColor: 'rgb(201, 57, 32)' });
      if (key === 'b') setAnswerBStyle({ backgroundColor: 'rgb(201, 57, 32)' });
    }
  };

  return (
    <section className="quiz-wrapper-question">
      <span id="question-number">
        {randomQuestion
          ? `Question ${idxRandomNumber} / ${questionsData.length}`
          : ''}
      </span>
      <button id="generateButton" onClick={createQuestion}>
        Generate Question
      </button>
      {randomQuestion && (
        <main>
          <section id="ui-question">
            <p>{randomQuestion}</p>
          </section>
          <section id="ui-answers">
            <section
              className="answer answerA"
              style={answerAStyle}
              onClick={() => checkCorrectness('a')}
            >
              <p>{answersRandomQuestion[0]}</p>
            </section>
            <section
              className="answer answerB"
              style={answerBStyle}
              onClick={() => checkCorrectness('b')}
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
