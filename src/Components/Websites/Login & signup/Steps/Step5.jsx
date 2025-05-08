import { useEffect, useRef } from 'react';
import Input from '../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import hidePasswordIcon from './../../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../../assets/Password Icons/show_password.png';

import { handleScrollIntoView } from '../../../../utils/handleScrollIntoView.js';

const Step5 = ({ stepFunctions, userData }) => {
  const passwordRepeatedRef = useRef();

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  function handleClickEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <div ref={ref} className="reveal">
      <h2>Repeat Password</h2>
      <Input
        label="Repeat Password"
        type="password"
        ref={passwordRepeatedRef}
        autoFocus
        showIcon={showPasswordIcon}
        hideIcon={hidePasswordIcon}
        onChange={(event) => handleClickEnter(event)}
        onKeyDown={(event) => handleClickEnter(event)}
        aria-label="Repeat your password"
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
          label="Sign Up"
          onClick={() =>
            stepFunctions.handleClickNext(
              userData.password ? new RegExp(`^${userData.password}$`) : /.*/,
              passwordRepeatedRef,
              'password'
            )
          }
          className="email-button green-button"
          type="dark"
          aria-label="Complete the signup process"
        />
      </div>
    </div>
  );
};

export default Step5;
