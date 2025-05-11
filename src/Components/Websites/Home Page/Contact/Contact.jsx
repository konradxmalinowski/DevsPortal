import { useEffect, useRef } from 'react';
import LeftContact from './LeftContact.jsx';
import './styles/Contact.css';
import RightContact from './RightContact.jsx';

const Contact = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div className="contact-wrapper wrapper reveal" ref={ref}>
      <h1>Contact with me!</h1>
      <section>
        <LeftContact />
        <RightContact />
      </section>
    </div>
  );
};

export default Contact;
