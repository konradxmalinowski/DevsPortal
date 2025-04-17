import Button from '../../Common components/Button/Button';

const BlogItem = ({ title, content, seenLength, onClick }) => {
  let words = content.split(' ');
  words = words.slice(0, seenLength + 1);
  words = words.join(' ');

  return (
    <div className="blog-item">
      <h2>{title}</h2>
      <pre>{words}...</pre>
      <Button onClick={onClick} className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Read More</span>
      </Button>
    </div>
  );
};

export default BlogItem;
