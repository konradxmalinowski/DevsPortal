import { Link } from 'react-router-dom';

import './Header.css';
import Button from '../Button/Button';
import ListItem from '../ListItem';

const labels = ['Blog', 'Challenges', 'Forum', 'Admin Panel'];

export default function Header() {
  return (
    <header>
      <section className="narrow-header">
        <span className="logo">DevsPortal</span>
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
        <Button type="dark">
          <Link to="/login">Log in</Link>
        </Button>
        <Button type="light">
          <Link to="/signup">Sign up</Link>
        </Button>
      </section>
    </header>
  );
}
