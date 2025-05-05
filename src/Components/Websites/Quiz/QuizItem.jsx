import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Button from '../../Common components/Button/Button.jsx';

const QuizItem = ({ label, description, to, handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div
      className="quiz-item reveal"
      ref={ref}
      aria-label={`Quiz item: ${label}`}
    >
      <h2 aria-label={`Quiz title: ${label}`}>{label}</h2>
      <p aria-label={`Quiz description: ${description}`}>{description}</p>
      <Link to={to} aria-label={`Go to quiz: ${label}`}>
        <Button label="Check" className="purple-button" />
      </Link>
    </div>
  );
};

export default QuizItem;
