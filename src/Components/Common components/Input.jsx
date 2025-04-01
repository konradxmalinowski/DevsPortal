import { useState } from 'react';

const Input = ({ type, label, hideIcon = null, showIcon = null, ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const lowerCaseLabel = label.toLowerCase();

  return (
    <div>
      <label htmlFor={lowerCaseLabel}>{label}</label>
      <div className="password-wrapper">
        <input
          type={type === 'password' && !isPasswordShown ? 'password' : 'text'}
          id={lowerCaseLabel}
          name={lowerCaseLabel}
          {...props}
        />
        {type === 'password' && (
          <span onClick={() => setIsPasswordShown(!isPasswordShown)}>
            <img
              src={isPasswordShown ? hideIcon : showIcon}
              alt={
                isPasswordShown ? 'show password icon' : 'hide password icon'
              }
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
