import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import './Login.css';
import './form.css';

import hidePasswordIcon from './../../../assets/Password Icons/hide_password.png';
import showPasswordIcon from './../../../assets/Password Icons/show_password.png';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Button from '../../Common components/Button/Button.jsx';
import Input from './Input.jsx';

import { emailRegEx, passwordRegex as passwordRegEx } from '../../../RegEx.js';
import Modal from '../../Common components/Modal/Modal.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const dialogRef = useRef(null);

  function handleLogin() {
    if (!emailRegEx.test(email)) {
      setDialogContent('Enter correct format of email');
      dialogRef.current?.open();
      return;
    }
    if (!passwordRegEx.test(password)) {
      setDialogContent('Enter correct format of password');
      dialogRef.current?.open();
      return;
    }
  }

  return (
    <>
      <Header />
      <section className="login-wrapper">
        <div>
          <div>
            <h2>Welcome back!</h2>
            <p className="grey">Enter your details to login</p>
          </div>
          <form
            action=""
            method="post"
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <Input
              type="email"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              required={true}
              autoFocus
            />
            <Input
              type="password"
              label="Password"
              onChange={(event) => setPassword(event.target.value)}
              required={true}
              showIcon={showPasswordIcon}
              hideIcon={hidePasswordIcon}
            />
            <div className="group">
              <label>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  defaultChecked
                  required
                />
                Remember me
              </label>
              <p>
                Forgot Password? <Link to="/resetPassword">Reset it</Link>
              </p>
            </div>
            <Button label="Login" onClick={handleLogin} />
          </form>
        </div>
      </section>
      <Modal ref={dialogRef}>{dialogContent}</Modal>
      <Footer />
    </>
  );
};

export default Login;
