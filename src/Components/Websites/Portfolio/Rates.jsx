import Button from '../../Common components/Button/Button.jsx';

const Rates = () => {
  return (
    <div className="rates-wrapper wrapper">
      <h1>Do you want to rate this website?</h1>
      <p>
        I encourage you to click the button below and share your feedback on my
        work in creating this website.
      </p>
      <a href="mailto:konradmalinowski@zsezdwola.com" target="_blank">
        <Button label="Rate website" className="purple-button" />
      </a>
    </div>
  );
};

export default Rates;
