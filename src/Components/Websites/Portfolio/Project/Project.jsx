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
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <Button label="Show" onClick={handleOpen} className="purple-button" />
        <Button label="Copy" onClick={handleCopy} className="purple-button" />
      </div>
      <Modal ref={modalRef}>Copied</Modal>
    </div>
  );
};

export default Project;
