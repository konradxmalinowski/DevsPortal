import Input from '../../../Common components/Input.jsx';
import Button from '../../../Common components/Button/Button.jsx';
import Modal from '../../../Common components/Modal/Modal.jsx';

import { emailRegEx, numberRegEx } from '../../../../utils/RegEx.js';

import { useRef, useState } from 'react';

const RightContact = () => {
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
    return 'Enter correct phone number eg. +48111111111';
  };

  const validateEmail = () => {
    if (email.trim() && emailRegEx.test(email)) return true;
    return 'Enter correct email eg. test@example.com';
  };

  const handleSubmit = async () => {
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

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch(
        'https://devsportal.ct8.pl/api/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      setModalContent(result);
    } catch {
      setModalContent('Error with fetching data');
    }

    modalRef.current.open();
  };

  return (
    <>
      <div className="right-contact">
        <form
          autoComplete="true"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="text"
            label="Name: "
            required={true}
            onChange={(event) => {
              setName(event.target.value.toString().trim());
            }}
            defaultValue={name}
          />

          <Input
            type="tel"
            label="Phone: "
            required={false}
            onChange={(event) => {
              setPhone(event.target.value.toString().trim());
            }}
            defaultValue={phone}
          />

          <Input
            type="email"
            label="Email: "
            required={true}
            onChange={(event) => {
              setEmail(event.target.value.toString().trim());
            }}
            defaultValue={email}
          />

          <div>
            <label htmlFor="message">Message:</label>
            <div className="password-wrapper">
              <textarea
                name="message"
                id="message"
                required={true}
                onChange={(event) => {
                  setMessage(event.target.value.toString().trim());
                }}
                defaultValue={message}
              ></textarea>
            </div>
          </div>

          <Button className="purple-button" label="Send message" />
        </form>
      </div>
      <Modal ref={modalRef} isFormShown={true}>
        {modalContent}
      </Modal>
    </>
  );
};

export default RightContact;
