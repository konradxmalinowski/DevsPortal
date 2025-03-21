import { Link } from 'react-router-dom';

import './Header.css';
import Button from '../Button/Button';
import ListItem from '../ListItem';

const labels = ['Blog', 'Challenges', 'Forum', 'Quiz', 'Admin Panel'];

export default function Header() {
  return (
    <header>
      <section className="narrow-header">
        <span className="logo">
          <Link to="/">DevsPortal</Link>
        </span>
      </section>
      <section className="wide-header">
        <ul>
          {labels.map((label) => (
            <ListItem key={label}>
              <Link to={`/${label.toLowerCase().replace(' ', '')}`} key={label}>
                {label}
              </Link>
            </ListItem>
          ))}
        </ul>
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
