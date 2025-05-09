import './Footer.css';

import ListItem from '../ListItem.jsx';
import { Link } from 'react-router-dom';

import termsPDF from './../../../assets/Terms.pdf';
import privacyPDF from './../../../assets/Privacy.pdf';
import igIcon from './../../../assets/Author images/ig-icon.png';
import linkedinIcon from './../../../assets/Author images/linkedin.png';
import githubIcon from './../../../assets/Author images/github-icon2.png';

const labels = ['Terms', 'Privacy', 'Contact'];

export default function Footer() {
  return (
    <footer>
      <ul className="footer-left">
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

      <ul className="footer-center">
        <Link to="/">
          <ListItem>&copy; {new Date().getFullYear()} DevsPortal</ListItem>
        </Link>
      </ul>

      <ul className="footer-right">
        <li>
          <a
            href={termsPDF}
            target="_blank"
            aria-label="View terms and conditions"
          >
            {labels[0]}
          </a>
        </li>
        <li>
          <a href={privacyPDF} target="_blank" aria-label="View privacy policy">
            {labels[1]}
          </a>
        </li>
        <li>
          <a
            href="mailto:malinowski.konrad45@gmail.com"
            target="_blank"
            aria-label="Contact via email"
          >
            {labels[2]}
          </a>
        </li>
      </ul>
    </footer>
  );
}
