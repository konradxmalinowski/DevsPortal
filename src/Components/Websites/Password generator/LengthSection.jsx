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
    <section id="length-section">
      <label>
        Characters:{' '}
        <input
          type="number"
          name="password-length-value"
          id="password-length-value"
          min="0"
          max="200"
          value={passwordLength}
          onChange={handleChange}
        />
      </label>
      <section>
        <Button
          id="decrease-button"
          className="purple-button"
          label="-"
          onClick={handleDecrease}
        />
        <Button
          id="increase-button"
          className="purple-button"
          label="+"
          onClick={handleIncrease}
        />
        <Button
          id="set-0-button"
          className="purple-button"
          label="0"
          onClick={handleSetToZero}
        />
      </section>
    </section>
  );
}

export default LengthSection;
