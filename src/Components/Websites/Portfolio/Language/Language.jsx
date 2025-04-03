import './Language.css';

const Language = ({ name, logo, level, id }) => {
  return (
    <div className="language">
      <h3>{name}</h3>
      <img src={logo} alt={[name, 'logo'].join(' ')} id={id} />
      <span>{level}</span>
    </div>
  );
};

export default Language;
