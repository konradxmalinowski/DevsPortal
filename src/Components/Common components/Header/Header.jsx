import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Header.css';
import Button from '../Button/Button';
import ListItem from '../ListItem';

const labels = [
  'Blog',
  'Challenges',
  'Forum',
  'Quiz',
  'Admin Panel',
  'Snippets',
];

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
      {label !== 'Quiz' && label != 'Snippets' && (
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

        <Link to="/login">
          <Button type="dark" label="Log in" />
        </Link>

        <Link to="/signup">
          <Button type="light" label="Sign up" />
        </Link>
      </section>
    </>
  );
}
