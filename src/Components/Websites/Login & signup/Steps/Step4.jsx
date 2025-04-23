import Button from '../../../Common components/Button/Button.jsx';
import { numberRegEx } from '../../../../RegEx.js';
import { useRef } from 'react';

const Step4 = ({ stepFunctions }) => {
  const phoneNumberRef = useRef();
  const countryCodeRef = useRef();

  const handleNext = () => {
    const countryCode = countryCodeRef.current.value.trim();
    const phoneNumber = phoneNumberRef.current.value.trim();

    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    if (!numberRegEx.test(phoneNumber)) {
      stepFunctions.setDialogContent('Please enter a valid phone number');
      stepFunctions.dialogRef.current?.open();
      return;
    }

    stepFunctions.handleClickNext(
      numberRegEx,
      { current: { value: fullPhoneNumber } },
      'phone'
    );
  };

  function handleClickEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleNext();
    }
  }

  return (
    <>
      <h2>Phone number</h2>
      <label htmlFor="country-number">
        <input
          type="text"
          name="country-number"
          id="country-number"
          list="country-number-list"
          ref={countryCodeRef}
          placeholder="Country Code"
          onChange={(event) => handleClickEnter(event)}
          onKeyDown={(event) => handleClickEnter(event)}
        />
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          ref={phoneNumberRef}
          placeholder="Phone Number"
          onChange={(event) => handleClickEnter(event)}
          onKeyDown={(event) => handleClickEnter(event)}
        />

        <datalist id="country-number-list">
          <option value="+1">🇺🇸 United States</option>
          <option value="+44">🇬🇧 United Kingdom</option>
          <option value="+49">🇩🇪 Germany</option>
          <option value="+33">🇫🇷 France</option>
          <option value="+39">🇮🇹 Italy</option>
          <option value="+34">🇪🇸 Spain</option>
          <option value="+48">🇵🇱 Poland</option>
          <option value="+81">🇯🇵 Japan</option>
          <option value="+86">🇨🇳 China</option>
          <option value="+82">🇰🇷 South Korea</option>
          <option value="+91">🇮🇳 India</option>
          <option value="+61">🇦🇺 Australia</option>
          <option value="+64">🇳🇿 New Zealand</option>
          <option value="+1">🇨🇦 Canada</option>
          <option value="+47">🇳🇴 Norway</option>
          <option value="+46">🇸🇪 Sweden</option>
        </datalist>
      </label>

      <div className="buttons-wrapper">
        <Button
          label="Back"
          onClick={() => stepFunctions.setStep((prevStep) => prevStep - 1)}
          className="come-back-button"
          type="dark"
        />

        <Button
          label="Next"
          onClick={handleNext}
          className="email-button green-button"
          type="dark"
        />
      </div>
    </>
  );
};

export default Step4;
