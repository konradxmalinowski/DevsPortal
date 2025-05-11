import { useEffect, useRef, useState } from 'react';

const FaqItem = ({ isSelected, title, answer, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isSelected && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight + 20}px`);
    } else {
      setHeight('0px');
    }
  }, [isSelected]);

  return (
    <section className="faq-item" onClick={onClick}>
      <div className="question">{title}</div>
      <div
        className="answer-wrapper"
        style={{
          maxHeight: height,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div ref={contentRef} className="answer">
          {answer}
        </div>
      </div>
    </section>
  );
};

export default FaqItem;
