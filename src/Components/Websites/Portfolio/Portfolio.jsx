import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Author from './Author.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Rates from './Rates.jsx';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      <Header />

      <Author />
      <Projects />
      <Skills />
      <Rates />

      <Footer />
    </>
  );
};

export default Portfolio;
