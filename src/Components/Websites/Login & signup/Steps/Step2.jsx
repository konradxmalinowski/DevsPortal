import { useRef } from 'react';
import Input from './../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import { emailRegEx } from '../../../../RegEx.js';

const Step2 = ({ stepFunctions }) => {
  const emailRef = useRef();

  return (
    <>
      <h2>Enter Your Email</h2>
      <Input label="Email address" type="email" ref={emailRef} autoFocus />
      <div className="buttons-wrapper">
        <Button
          label="Back"
          onClick={() => stepFunctions.setStep((prevStep) => prevStep - 1)}
          className="come-back-button"
          type="dark"
        />
        <Button
          label="Next"
          onClick={() =>
            stepFunctions.handleClickNext(emailRegEx, emailRef, 'email')
          }
          className="email-button green-button"
          type="dark"
        />
      </div>
    </>
  );
};

export default Step2;
