import './Option.css';

const Option = ({ label, className, ...props }) => {
  return (
    <button className="option" {...props}>
      <section
        className={[
          'rectangle',
          className === 'buttons-clr' ? 'green-rectangle' : 'grey-rectangle',
        ].join(' ')}
      ></section>
      <section className={className}>{label}</section>
    </button>
  );
};

export default Option;
