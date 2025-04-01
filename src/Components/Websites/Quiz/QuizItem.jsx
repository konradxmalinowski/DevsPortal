import { Link } from 'react-router-dom';

import Button from '../../Common components/Button/Button';

const QuizItem = ({ label, description, to }) => {
  return (
    <div className="quiz-item">
      <h2>{label}</h2>
      <p>{description}</p>
      <Link to={to}>
        <Button label="Check" type="dark" className="green-button" />
      </Link>
    </div>
  );
};

export default QuizItem;
