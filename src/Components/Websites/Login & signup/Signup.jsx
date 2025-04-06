import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Signup.css';
import './form.css';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Modal from '../../Common components/Modal/Modal.jsx';
import Step1 from './Steps/Step1.jsx';
import Step2 from './Steps/Step2.jsx';
import Step3 from './Steps/Step3.jsx';
import Step4 from './Steps/Step4.jsx';

const userDataBasic = {
  username: '',
  email: '',
  password: '',
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ ...userDataBasic });
  const [dialogContent, setDialogContent] = useState('');
  const dialogRef = useRef(null);

  const handleClickNext = async (regEx, ref, type, additionalCheck = null) => {
    const inputValue = ref.current?.value.trim() || '';

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

    if (step === 4) {
      if (inputValue !== userData.password) {
        setDialogContent('Passwords do not match');
        dialogRef.current?.open();
        return;
      }
      try {
        const response = await fetch('/api/signup.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
          setDialogContent('Signup completed! Redirecting to login...');
          dialogRef.current?.open();
          setTimeout(() => (window.location.href = '/login'), 2000);
        } else {
          setDialogContent(data.message || 'Signup failed');
          dialogRef.current?.open();
        }
      } catch (error) {
        setDialogContent('Server error: ' + error.message);
        dialogRef.current?.open();
      }
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
    <Step4 key="step4" stepFunctions={stepFunctions} userData={userData} />,
  ];

  return (
    <>
      <Header />
      <section className="signup-wrapper">
        <div>
          <div>
            Step <span className="bold">{step}</span> of 4
          </div>
          <progress value={step} max={4}></progress>
          <form onSubmit={(e) => e.preventDefault()}>{steps[step - 1]}</form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
      <Modal ref={dialogRef}>{dialogContent}</Modal>
      <Footer />
    </>
  );
};

export default Signup;
