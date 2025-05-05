import { useRef } from 'react';
import Input from './../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import { emailRegEx } from '../../../../RegEx.js';

const Step2 = ({ stepFunctions }) => {
  const emailRef = useRef();

  function handleClickEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      stepFunctions.handleClickNext(emailRegEx, emailRef, 'email');
    }
  }

  return (
    <>
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
    </>
  );
};

export default Step2;
