import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';
import Button from '../Button/Button';

const Modal = ({ children, ref, isFormShown = true, ...props }) => {
  const dialog = useRef();

  function handleClose() {
    dialog.current?.close();
    document.body.classList.remove('no-scroll');
    document.querySelector('#root').classList.remove('no-scroll');
  }

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
      dialog.current?.scrollTo(0, 0);
      document.querySelector('#root').classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    },
    close() {
      dialog.current?.close();
      document.querySelector('#root').classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
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
