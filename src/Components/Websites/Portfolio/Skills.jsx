import Language from './Language/Language';
import { useEffect, useRef } from 'react';

const NAMES = [
  'HTML',
  'CSS',
  'SASS',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'Typescript',
  'React',
  'Python',
  'C#',
  'Selenium',
  'MySQL',
  'SQL',
  'PHP',
  'SQLite',
  'Git',
  'Figma',
  'Postman',
  'Wordpress',
];

const IMAGES = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  'https://img.icons8.com/color/200/tailwindcss.png',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg',
  'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
];

const LEVELS = [
  'Experienced', // HTML
  'Experienced', // CSS
  'Experienced', // SASS
  'Experienced', // Tailwind CSS
  'Experienced', // Bootstrap
  'Experienced', // JavaScript
  'Experienced', // TypeScript
  'Experienced', // React
  'Experienced', // Python
  'Basics', // C#
  'Basics', // Selenium
  'Basics', // MySQL
  'Basics', // SQL
  'Basics', // PHP
  'Basics', // SQLite
  'Basics', // Git
  'Basics', // Figma
  'Basics', // Postman
  'Experienced', // Wordpress
];

const LINKS = [
  'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'https://sass-lang.com',
  'https://tailwindcss.com/',
  'https://getbootstrap.com/',
  'https://www.javascript.com',
  'https://www.typescriptlang.org',
  'https://reactjs.org',
  'https://www.python.org/',
  'https://learn.microsoft.com/en-us/dotnet/csharp/',
  'https://www.selenium.dev/',
  'https://www.mysql.com',
  'https://www.w3schools.com/sql/',
  'https://www.php.net/',
  'https://www.sqlite.org/index.html',
  'https://git-scm.com',
  'https://www.figma.com',
  'https://www.postman.com/',
  'https://wordpress.org',
];

const IDs = NAMES.map(
  (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z\-]/g, '') + '-img'
);

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
      onClick={() => window.open(LINKS[idx], '_blank')}
    />
  ));

  return (
    <div
      className="skills-wrapper wrapper reveal"
      id="skills"
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
