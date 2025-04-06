import { useRef } from 'react';
import Input from './../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button';

import hidePasswordIcon from './../../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../../assets/Password Icons/show_password.png';

const Step4 = ({ stepFunctions, userData }) => {
  const passwordRepeatedRef = useRef();

  return (
    <>
      <h2>Repeat Password</h2>
      <Input
        label="Password"
        type="password"
        ref={passwordRepeatedRef}
        autoFocus
        showIcon={showPasswordIcon}
        hideIcon={hidePasswordIcon}
      />
      <div className="buttons-wrapper">
        <Button
          label="Back"
          onClick={() => stepFunctions.setStep((prevStep) => prevStep - 1)}
          className="come-back-button"
          type="dark"
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
        />
      </div>
    </>
  );
};

export default Step4;
