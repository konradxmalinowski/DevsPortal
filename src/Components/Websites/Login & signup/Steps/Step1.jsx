import { useRef } from 'react';
import Button from '../../../Common components/Button/Button';
import Input from './../../../Common components/Input.jsx';
import ListItem from '../../../Common components/ListItem';

import { usernameRegEx, usernameRequirements } from '../../../../RegEx';

const Step1 = ({ stepFunctions }) => {
  const usernameRef = useRef();

  return (
    <>
      <h2>Choose a Username</h2>
      <Input type="text" label="Username" ref={usernameRef} autoFocus />

      <ul>
        {usernameRequirements.map((requirement) => (
          <ListItem content={requirement} key={requirement} />
        ))}
      </ul>

      <Button
        label="Next"
        onClick={() => {
          console.log('Next clicked in Step1');
          stepFunctions.handleClickNext(usernameRegEx, usernameRef, 'username');
        }}
        className="green-button"
      />
    </>
  );
};

export default Step1;
