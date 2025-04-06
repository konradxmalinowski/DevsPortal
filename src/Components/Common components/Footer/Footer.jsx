import './Footer.css';

import ListItem from '../ListItem.jsx';
import { Link } from 'react-router-dom';

import termsPDF from './../../../assets/Terms.pdf';
import privacyPDF from './../../../assets/Privacy.pdf';

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

        <ul>
          <li className="grey">
            <a href={termsPDF} target="_blank">
              {labels[0]}
            </a>
          </li>
          <li className="grey">
            <a href={privacyPDF} target="_blank">
              {labels[1]}
            </a>
          </li>
          <li className="grey">
            <a
              href="mailto:konradmalinowski@zsezdw.onmicrosoft.com"
              target="_blank"
            >
              {labels[2]}
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}
