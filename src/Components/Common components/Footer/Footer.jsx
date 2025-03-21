import './Footer.css';

import ListItem from '../ListItem.jsx';
import { Link } from 'react-router-dom';

const labels = ['Terms', 'Privacy', 'Contact'];

export default function Footer() {
  return (
    <footer>
      <ul>
        <Link to="/">
          <ListItem>© {new Date().getFullYear()} DevsPortal, Inc.</ListItem>
        </Link>

        <Link to="/adminPanel">
          <ListItem content="Admin Panel" />
        </Link>

        {labels.map((label) => (
          <li key={label} className="grey">
            <a href={`${label}.pdf`} target="_blank">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
