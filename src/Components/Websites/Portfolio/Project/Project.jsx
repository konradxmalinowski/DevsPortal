import { useState } from 'react';
import Button from '../../../Common components/Button/Button.jsx';
import Message from '../../../Common components/Message/Message.jsx';
import './styles/Project.css';

const Project = ({ name, description, link }) => {
  const [isMessageShow, setIsMessageShow] = useState(false);

  function handleCopy() {
    setIsMessageShow(false);

    setTimeout(() => {
      navigator.clipboard.writeText(link);
      setIsMessageShow(true);
    }, 500);
  }

  function handleOpen() {
    window.open(link);
  }

  return (
    <div className="project" aria-label={`Project: ${name}`}>
      <h2 aria-label={`Project name: ${name}`}>{name}</h2>
      <p aria-label={`Project description: ${description}`}>{description}</p>
      <div aria-label="Project actions">
        <Button
          label="Show"
          onClick={handleOpen}
          className="purple-button"
          aria-label={`Open project: ${name}`}
        />
        <Button
          label="Copy"
          onClick={handleCopy}
          className="purple-button"
          aria-label={`Copy project link for: ${name}`}
        />
      </div>

      <Message content="Link copied" isShownMessage={isMessageShow} />
    </div>
  );
};

export default Project;
