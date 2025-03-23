import { Link } from 'react-router-dom';

import './Header.css';
import Button from '../Button/Button';
import ListItem from '../ListItem';

const labels = ['Blog', 'Challenges', 'Forum', 'Quiz', 'Admin Panel'];

export default function Header() {
  const headerItems = labels.map((label) => (
    <ListItem key={label}>
      {label === 'Quiz' && (
        <Link to="/quizPanel" key={label}>
          {label}
        </Link>
      )}
      {label !== 'Quiz' && (
        <Link to={`/${label.toLowerCase().replace(' ', '')}`} key={label}>
          {label}
        </Link>
      )}
    </ListItem>
  ));

  return (
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
          <Button type="dark" label="Log in" />
        </Link>

        <Link to="/signup">
          <Button type="light" label="Sign up" />
        </Link>
      </section>
    </header>
  );
}
