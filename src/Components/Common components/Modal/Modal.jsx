import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import './styles/Modal.css';
import Button from '../Button/Button.jsx';

const Modal = ({ children, ref, isFormShown = true, ...props }) => {
  const dialog = useRef();

  function handleClose() {
    dialog.current?.close();
  }

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
      dialog.current?.scrollTo(0, 0);
    },
    close() {
      dialog.current?.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      onClose={handleClose}
      onKeyDown={(event) => (event.key === 'Escape' ? handleClose : undefined)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...props}
    >
      {children}
      {isFormShown && (
        <form method="dialog">
          <div className="button-container">
            <Button
              className="purple-button"
              label="Close"
              onClick={handleClose}
              aria-label="Close modal"
            />
          </div>
        </form>
      )}
    </dialog>,
    document.body
  );
};

export default Modal;
