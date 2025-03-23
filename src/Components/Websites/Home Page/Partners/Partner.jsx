export default function Partner({ name, logo, className, ...props }) {
  return (
    <div className="partner">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className={className}
        {...props}
      />
    </div>
  );
}
