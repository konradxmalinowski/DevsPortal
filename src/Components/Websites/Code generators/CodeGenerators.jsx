import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import CodeGenerator from './CodeGenerator.jsx';

import './CodeGenerators.css';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

const CodeGenerators = () => {
  return (
    <>
      <Header />
      <div className="snippets-wrapper">
        <section aria-label="Code Generators Section">
          <CodeGenerator
            label="Clean React Project"
            src="/Clean-react-project.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Vanilla JS Project"
            src="/Vanilla-js-project.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Basic Clock"
            src="/Clock.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Calendar"
            src="/Calendar.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Clicker test"
            src="/Clicker test.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Ratings"
            src="/Ratings.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
          <CodeGenerator
            label="Weather forecast"
            src="/Weather forecast.7z"
            handleScrollIntoView={handleScrollIntoView}
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CodeGenerators;
