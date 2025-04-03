import htmlImg from '../../../assets/Languages/html-icon.png';
import cssImg from '../../../assets/Languages/css-icon.png';
import jsImg from '../../../assets/Languages/javascript-icon.png';
import reactImg from '../../../assets/Languages/react-icon.png';
import wordpressImg from '../../../assets/Languages/wordpress-icon.png';
import sqlImg from '../../../assets/Languages/sql-icon.png';
import mysqlImg from '../../../assets/Languages/mysql-icon.png';
import pythonImg from '../../../assets/Languages/python-icon.png';
import cSzarpImg from '../../../assets/Languages/c-hasz-icon.png';

import Language from './Language/Language';

const names = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Wordpress',
  'SQL',
  'MySQL',
  'Python',
  'C#',
];

const images = [
  htmlImg,
  cssImg,
  jsImg,
  reactImg,
  wordpressImg,
  sqlImg,
  mysqlImg,
  pythonImg,
  cSzarpImg,
];

const levels = [
  'Experienced',
  'Experienced',
  'Experienced',
  'Experienced',
  'Experienced',
  'Basics',
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
  'python-img',
  'c-hasz-img',
];

const Skills = () => {
  const skills = names.map((name, idx) => (
    <Language
      name={name}
      logo={images[idx]}
      level={levels[idx]}
      key={idx}
      id={IDs[idx]}
    />
  ));

  return (
    <div className="skills-wrapper wrapper">
      <h1>My skills</h1>
      <div id="skills-content">{skills}</div>
    </div>
  );
};

export default Skills;
