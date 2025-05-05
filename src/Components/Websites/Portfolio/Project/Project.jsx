import { useRef } from 'react';
import Button from '../../../Common components/Button/Button.jsx';
import Modal from '../../../Common components/Modal/Modal.jsx';
import './Project.css';

const Project = ({ name, description, link }) => {
  const modalRef = useRef(null);

  function handleCopy() {
    navigator.clipboard.writeText(link);
    modalRef.current.open();
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
      <Modal ref={modalRef} aria-label="Link copied notification">
        Copied
      </Modal>
    </div>
  );
};

export default Project;
