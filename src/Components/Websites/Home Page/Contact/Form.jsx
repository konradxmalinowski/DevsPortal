import Input from '../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';
import Modal from '../../../Common components/Modal/Modal.jsx';

import { emailRegEx, numberRegEx } from '../../../../utils/RegEx.js';

import { useRef, useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalContent, setModalContent] = useState('Sent!');

  const modalRef = useRef();

  const validateName = () => {
    return name.trim() !== '' ? true : "Name's length should be more than 1.";
  };

  const validatePhone = () => {
    if (phone.trim() && numberRegEx.test(phone)) return true;
    return 'Enter a valid phone number, e.g., +48111111111';
  };

  const validateEmail = () => {
    if (email.trim() && emailRegEx.test(email)) return true;
    return 'Enter a valid email, e.g., test@example.com';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validatedPhone = validatePhone();
    const validatedName = validateName();
    const validatedEmail = validateEmail();

    if (validatedPhone !== true) {
      setModalContent(validatedPhone);
      modalRef.current.open();
      return;
    }

    if (validatedEmail !== true) {
      setModalContent(validatedEmail);
      modalRef.current.open();
      return;
    }

    if (validatedName !== true) {
      setModalContent(validatedName);
      modalRef.current.open();
      return;
    }

    if (message.trim() === '') {
      setModalContent('Message cannot be empty.');
      modalRef.current.open();
      return;
    }

    try {
      const response = await fetch(
        'http://localhost/Developers%20portal/api/contact.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name,
            phone,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setModalContent('✅ Message has been sent!');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setModalContent('❌ ' + result.message);
      }
    } catch {
      setModalContent('❌ Something went wrong. Please try again.');
    }
    modalRef.current.open();
  };

  return (
    <>
      <div className="right-contact">
        <form autoComplete="on" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Name: "
            required={true}
            onChange={(event) => {
              setName(event.target.value.trim());
            }}
            value={name}
          />

          <Input
            type="tel"
            label="Phone: "
            required={false}
            onChange={(event) => {
              setPhone(event.target.value.trim());
            }}
            value={phone}
          />

          <Input
            type="email"
            label="Email: "
            required={true}
            onChange={(event) => {
              setEmail(event.target.value.trim());
            }}
            value={email}
          />

          <div>
            <label htmlFor="message">Message:</label>
            <div className="password-wrapper">
              <textarea
                name="message"
                id="message"
                required={true}
                onChange={(event) => {
                  setMessage(event.target.value.trim());
                }}
                value={message}
              ></textarea>
            </div>
          </div>

          <Button
            className="purple-button"
            label="Send message"
            type="submit"
          />
        </form>
      </div>

      <Modal ref={modalRef} isFormShown={true}>
        {modalContent}
      </Modal>
    </>
  );
};

export default Form;
