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
          type="dark"
          label="-"
          onClick={handleDecrease}
        />
        <Button
          id="increase-button"
          type="dark"
          label="+"
          onClick={handleIncrease}
        />
      </section>
    </section>
  );
}

export default LengthSection;
