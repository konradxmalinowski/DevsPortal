import './Language.css';

const Language = ({ name, logo, level, id }) => {
  return (
    <div className="language" aria-label={`Language: ${name}, Level: ${level}`}>
      <h3>{name}</h3>
      <img
        src={logo}
        alt={`${name} logo`}
        id={id}
        loading="lazy"
        aria-label={`${name} logo`}
      />
      <span aria-label={`Proficiency level: ${level}`}>{level}</span>
    </div>
  );
};

export default Language;
