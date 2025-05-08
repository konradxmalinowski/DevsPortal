import { useEffect, useRef } from 'react';

import htmlImg from '../../../assets/Languages/html-icon.png';
import cssImg from '../../../assets/Languages/css-icon.png';
import jsImg from '../../../assets/Languages/javascript-icon.png';
import reactImg from '../../../assets/Languages/react-icon.png';
import wordpressImg from '../../../assets/Languages/wordpress-icon.png';
import sqlImg from '../../../assets/Languages/sql-icon.png';
import mysqlImg from '../../../assets/Languages/mysql-icon.png';
import gitImage from '../../../assets/Languages/git.svg';

import Language from './Language/Language.jsx';

const NAMES = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Wordpress',
  'SQL',
  'MySQL',
  'Git',
];

const IMAGES = [
  htmlImg,
  cssImg,
  jsImg,
  reactImg,
  wordpressImg,
  sqlImg,
  mysqlImg,
  gitImage,
];

const LEVELS = [
  'Experienced',
  'Experienced',
  'Experienced',
  'Experienced',
  'Experienced',
  'Basics',
  'Basics',
  'Basics',
];

const IDs = [
  'html-img',
  'css-img',
  'js-img',
  'react-img',
  'wordpress-img',
  'sql-img',
  'mysql-img',
  'git-img',
];

const LINKS = [
  'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'https://www.javascript.com',
  'https://reactjs.org',
  'https://wordpress.org',
  'https://www.microsoft.com/en-us/sql-server',
  'https://www.mysql.com',
  'https://git-scm.com',
];

const Skills = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  const skills = NAMES.map((name, idx) => (
    <Language
      name={name}
      logo={IMAGES[idx]}
      level={LEVELS[idx]}
      key={idx}
      id={IDs[idx]}
      onClick={() => window.open(LINKS[idx])}
    />
  ));

  return (
    <div
      className="skills-wrapper wrapper reveal"
      ref={ref}
      aria-label="Skills Section"
    >
      <h1 aria-label="My skills heading">My skills</h1>
      <div id="skills-content" aria-label="List of skills">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
