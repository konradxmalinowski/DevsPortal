import './Button.css';

export default function Button({ label, type, children, ...props }) {
  return (
    <button
      {...props}
      className={[
        'custom-button',
        type === 'light' ? 'custom-button-light' : 'custom-button-dark',
      ].join(' ')}
    >
      {label}
      {children}
    </button>
  );
}
