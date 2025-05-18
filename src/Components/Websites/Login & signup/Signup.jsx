import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/Signup.css';
import './styles/form.css';

import DialogContentHTML from './DialogContentHTML.jsx';
import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Modal from '../../Common components/Modal/Modal.jsx';
import Step1 from './Steps/Step1.jsx';
import Step2 from './Steps/Step2.jsx';
import Step3 from './Steps/Step3.jsx';
import Step4 from './Steps/Step4.jsx';
import Step5 from './Steps/Step5.jsx';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';
import Message from '../../Common components/Message/Message.jsx';

const userDataBasic = {
  username: '',
  email: '',
  password: '',
  phone: '',
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ ...userDataBasic });
  const [DialogContent, setDialogContent] = useState('');
  const [isFormShown, setIsFormShown] = useState(true);
  const [message, setMessage] = useState('');
  const [isMessageShown, setIsMessageShown] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleShowMessage = (content) => {
    setMessage(content);
    setIsMessageShown(false);

    setTimeout(() => {
      setIsMessageShown(true);
    }, 500);
  };

  const validateData = (regEx, ref, type, additionalCheck = null) => {
    let inputValue;
    let isValid = true;

    setIsFormShown(false);

    if (typeof ref.current.value === 'number') {
      inputValue = ref.current?.value.toString().trim() || '';
    } else {
      inputValue = ref.current?.value.trim() || '';
    }

    if (
      !inputValue ||
      !regEx.test(inputValue) ||
      (additionalCheck && !additionalCheck(inputValue))
    ) {
      setIsFormShown(true);
      handleShowMessage(
        `Please enter a valid ${type} (e.g., ${
          type === 'email'
            ? 'user@example.com'
            : type === 'password'
            ? 'minimum 8 characters'
            : 'minimum 3 characters'
        })`
      );
      isValid = false;
    }

    if (type === 'phone' && !regEx.test(inputValue)) {
      setIsFormShown(true);
      handleShowMessage('Please enter a valid phone number');
      isValid = false;
    }

    return { inputValue, isValid };
  };

  const handleEndStep = async (inputValue) => {
    if (inputValue !== userData.password) {
      setIsFormShown(true);
      handleShowMessage('Passwords do not match');
      return;
    }

    setIsFormShown(false);
    try {
      const response = await fetch(
        'http://localhost/Developers%20portal/api/signup.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setIsFormShown(false);
        setDialogContent(<DialogContentHTML content="Success!" />);

        dialogRef.current?.open();
        setTimeout(() => {
          navigate('/login');
          dialogRef.current.close();
        }, 4000);
      } else {
        handleShowMessage('Signup failed. Enter correct data');
        return;
      }

      setIsFormShown(false);
    } catch (error) {
      handleShowMessage('Signup failed. Enter correct data.');
      return;
    }
  };

  const handleClickNext = async (regEx, ref, type, additionalCheck = null) => {
    let { inputValue = '', isValid } = validateData(
      regEx,
      ref,
      type,
      additionalCheck
    );

    if (!isValid) return;

    if (type === 'username' || type === 'email' || type === 'phone') {
      try {
        const response = await fetch(
          'http://localhost/Developers%20portal/api/checkAvailability.php',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type,
              value: inputValue,
            }),
          }
        );
        const data = await response.json();

        if (!data.available) {
          handleShowMessage(
            `${
              type === 'username'
                ? 'Username'
                : type === 'email'
                ? 'Email'
                : 'Phone'
            } is already taken`
          );
          return;
        }
      } catch (error) {
        handleShowMessage('Signup failed');
        return;
      }
    }

    if (step === 5) {
      handleEndStep(inputValue);
      return;
    }

    setUserData((prev) => ({ ...prev, [type]: inputValue }));
    setStep((prevStep) => prevStep + 1);
  };

  const stepFunctions = {
    setStep,
    setUserData,
    handleClickNext,
    setDialogContent,
  };

  const steps = [
    <Step1 key="step1" stepFunctions={stepFunctions} />,
    <Step2 key="step2" stepFunctions={stepFunctions} />,
    <Step3 key="step3" stepFunctions={stepFunctions} />,
    <Step4 key="step4" stepFunctions={stepFunctions} />,
    <Step5 key="step5" stepFunctions={stepFunctions} userData={userData} />,
  ];

  return (
    <>
      <Header />
      <section
        className="signup-wrapper reveal"
        ref={ref}
        aria-label="Signup Section"
      >
        <div>
          <div aria-label="Signup progress">
            Step <span className="bold">{step}</span> of 5
          </div>
          <progress
            value={step}
            max={5}
            aria-label="Signup progress bar"
          ></progress>
          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label="Signup form"
            name="signup-form"
            id="signup-form"
            autoComplete="true"
          >
            {steps[step - 1]}
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/login" aria-label="Go to login page">
              Login
            </Link>
          </p>
        </div>
      </section>
      <Footer />
      <Modal
        className="login-and-signup"
        ref={dialogRef}
        isFormShown={isFormShown}
        aria-label="Signup modal"
      >
        {DialogContent}
      </Modal>
      <Message content={message} isShownMessage={isMessageShown} />
    </>
  );
};

export default Signup;
