import Button from '../../../Common components/Button/Button';
import './Project.css';

const Project = ({ name, description, link }) => {
  function handleCopy() {
    navigator.clipboard.writeText(link);
  }

  function handleOpen() {
    window.open(link);
  }

  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <Button label="Show" onClick={handleOpen} />
        <Button label="Copy" onClick={handleCopy} />
      </div>
    </div>
  );
};

export default Project;
