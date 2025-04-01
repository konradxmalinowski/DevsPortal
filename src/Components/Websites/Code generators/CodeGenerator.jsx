import Button from '../../Common components/Button/Button';
import zipImg from '../../../assets/zip.png';

const CodeGenerator = ({ label, src }) => {
  return (
    <div className="snippet">
      <h2>{label}</h2>
      <img src={zipImg} alt={label} />
      <a href={src}>
        <Button label="Download" type="dark" className="green-button" />
      </a>
    </div>
  );
};

export default CodeGenerator;
