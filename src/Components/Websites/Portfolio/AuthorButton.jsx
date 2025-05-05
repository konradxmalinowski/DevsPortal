const AuthorButton = ({ logo, link, name }) => {
  return (
    <button
      className={`${name}-button author-button`}
      onClick={() => window.open(link)}
      aria-label={`Open ${name} link`}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className={`${name.toLowerCase()}-icon author-icon`}
      />
      <p className={`${name.toLowerCase()}-text author-text`}>Click me</p>
    </button>
  );
};

export default AuthorButton;
