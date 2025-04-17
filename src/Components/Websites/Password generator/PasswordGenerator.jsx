import { useRef, useState } from 'react';

import './PasswordGenerator.css';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import ResultSection from './ResultSection';
import Buttons from './Buttons';
import LengthSection from './LengthSection';
import AdditionalOptions from './AdditionalOptions';
import Modal from '../../Common components/Modal/Modal.jsx';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(50);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
  });
  const [message, setMessage] = useState('');
  const modalRef = useRef(null);

  const createMessage = (content) => {
    setMessage(content);
    modalRef.current.open();
  };

  return (
    <>
      <Header />
      <section className="password-generator-wrapper wrapper">
        <div>
          <ResultSection password={password} />
          <Buttons
            setPassword={setPassword}
            passwordLength={passwordLength}
            options={options}
            createMessage={createMessage}
            password={password}
          />
          <LengthSection
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <AdditionalOptions options={options} setOptions={setOptions} />
        </div>
      </section>
      <Footer />

      <Modal ref={modalRef}>{message}</Modal>
    </>
  );
};

export default PasswordGenerator;
