import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Author from './Author.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Rates from './Rates.jsx';
import Gallery from './Gallery.jsx';

import './Portfolio.css';

const Portfolio = () => {
  const handleScrollIntoView = (ref) => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('active');
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.2,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return [element, observer];
  };

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
