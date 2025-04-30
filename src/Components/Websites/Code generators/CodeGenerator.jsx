import { useEffect, useRef } from 'react';
import zipImg from '../../../assets/zip.png';

const CodeGenerator = ({ label, src, handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div className="snippet reveal" ref={ref}>
      <h2>{label}</h2>
      <img src={zipImg} alt={label} />
      <a href={src}>
        <button className="download-button purple-button">Download</button>
      </a>
    </div>
  );
};

export default CodeGenerator;
