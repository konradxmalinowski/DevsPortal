import { useEffect, useRef } from 'react';
import Input from './../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import { emailRegEx } from '../../../../utils/RegEx.js';
import { handleScrollIntoView } from '../../../../utils/handleScrollIntoView.js';

const Step2 = ({ stepFunctions }) => {
  const emailRef = useRef();

  function handleClickEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      stepFunctions.handleClickNext(emailRegEx, emailRef, 'email');
    }
  }

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="reveal" ref={ref}>
      <h2>Enter Your Email</h2>
      <Input
        label="Email address"
        type="email"
        ref={emailRef}
        autoFocus
        aria-label="Enter your email address"
        onKeyDown={(event) => handleClickEnter(event)}
        onChange={(event) => handleClickEnter(event)}
      />
      <div className="buttons-wrapper">
        <Button
          label="Back"
          onClick={() => stepFunctions.setStep((prevStep) => prevStep - 1)}
          className="come-back-button"
          type="dark"
          aria-label="Go back to the previous step"
        />
        <Button
          label="Next"
          onClick={() =>
            stepFunctions.handleClickNext(emailRegEx, emailRef, 'email')
          }
          className="email-button green-button"
          type="dark"
          aria-label="Proceed to the next step"
        />
      </div>
    </div>
  );
};

export default Step2;
