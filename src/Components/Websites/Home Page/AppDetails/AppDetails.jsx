import './AppDetails.css';

const Info = ({ title, description }) => {
  return (
    <div className="app-detail" aria-label={`Details about ${title}`}>
      <span>{title}</span>
      <span className="grey">{description}</span>
    </div>
  );
};

export default Info;
