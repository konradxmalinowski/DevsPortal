import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles/Header.css';
import Button from '../Button/Button.jsx';
import ListItem from '../ListItem.jsx';

import igIcon from './../../../assets/Author images/ig-icon.png';
import linkedinIcon from './../../../assets/Author images/linkedin.png';
import githubIcon from './../../../assets/Author images/github-icon2.png';

const labels = ['Blog', 'Password', 'Challenges', 'Quiz', 'Snippets', 'Admin'];

export default function Header() {
  const [isExtended, setIsExtended] = useState(false);

  const headerItems = labels.map((label) => (
    <ListItem key={label}>
      {label === 'Quiz' && (
        <Link to="/quizPanel" key={label}>
          {label}
        </Link>
      )}
      {label === 'Snippets' && (
        <Link to="/codeGenerators" key={label}>
          {label}
        </Link>
      )}
      {label === 'Password' && (
        <Link to="/generate-password" key={label}>
          {label}
        </Link>
      )}
      {label === 'Admin' && (
        <Link to="/adminPanel" key={label}>
          {label}
        </Link>
      )}
      {label !== 'Quiz' &&
        label !== 'Snippets' &&
        label !== 'Password' &&
        label !== 'Admin' && (
          <Link to={`/${label.toLowerCase().replace(' ', '')}`} key={label}>
            {label}
          </Link>
        )}
    </ListItem>
  ));

  return (
    <>
      <header>
        <section className="narrow-header">
          <span className="logo">
            <Link to="/">DevsPortal</Link>
          </span>
        </section>
        <section className="wide-header">
          <ul>{headerItems}</ul>
        </section>
        <section className="narrow-header">
          <Link to="/login">
            <Button
              type="dark"
              label={localStorage.getItem('token') ? 'Logout' : 'Login'}
            />
          </Link>

          <Link to="/signup">
            <Button type="light" label="Sign up" />
          </Link>
        </section>

        <section className="narrow-header">
          <button
            className={`hamburger ${isExtended ? 'hamburger--active' : ''}`}
            onClick={() => setIsExtended((isExtended) => !isExtended)}
            aria-label={
              isExtended ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>
        </section>
      </header>

      <section
        className={`navigation ${isExtended ? 'navigation--active' : ''}`}
      >
        <ul>{headerItems}</ul>

        <div className="header-buttons-wrapper">
          <Link to="/login">
            <Button type="dark" label="Log in" />
          </Link>
          <Link to="/signup">
            <Button type="light" label="Sign up" />
          </Link>
        </div>

        <ul className="header-socials">
          <li>
            <a
              href="https://www.instagram.com/konradxmalinowski/"
              target="_blank"
              aria-label="Visit Instagram profile"
            >
              <img src={igIcon} alt="instagram icon" loading="lazy" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/konrad-malinowski-894a36323/"
              target="_blank"
              aria-label="Visit Linkedin profile"
            >
              <img src={linkedinIcon} alt="linkedin icon" loading="lazy" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/konradxmalinowski"
              target="_blank"
              aria-label="Visit Github profile"
            >
              <img src={githubIcon} alt="github icon" loading="lazy" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
