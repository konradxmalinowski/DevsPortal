import { useEffect, useRef, useState } from 'react';

import './styles/PasswordGenerator.css';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import ResultSection from './ResultSection.jsx';
import Buttons from './Buttons.jsx';
import LengthSection from './LengthSection.jsx';
import AdditionalOptions from './AdditionalOptions.jsx';
import Message from '../../Common components/Message/Message.jsx';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

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
  const [isMessageShow, setIsMessageShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const createMessage = (content) => {
    setIsMessageShow(false);
    setMessage(content);

    setTimeout(() => {
      setIsMessageShow(true);
    }, 500);
  };

  return (
    <>
      <Header />
      <section
        className="password-generator-wrapper wrapper reveal"
        ref={ref}
        aria-label="Password Generator Section"
      >
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

      <Message content={message} isShownMessage={isMessageShow} />
    </>
  );
};

export default PasswordGenerator;
