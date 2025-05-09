import { useEffect, useRef } from 'react';
import Button from '../../../Common components/Button/Button.jsx';
import Input from './../../../Common components/Input.jsx';
import ListItem from '../../../Common components/ListItem.jsx';

import {
  usernameRegEx,
  usernameRequirements,
} from '../../../../utils/RegEx.js';
import { handleScrollIntoView } from '../../../../utils/handleScrollIntoView.js';

const Step1 = ({ stepFunctions }) => {
  const usernameRef = useRef();

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      <h2>Choose a Username</h2>
      <Input
        type="text"
        label="Username"
        ref={usernameRef}
        autoFocus
        aria-label="Enter your desired username"
      />

      <p id="requirements-p">Requirements:</p>
      <ul>
        {usernameRequirements.map((requirement) => (
          <ListItem content={requirement} key={requirement} />
        ))}
      </ul>

      <Button
        label="Next"
        onClick={() => {
          stepFunctions.handleClickNext(usernameRegEx, usernameRef, 'username');
        }}
        className="green-button"
        aria-label="Proceed to the next step"
      />
    </div>
  );
};

export default Step1;
