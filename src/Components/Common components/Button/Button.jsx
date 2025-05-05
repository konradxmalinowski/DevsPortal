import './Button.css';

export default function Button({ label, type, children, className, ...props }) {
  return (
    <button
      {...props}
      className={[
        'custom-button',
        type === 'light' ? 'custom-button-light' : 'custom-button-dark',
        className ? className : '',
      ].join(' ')}
      aria-label={label || undefined}
    >
      {label}
      {children}
    </button>
  );
}
