function Checkbox({ name, checked, content, onChange }) {
  return (
    <section>
      <label
        className="custom-checkbox-label"
        htmlFor={name}
        aria-label={`Toggle ${content} option`}
      >
        <input
          type="checkbox"
          className="custom-checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
        />
        {content}
      </label>
    </section>
  );
}

function AdditionalOptions({ options, setOptions }) {
  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <section id="additional-options" aria-label="Additional password options">
      <p>Additional Options</p>

      <Checkbox
        name="lowercase"
        checked={options.lowercase}
        onChange={handleOptionChange}
        content="a-z"
      />
      <Checkbox
        name="uppercase"
        checked={options.uppercase}
        onChange={handleOptionChange}
        content="A-Z"
      />
      <Checkbox
        name="numbers"
        checked={options.numbers}
        onChange={handleOptionChange}
        content="0-9"
      />
      <Checkbox
        name="symbols"
        checked={options.symbols}
        onChange={handleOptionChange}
        content="!@#$%^&*()"
      />
    </section>
  );
}

export default AdditionalOptions;
