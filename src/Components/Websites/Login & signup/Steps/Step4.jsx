import { useEffect, useRef } from 'react';
import Button from '../../../Common components/Button/Button.jsx';

import { numberRegEx } from '../../../../RegEx.js';
import { handleScrollIntoView } from '../../../../utils/handleScrollIntoView.js';

const Step4 = ({ stepFunctions }) => {
  const phoneNumberRef = useRef();
  const countryCodeRef = useRef();

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleNext = () => {
    const countryCode = countryCodeRef.current.value.trim();
    const phoneNumber = phoneNumberRef.current.value.trim();

    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

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
    <div ref={ref} className="reveal">
      <h2>Phone number</h2>
      <label htmlFor="country-number">
        <input
          type="text"
          name="country-number"
          id="country-number"
          list="country-number-list"
          ref={countryCodeRef}
          placeholder="Country Code"
          aria-label="Enter country code"
          onChange={(event) => handleClickEnter(event)}
          onKeyDown={(event) => handleClickEnter(event)}
        />
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          ref={phoneNumberRef}
          placeholder="Phone Number"
          aria-label="Enter phone number"
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
          aria-label="Go back to the previous step"
        />

        <Button
          label="Next"
          onClick={handleNext}
          className="email-button green-button"
          type="dark"
          aria-label="Proceed to the next step"
        />
      </div>
    </div>
  );
};

export default Step4;
