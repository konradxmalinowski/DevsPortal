import { useEffect, useRef } from 'react';

import Project from './Project/Project.jsx';

const labels = ['Shop', 'To do list', 'Exam'];
const descriptions = [
  'A modern e-commerce site with easy navigation, product listings, and a smooth checkout process.',
  'A minimalist to-do list app for creating, managing, and prioritizing tasks.',
  'An exam test for the INF.03 certification focused on JavaScript, jQuery, and React.',
];
const links = [
  'https://portfolio-website.ct8.pl/websites/shop/',
  'https://portfolio-website.ct8.pl/websites/todo-list/',
  'https://portfolio-website.ct8.pl/websites/exam-test/',
];

const Projects = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  const projects = labels.map((label, idx) => (
    <Project
      name={label}
      description={descriptions[idx]}
      link={links[idx]}
      key={idx}
    />
  ));

  return (
    <div
      className="projects-wrapper wrapper reveal"
      ref={ref}
      aria-label="Projects Section"
    >
      <section aria-label="Projects introduction">
        <h1 aria-label="Projects heading">Let's check out my projects</h1>
        <p aria-label="GitHub projects note">
          All other interesting projects can be found on my GitHub!
        </p>
      </section>
      <div aria-label="List of projects">{projects}</div>
    </div>
  );
};

export default Projects;
