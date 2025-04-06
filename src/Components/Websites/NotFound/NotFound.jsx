import { Link } from 'react-router-dom';
import './NotFound.css';
import Button from '../../Common components/Button/Button';

const NotFound = () => {
  return (
    <>
      <div className="stars"></div>
      <section className="page-not-found-section">
        <p className="oops-text">
          <span>O</span>
          <span>o</span>
          <span>o</span>
          <span>p</span>
          <span>s</span>
        </p>
        <p className="not-found-text">404 - Page not found</p>
        <p className="not-found-text">
          It looks like you got lost. Return to home page.
        </p>

        <Link to="/">
          <Button label="Go to homepage" className="back-to-homepage-link" />
        </Link>
      </section>
    </>
  );
};

export default NotFound;
