import './Info.css';

const Info = ({ title, description }) => {
  return (
    <div className="info">
      <span>{title}</span>
      <span className="grey">{description}</span>
    </div>
  );
};

export default Info;
