const Application = ({ img, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={img} alt={alt} title="To open website click image" />
    </div>
  );
};

export default Application;
