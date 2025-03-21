import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import About from './About';
import Partners from './Partners';
import Applications from './Applications.jsx';

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
