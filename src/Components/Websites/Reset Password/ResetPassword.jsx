import './styles/ResetPassword.css';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Input from '../../Common components/Input.jsx';
import Button from '../../Common components/Button/Button.jsx';

import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Page404');
  };

  return (
    <>
      <Header />
      <section
        className="reset-password-wrapper"
        aria-label="Reset Password Section"
      >
        <form onSubmit={handleSubmit}>
          <h2>Forgot password</h2>
          <p className="grey" aria-label="Instruction to reset password">
            Enter your email address to receive a password reset link.
          </p>

          <Input
            type="email"
            label="Email address"
            autoFocus
            aria-label="Enter your email address"
          />
          <Button
            label="Send email"
            type="dark"
            aria-label="Send password reset email"
          />
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ResetPassword;
