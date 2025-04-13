import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';
import Button from '../Button/Button';

const Modal = ({ children, ref, id = undefined }) => {
  const dialog = useRef();

  function handleClose() {
    ref.current.close();
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} onClose={handleClose} id={id}>
      {children}
      <form method="dialog">
        <div className="button-container">
          <Button type="light" label="Close" onClick={handleClose} />
        </div>
      </form>
    </dialog>,
    document.body
  );
};

export default Modal;
