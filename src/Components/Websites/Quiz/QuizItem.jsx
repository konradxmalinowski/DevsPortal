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
    <div className="quiz-item reveal" ref={ref}>
      <h2>{label}</h2>
      <p>{description}</p>
      <Link to={to}>
        <Button label="Check" className="purple-button" />
      </Link>
    </div>
  );
};

export default QuizItem;
