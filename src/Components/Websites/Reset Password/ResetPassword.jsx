import './ResetPassword.css';

import Header from '../../Common components/Header/Header';
import Footer from '../../Common components/Footer/Footer';
import Input from '../../Common components/Input';
import Button from '../../Common components/Button/Button';

const ResetPassword = () => {
  return (
    <>
      <Header />
      <section
        className="reset-password-wrapper"
        aria-label="Reset Password Section"
      >
        <div>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPassword;
