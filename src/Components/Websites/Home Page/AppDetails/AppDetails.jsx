import './AppDetails.css';

const Info = ({ title, description }) => {
  return (
    <div className="app-detail">
      <span>{title}</span>
      <span className="grey">{description}</span>
    </div>
  );
};

export default Info;
