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
          aria-label={label}
          {...props}
        />
        {type === 'password' && (
          <span
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            role="button"
            aria-label={isPasswordShown ? 'Hide password' : 'Show password'}
            tabIndex={0}
          >
            <img
              src={isPasswordShown ? hideIcon : showIcon}
              alt={
                isPasswordShown ? 'Hide password icon' : 'Show password icon'
              }
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
