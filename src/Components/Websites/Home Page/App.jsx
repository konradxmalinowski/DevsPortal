import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import About from './About/About.jsx';
import Partners from './Partners/Partners.jsx';
import Applications from './Applications/Applications.jsx';
import Cookies from '../../Common components/Cookies/Cookies.jsx';
import Ratings from './Ratings/Ratings.jsx';
import Faq from './Faq/Faq.jsx';
import Contact from './Contact/Contact.jsx';

import './styles/App.css';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

export default function App() {
  return (
    <>
      <Header />
      <About handleScrollIntoView={handleScrollIntoView} />
      <Partners handleScrollIntoView={handleScrollIntoView} />
      <Applications handleScrollIntoView={handleScrollIntoView} />
      <Ratings handleScrollIntoView={handleScrollIntoView} />
      <Faq handleScrollIntoView={handleScrollIntoView} />
      <Contact handleScrollIntoView={handleScrollIntoView} />
      <Footer />
      <Cookies />
    </>
  );
}
