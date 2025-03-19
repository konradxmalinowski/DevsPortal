import './Footer.css';

import ListItem from '../ListItem.jsx';

const labels = [
  'Blog',
  'Challenges',
  'Forum',
  'Admin Panel',
  'Privacy',
  'Use of terms',
];

export default function Footer() {
  return (
    <footer>
      <span className="logo">DevsPortal</span>
      <ul>
        {labels.map((label) => (
          <ListItem content={label} key={label} />
        ))}
      </ul>
    </footer>
  );
}
