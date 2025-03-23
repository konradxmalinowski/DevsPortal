import { Link } from 'react-router-dom';
import Button from '../../../Common components/Button/Button';

import './About.css';

export default function About() {
  return (
    <div className="wrapper about-wrapper">
      <section>
        <h1>DevsPortal is a purpose-built platform for every developer.</h1>
        <p className="grey">
          Meet the system for modern software development. Streamline issues,
          projects, and product roadmaps.
        </p>
        <div className="buttons-wrapper">
          <a href="#apps-wrapper">
            <Button label="Let's see apps" type="light" />
          </a>

          <Link to="/portfolio">
            <Button label="More about author" type="dark" />
          </Link>
        </div>
      </section>
    </div>
  );
}
