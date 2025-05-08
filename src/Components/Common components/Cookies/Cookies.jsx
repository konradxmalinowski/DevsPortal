import Button from '../Button/Button.jsx';

import './Cookies.css';
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
          <h4 className="cookie-heading">Polityka cookies 🍪</h4>
          <p className="cookie-description">
            Klikając „Akceptuję wszystkie”, zgadzasz się, aby nasza strona
            internetowa przechowywała pliki cookies na Twoim urządzeniu i
            ujawniała informacje zgodnie z naszą Polityką cookies.
          </p>

          <div className="button-container">
            <Button
              label="Akceptuję wszystkie"
              className="purple-button accept-button"
              onClick={handleAcceptAll}
              aria-label="Akceptuję wszystkie"
            />
            <Button
              label="Akceptuj tylko wymagane"
              className="purple-button decline-button"
              onClick={handleAcceptRequired}
              aria-label="Akceptuj tylko wymagane"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cookies;
