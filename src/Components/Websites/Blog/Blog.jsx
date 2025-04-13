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

  const blogsItems = blogs.map((blog) => (
    <BlogItem
      title={blog.title}
      content={blog.content}
      seenLength={50}
      onClick={() => handleShowMore(blog.id)}
      key={blog.id}
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
          <>
            <h1>{blogs[selectedTopic].title}</h1>
            <pre>{blogs[selectedTopic].content}</pre>
          </>
        )}
      </Modal>
      <Footer />
    </>
  );
};

export default Blog;
