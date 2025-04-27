import { useRef, useState } from 'react';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import BlogItem from './BlogItem.jsx';
import Modal from './../../Common components/Modal/Modal.jsx';

import './Blog.css';
import { blogs } from './blogs.js';

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const modalRef = useRef(null);

  const handleScrollIntoView = (ref) => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('active');
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.2,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return [element, observer];
  };

  const blogsItems = blogs.map((blog) => (
    <BlogItem
      title={blog.title}
      content={blog.content}
      seenLength={50}
      onClick={() => handleShowMore(blog.id)}
      key={blog.id}
      handleScrollIntoView={handleScrollIntoView}
    />
  ));

  function handleShowMore(topicNumber) {
    setSelectedTopic(topicNumber);
    modalRef.current.open();
  }

  return (
    <>
      <Header />
      <div className="blogs-wrapper wrapper">{blogsItems}</div>
      <Modal ref={modalRef} id="blog-id">
        {selectedTopic != null && (
          <div>
            <h1>{blogs[selectedTopic].title}</h1>
            <pre>{blogs[selectedTopic].content}</pre>
          </div>
        )}
      </Modal>
      <Footer />
    </>
  );
};

export default Blog;
