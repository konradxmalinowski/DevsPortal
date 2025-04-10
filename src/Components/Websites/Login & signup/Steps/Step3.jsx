import { useRef, useState } from 'react';
import Input from './../../../Common components/Input.jsx';
import ListItem from '../../../Common components/ListItem.jsx';
import Button from '../../../Common components/Button/Button.jsx';

import hidePasswordIcon from './../../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../../assets/Password Icons/show_password.png';

import { passwordRegEx, passwordRequirements } from '../../../../RegEx';

const Step3 = ({ stepFunctions }) => {
  const passwordRef = useRef();
  const [password, setPassword] = useState('');

  return (
    <>
      <h2>Choose Password</h2>
      <Input
        label="Password"
        type="password"
        ref={passwordRef}
        onChange={(event) => setPassword(event.target.value)}
        showIcon={showPasswordIcon}
        hideIcon={hidePasswordIcon}
        autoFocus
      />
      <ul>
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
        />
      </div>
    </>
  );
};

export default Step3;
