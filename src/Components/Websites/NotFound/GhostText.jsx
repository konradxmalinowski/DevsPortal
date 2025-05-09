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
    <div
      className="ghost-text reveal"
      ref={ref}
      aria-label="Ghost text section"
    >
      <p className="ghost-bold-paragraph" aria-label="Error code">
        Error 404
      </p>
      <h1 aria-label="Page not found message">It's ghost</h1>
      <p className="ghost-bold-paragraph" aria-label="Description of the error">
        We can't seem to find the page you are looking for.
      </p>

      <Link to="/">
        <Button
          className="purple-button"
          aria-label="Go back to the homepage"
          label="Go home"
        />
      </Link>
    </div>
  );
};

export default GhostText;
