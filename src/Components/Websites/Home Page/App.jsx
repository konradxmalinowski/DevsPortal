import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import About from './About/About.jsx';
import Partners from './Partners/Partners.jsx';
import Applications from './Applications/Applications.jsx';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Partners />
      <Applications />
      <Footer />
    </>
  );
}
