import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import About from './About/About.jsx';
import Partners from './Partners/Partners.jsx';
import Applications from './Applications/Applications.jsx';
import Cookies from '../../Common components/Cookies/Cookies.jsx';

import './App.css';

export default function App() {
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
      <About handleScrollIntoView={handleScrollIntoView} />
      <Partners handleScrollIntoView={handleScrollIntoView} />
      <Applications handleScrollIntoView={handleScrollIntoView} />
      <Footer />
      <Cookies />
    </>
  );
}
