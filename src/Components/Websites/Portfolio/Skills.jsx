import { useEffect, useRef } from 'react';

import htmlImg from '../../../assets/Languages/html-icon.png';
import cssImg from '../../../assets/Languages/css-icon.png';
import jsImg from '../../../assets/Languages/javascript-icon.png';
import reactImg from '../../../assets/Languages/react-icon.png';
import wordpressImg from '../../../assets/Languages/wordpress-icon.png';
import sqlImg from '../../../assets/Languages/sql-icon.png';
import mysqlImg from '../../../assets/Languages/mysql-icon.png';
import pythonImg from '../../../assets/Languages/python-icon.png';

import Language from './Language/Language.jsx';

const names = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Wordpress',
  'SQL',
  'MySQL',
  'Python',
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
];

const Skills = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

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
