import { useEffect, useRef } from 'react';

import Button from '../../Common components/Button/Button.jsx';

const Rates = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div className="rates-wrapper wrapper reveal" ref={ref}>
      <h1>Do you want to rate this website?</h1>
      <p>
        I encourage you to click the button below and share your feedback on my
        work in creating this website.
      </p>
      <a href="mailto:konradmalinowski@zsezdwola.com" target="_blank">
        <Button label="Rate website" className="purple-button" />
      </a>
    </div>
  );
};

export default Rates;
