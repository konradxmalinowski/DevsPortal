import Button from '../../Common components/Button/Button.jsx';

import { useRef, useEffect } from 'react';

const BlogItem = ({
  title,
  content,
  seenLength,
  onClick,
  handleScrollIntoView,
}) => {
  let words = content.split(' ');
  words = words.slice(0, seenLength + 1);
  words = words.join(' ');

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div className="blog-item reveal" ref={ref}>
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
