import zipImg from '../../../assets/zip.png';

const CodeGenerator = ({ label, src }) => {
  return (
    <div className="snippet">
      <h2>{label}</h2>
      <img src={zipImg} alt={label} />
      <a href={src}>
        <button className="download-button purple-button">Download</button>
      </a>
    </div>
  );
};

export default CodeGenerator;
