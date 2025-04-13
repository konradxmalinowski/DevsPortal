import Button from '../../Common components/Button/Button';

const BlogItem = ({ title, content, seenLength, onClick }) => {
  let words = content.split(' ');
  words = words.slice(0, seenLength + 1);
  words = words.join(' ');

  return (
    <div className="blog-item">
      <h2>{title}</h2>
      <pre>{words}...</pre>

      <Button label="Show more" onClick={onClick} className="green-button" />
    </div>
  );
};

export default BlogItem;
