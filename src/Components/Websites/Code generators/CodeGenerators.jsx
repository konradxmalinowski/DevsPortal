import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import CodeGenerator from './CodeGenerator.jsx';

import './CodeGenerators.css';

const CodeGenerators = () => {
  return (
    <>
      <Header />
      <div className="snippets-wrapper">
        <section>
          <CodeGenerator
            label="Clean React Project"
            src="/Clean-react-project.7z"
          />
          <CodeGenerator
            label="Vanilla JS Project"
            src="/Vanilla-js-project.7z"
          />
          <CodeGenerator label="Basic Clock" src="/Clock.7z" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CodeGenerators;
