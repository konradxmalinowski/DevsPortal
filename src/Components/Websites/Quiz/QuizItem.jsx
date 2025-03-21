import Button from '../../Common components/Button/Button';

const QuizItem = ({ label, description, onClick }) => {
  return (
    <div className="quiz-item">
      <h2>{label}</h2>
      <p>{description}</p>
      <Button
        label="Check"
        onClick={onClick}
        type="dark"
        className="green-button"
      />
    </div>
  );
};

export default QuizItem;
