import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Signup.css';
import './form.css';

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
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const validateData = (regEx, ref, type, additionalCheck = null) => {
    let inputValue;

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
      setDialogContent(
        `Please enter a valid ${type} (e.g., ${
          type === 'email'
            ? 'user@example.com'
            : type === 'password'
            ? 'minimum 8 characters'
            : 'minimum 3 characters'
        })`
      );
      dialogRef.current?.open();
      return;
    }

    if (type === 'phone' && !regEx.test(inputValue)) {
      setDialogContent('Please enter a valid phone number');
      dialogRef.current?.open();
      return;
    }

    return inputValue;
  };

  const handleEndStep = async (inputValue) => {
    if (inputValue !== userData.password) {
      setDialogContent('Passwords do not match');
      dialogRef.current?.open();
      return;
    }
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
        setDialogContent(<DialogContentHTML content="Success!" />);

        dialogRef.current?.open();
        setTimeout(() => {
          navigate('/login');
          dialogRef.current.close();
        }, 4000);
      } else {
        setDialogContent(data.message || 'Signup failed');
        dialogRef.current?.open();

        setTimeout(() => {
          dialogRef.current.close();
        }, 1000);
        return;
      }
    } catch (error) {
      setDialogContent('Server error: ' + error.message);
      dialogRef.current?.open();

      setTimeout(() => {
        dialogRef.current.close();
      }, 1000);
      return;
    }
  };

  const handleClickNext = async (regEx, ref, type, additionalCheck = null) => {
    let inputValue = validateData(regEx, ref, type, additionalCheck);

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
          setDialogContent(
            `${
              type === 'username'
                ? 'Username'
                : type === 'email'
                ? 'Email'
                : 'Phone'
            } is already taken`
          );
          dialogRef.current?.open();
          return;
        }
      } catch (error) {
        setDialogContent('Server error: ' + error.message);
        dialogRef.current?.open();
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
          <form onSubmit={(e) => e.preventDefault()} aria-label="Signup form">
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
      <Modal
        className="login-and-signup"
        ref={dialogRef}
        isFormShown={false}
        aria-label="Signup modal"
      >
        {DialogContent}
      </Modal>
      <Footer />
    </>
  );
};

export default Signup;
