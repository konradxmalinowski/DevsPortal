import { useState } from 'react';

const Input = ({ type, label, hideIcon = null, showIcon = null, ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const lowerCaseLabel = label.toLowerCase();

  return (
    <div>
      <label htmlFor={lowerCaseLabel}>{label}</label>
      <div className="input-wrapper">
        <input
          type={
            type === 'password' && !isPasswordShown
              ? 'password'
              : type === 'password' && isPasswordShown
              ? 'text'
              : type
          }
          id={lowerCaseLabel}
          aria-label={label}
          {...props}
        />

        {/* show/hide password  */}
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
