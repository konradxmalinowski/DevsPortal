import Button from '../Button/Button.jsx';

import './Cookies.css';
import cookiesImg from '../../../assets/cookies.png';
import { useState } from 'react';

const Cookies = () => {
  const [cookies, setCookies] = useState(() => localStorage.getItem('cookies'));

  const handleAcceptDecline = () => {
    localStorage.setItem('cookies', 'true');
    setCookies(true);
  };

  return (
    <>
      {cookies == null ? (
        <div class="card-cookies">
          <img src={cookiesImg} alt="cookies image" />
          <p class="cookie-heading">We use cookies.</p>
          <p class="cookie-description">
            This website uses cookies to ensure you get the best experience on
            our site.
          </p>

          <div class="button-container">
            <Button
              label="Allow"
              className="purple-button accept-button"
              onClick={handleAcceptDecline}
              aria-label="Allow cookies"
            />
            <Button
              label="Decline"
              className="purple-button decline-button"
              onClick={handleAcceptDecline}
              aria-label="Decline cookies"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cookies;
