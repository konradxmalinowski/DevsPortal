import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import './Login.css';
import './form.css';

import hidePasswordIcon from './../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../assets/Password Icons/show_password.png';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Button from '../../Common components/Button/Button.jsx';
import Input from './../../Common components/Input.jsx';
import Modal from '../../Common components/Modal/Modal.jsx';

import { emailRegEx, passwordRegEx } from '../../../RegEx.js';
import DialogContentHTML from './DialogContentHTML.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!emailRegEx.test(email)) {
      setDialogContent('Enter correct email format');
      dialogRef.current?.open();
      return;
    }
    if (!passwordRegEx.test(password)) {
      setDialogContent('Enter correct password');
      dialogRef.current?.open();
      return;
    }

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
        localStorage.setItem('token', data.token);
        setDialogContent(<DialogContentHTML content="Login" />);

        dialogRef.current?.open();
        setTimeout(() => {
          dialogRef.current?.close();
          navigate('/adminPanel');
        }, 4000);
      } else {
        setDialogContent(data.message || 'Login failed');
        dialogRef.current?.open();
      }
    } catch (error) {
      setDialogContent('Server error: ' + error.message);
      dialogRef.current?.open();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setDialogContent(<DialogContentHTML content="Logout..." />);
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
      <section className="login-wrapper">
        <div>
          {isLoggedIn ? (
            <div>
              <p className="logged-in">You are already logged in.</p>
              <Button label="Logout" onClick={handleLogout} />
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
              >
                <Input
                  type="email"
                  label="Email"
                  onChange={(event) => setEmail(event.target.value.trim())}
                  autoFocus
                />
                <Input
                  type="password"
                  label="Password"
                  onChange={(event) => setPassword(event.target.value.trim())}
                  showIcon={showPasswordIcon}
                  hideIcon={hidePasswordIcon}
                />

                <Button label="Login" onClick={handleLogin} />
              </form>
              <p className="login-details">
                Forgot Password? <Link to="/resetPassword">Reset it</Link>
              </p>
            </>
          )}
          {!isLoggedIn && (
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          )}
        </div>
      </section>
      <Modal ref={dialogRef} id="login-and-signup">
        {dialogContent}
      </Modal>
      <Footer />
    </>
  );
};

export default Login;
