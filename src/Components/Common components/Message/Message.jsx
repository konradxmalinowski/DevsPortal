import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import messageIcon from '../../../assets/message-icon.png';
import './styles/Message.css';

const Message = ({ content, isShownMessage = null }) => {
  const [isVisible, setIsVisible] = useState(null);
  const messageRef = useRef();

  useEffect(() => {
    let timer;
    if (isShownMessage) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isShownMessage]);

  return createPortal(
    <section
      className={`message ${
        isVisible === null ? 'initial' : isVisible ? 'show' : 'hide'
      }`}
      ref={messageRef}
    >
      <div className="narrow-message">
        <img src={messageIcon} alt="message icon" />
      </div>
      <div className="wide-message">{content}</div>
      <div className="narrow-message">
        <span className="grey">now</span>
      </div>
    </section>,
    document.body
  );
};

export default Message;
