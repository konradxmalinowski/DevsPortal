import './AppOption.css';

const AppOption = ({ label, className, ...props }) => {
  return (
    <button className="option" {...props}>
      <section
        className={[
          'rectangle',
          className === 'buttons-clr' ? 'purple-rectangle' : 'grey-rectangle',
        ].join(' ')}
      ></section>
      <section className={className}>{label}</section>
    </button>
  );
};

export default AppOption;
