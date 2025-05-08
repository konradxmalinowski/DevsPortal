import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import './styles/Login.css';
import './styles/form.css';

import hidePasswordIcon from './../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../assets/Password Icons/show_password.png';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Button from '../../Common components/Button/Button.jsx';
import Input from './../../Common components/Input.jsx';
import Modal from '../../Common components/Modal/Modal.jsx';
import DialogContentHTML from './DialogContentHTML.jsx';

import { emailRegEx, passwordRegEx } from '../../../RegEx.js';
import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);

  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleLogin = async () => {
    if (!emailRegEx.test(email)) {
      setIsFormShown(true);
      setDialogContent('Enter correct email format');
      dialogRef.current?.open();
      return;
    }
    if (!passwordRegEx.test(password)) {
      setIsFormShown(true);
      setDialogContent('Enter correct password');
      dialogRef.current?.open();
      return;
    }

    setIsFormShown(false);

    await handleFetchData();
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        'http://localhost/Developers%20portal/api/login.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setIsFormShown(false);
        localStorage.setItem('token', data.token);
        setDialogContent(<DialogContentHTML content="Login" />);

        dialogRef.current?.open();
        setTimeout(() => {
          dialogRef.current?.close();
          navigate('/adminPanel');
        }, 4000);
      } else {
        setIsFormShown(true);
        setDialogContent(data.message || 'Login failed');
        dialogRef.current?.open();
      }

      setIsFormShown(false);
    } catch (error) {
      setIsFormShown(true);
      setDialogContent('Server error: ' + error.message);
      dialogRef.current?.open();
    }

    setIsFormShown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setDialogContent(<DialogContentHTML content="Logout" />);
    dialogRef.current.open();

    setTimeout(() => {
      dialogRef.current.close();
      setIsLoggedIn(false);
      navigate('/');
    }, 4000);
  };

  return (
    <>
      <Header />
      <section
        className="login-wrapper reveal"
        ref={ref}
        aria-label="Login Section"
      >
        <div>
          {isLoggedIn ? (
            <div>
              <p className="logged-in">You are already logged in.</p>
              <Button
                label="Logout"
                onClick={handleLogout}
                aria-label="Log out of your account"
              />
            </div>
          ) : (
            <>
              <div>
                <h2>Welcome back!</h2>
                <p className="grey">Enter your details to login</p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleLogin();
                }}
                aria-label="Login form"
              >
                <Input
                  type="email"
                  label="Email"
                  onChange={(event) => setEmail(event.target.value.trim())}
                  autoFocus
                  aria-label="Enter your email address"
                />
                <Input
                  type="password"
                  label="Password"
                  onChange={(event) => setPassword(event.target.value.trim())}
                  showIcon={showPasswordIcon}
                  hideIcon={hidePasswordIcon}
                  aria-label="Enter your password"
                />

                <Button
                  label="Login"
                  onClick={handleLogin}
                  aria-label="Log in to your account"
                />
                <Button
                  label="Continue with Google"
                  className="continue-with-google continue-with"
                  aria-label="Continue login with Google"
                />
                <Button
                  label="Continue with Apple"
                  className="continue-with-apple continue-with"
                  aria-label="Continue login with Apple"
                />
              </form>
              <p className="login-details">
                Forgot Password?{' '}
                <Link to="/resetPassword" aria-label="Reset your password">
                  Reset it
                </Link>
              </p>
            </>
          )}
          {!isLoggedIn && (
            <p>
              Don't have an account?{' '}
              <Link to="/signup" aria-label="Sign up for a new account">
                Sign up
              </Link>
            </p>
          )}
        </div>
      </section>
      <Modal
        ref={dialogRef}
        className="login-and-signup"
        isFormShown={isFormShown}
        aria-label="Login modal"
      >
        {dialogContent}
      </Modal>
      <Footer />
    </>
  );
};

export default Login;
