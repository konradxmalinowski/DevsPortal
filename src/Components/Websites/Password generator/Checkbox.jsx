export default function Checkbox({ name, checked, content, onChange }) {
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
