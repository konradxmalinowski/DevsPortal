import { generatePassword } from './generatePassword';
import Button from '../../Common components/Button/Button.jsx';

function Buttons({
  setPassword,
  passwordLength,
  options,
  createMessage,
  password,
}) {
  const handleGenerate = () => {
    const newPassword = generatePassword(passwordLength, options);
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    createMessage('Password has been copied');
  };

  const handleClear = () => {
    setPassword('');
  };

  return (
    <section id="buttons" aria-label="Password generator controls">
      <Button
        id="generateBtn"
        className="purple-button"
        onClick={handleGenerate}
        aria-label="Generate a new password"
      >
        Generate
      </Button>
      <Button
        id="copyBtn"
        className="purple-button"
        onClick={handleCopy}
        aria-label="Copy the generated password to clipboard"
      >
        Copy
      </Button>
      <Button
        className="purple-button"
        onClick={handleClear}
        aria-label="Clear the generated password"
      >
        Clear
      </Button>
    </section>
  );
}

export default Buttons;
