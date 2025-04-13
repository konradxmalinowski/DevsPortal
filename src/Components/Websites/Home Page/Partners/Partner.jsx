export default function Partner({ name, logo, className, link, ...props }) {
  return (
    <div className="partner" onClick={() => window.open(link)}>
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
