import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Common components/Button/Button.jsx';

const GhostText = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);
  return (
    <div className="ghost-text reveal" ref={ref}>
      <p className="ghost-bold-paragraph">Error 404</p>
      <h1>It's ghost</h1>
      <p className="ghost-bold-paragraph">
        We can't seem to find page you are looking for.
      </p>
      <Button className="purple-button">
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
};

export default GhostText;
