import './ResetPassword.css';

import Header from '../../Common components/Header/Header';
import Footer from '../../Common components/Footer/Footer';
import Input from '../../Common components/Input';
import Button from '../../Common components/Button/Button';

const ResetPassword = () => {
  return (
    <>
      <Header />
      <section className="reset-password-wrapper">
        <div>
          <h2>Forgot password</h2>
          <p className="grey">
            Enter your email address to receive a password reset link.
          </p>

          <Input type="email" label="Email address" autoFocus />
          <Button label="Send email" type="dark" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPassword;
