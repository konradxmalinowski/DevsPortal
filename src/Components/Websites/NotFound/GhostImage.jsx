import { useEffect, useRef } from 'react';

import ghostImage from '../../../assets/ghost-img.png';

const GhostImage = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);
  return (
    <div className="ghost-image reveal" ref={ref}>
      <img src={ghostImage} alt="ghost image" className="ghost-image" />
    </div>
  );
};

export default GhostImage;
