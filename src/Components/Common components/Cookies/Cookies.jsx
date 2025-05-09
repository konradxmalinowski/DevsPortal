import Button from '../Button/Button.jsx';

import './styles/Cookies.css';
import { useState } from 'react';

const Cookies = () => {
  const [cookies, setCookies] = useState(() => localStorage.getItem('cookies'));

  const handleAcceptAll = () => {
    localStorage.setItem('cookies', 'true');
    setCookies(true);
  };

  const handleAcceptRequired = () => {
    localStorage.setItem('cookies', 'required');
    setCookies(true);
  };

  return (
    <>
      {cookies == null ? (
        <div className="card-cookies">
          <h4 className="cookie-heading">Cookie Policy 🍪</h4>
          <p className="cookie-description">
            By clicking "Accept all", you agree that our website may store
            cookies on your device and disclose information in accordance with
            our Cookie Policy.
          </p>

          <div className="button-container">
            <Button
              label="Accept all"
              className="purple-button accept-button"
              onClick={handleAcceptAll}
              aria-label="Accept all"
            />
            <Button
              label="Accept only required"
              className="purple-button decline-button"
              onClick={handleAcceptRequired}
              aria-label="Accept only required"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cookies;
