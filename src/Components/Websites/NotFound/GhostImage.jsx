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
    <div
      className="ghost-image reveal"
      ref={ref}
      aria-label="Ghost image section"
    >
      <img
        src={ghostImage}
        alt="A ghost illustration representing a 404 error"
        className="ghost-image"
      />
    </div>
  );
};

export default GhostImage;
