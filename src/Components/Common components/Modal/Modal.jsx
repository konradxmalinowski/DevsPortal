import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import Button from '../Button/Button';

const Modal = forwardRef(({ children }, ref) => {
  console.log('Modal rendered, ref:', ref.current);
  const dialog = useRef();

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
    <dialog ref={dialog} onClose={() => ref.current.close()}>
      {children}
      <form method="dialog">
        <Button
          type="light"
          label="Close"
          onClick={() => {
            ref.current.close();
            console.log('closed');
          }}
        />
      </form>
    </dialog>,
    document.body
  );
});

export default Modal;
