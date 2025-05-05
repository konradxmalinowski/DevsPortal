import Button from '../../Common components/Button/Button';

function LengthSection({ passwordLength, setPasswordLength }) {
  const handleDecrease = () => {
    if (passwordLength > 0) {
      setPasswordLength(passwordLength - 1);
    }
  };

  const handleIncrease = () => {
    if (passwordLength < 200) {
      setPasswordLength(passwordLength + 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 200) {
      setPasswordLength(value);
    }
  };

  const handleSetToZero = () => {
    setPasswordLength(0);
  };

  return (
    <section id="length-section" aria-label="Password length controls">
      <label htmlFor="password-length-value" aria-label="Set password length">
        Characters:{' '}
        <input
          type="number"
          name="password-length-value"
          id="password-length-value"
          min="0"
          max="200"
          value={passwordLength}
          onChange={handleChange}
          aria-valuemin="0"
          aria-valuemax="200"
          aria-valuenow={passwordLength}
        />
      </label>
      <section aria-label="Length adjustment buttons">
        <Button
          id="decrease-button"
          className="purple-button"
          label="-"
          onClick={handleDecrease}
          aria-label="Decrease password length"
        />
        <Button
          id="increase-button"
          className="purple-button"
          label="+"
          onClick={handleIncrease}
          aria-label="Increase password length"
        />
        <Button
          id="set-0-button"
          className="purple-button"
          label="0"
          onClick={handleSetToZero}
          aria-label="Set password length to zero"
        />
      </section>
    </section>
  );
}

export default LengthSection;
