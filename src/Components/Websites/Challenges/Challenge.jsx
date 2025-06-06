import { useEffect, useRef } from 'react';
import Button from '../../Common components/Button/Button.jsx';

const Challenge = ({
  title,
  logo,
  description,
  link,
  handleScrollIntoView,
}) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);
  return (
    <div className="challenge reveal" ref={ref}>
      <img src={logo} alt={`${title} logo`} loading="lazy" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button
        label="Open"
        className="purple-button"
        onClick={() => window.open(link, '_blank')}
        aria-label={`Open ${title} challenge`}
      />
    </div>
  );
};

export default Challenge;
