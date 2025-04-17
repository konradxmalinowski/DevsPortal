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
    <section id="buttons">
      <Button
        id="generateBtn"
        className="green-button"
        onClick={handleGenerate}
      >
        Generate
      </Button>
      <Button id="copyBtn" className="green-button" onClick={handleCopy}>
        Copy
      </Button>
      <Button className="green-button" onClick={handleClear}>
        Clear
      </Button>
    </section>
  );
}

export default Buttons;
