import { useEffect, useRef, useState } from 'react';

import Input from './../../../Common components/Input.jsx';
import ListItem from '../../../Common components/ListItem.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import hidePasswordIcon from './../../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../../assets/Password Icons/show_password.png';

import {
  passwordRegEx,
  passwordRequirements,
} from '../../../../utils/RegEx.js';
import { handleScrollIntoView } from '../../../../utils/handleScrollIntoView.js';

const Step3 = ({ stepFunctions }) => {
  const passwordRef = useRef();
  const [password, setPassword] = useState('');

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
      stepFunctions.handleClickNext(passwordRegEx, passwordRef, 'password');
    }

    setPassword(event.target.value);
  }

  return (
    <div ref={ref} className="reveal">
      <h2>Choose Password</h2>
      <Input
        label="Password"
        type="password"
        ref={passwordRef}
        onChange={(event) => handleClickEnter(event)}
        onKeyDown={(event) => handleClickEnter(event)}
        showIcon={showPasswordIcon}
        hideIcon={hidePasswordIcon}
        autoFocus
        aria-label="Enter your password"
      />
      <ul aria-label="Password requirements">
        {passwordRequirements.map((requirement) => (
          <ListItem content={requirement} key={requirement} />
        ))}
      </ul>
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
            stepFunctions.handleClickNext(
              passwordRegEx,
              passwordRef,
              'password'
            )
          }
          className="email-button green-button"
          type="dark"
          aria-label="Proceed to the next step"
        />
      </div>
    </div>
  );
};

export default Step3;
