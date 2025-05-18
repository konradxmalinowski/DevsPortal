import { useEffect, useRef } from 'react';

import './styles/Contact.css';
import Links from './Links.jsx';
import Form from './Form.jsx';

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
        <Links />
        <Form />
      </section>
    </div>
  );
};

export default Contact;
