import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Author from './Author.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Rates from './Rates.jsx';
import Gallery from './Gallery.jsx';

import './Portfolio.css';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Author handleScrollIntoView={handleScrollIntoView} />
      <Projects handleScrollIntoView={handleScrollIntoView} />
      <Skills handleScrollIntoView={handleScrollIntoView} />
      <Gallery handleScrollIntoView={handleScrollIntoView} />
      <Rates handleScrollIntoView={handleScrollIntoView} />
      <Footer handleScrollIntoView={handleScrollIntoView} />
    </>
  );
};

export default Portfolio;
