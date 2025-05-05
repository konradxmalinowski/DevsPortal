import { useRef, useState } from 'react';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import BlogItem from './BlogItem.jsx';
import Modal from './../../Common components/Modal/Modal.jsx';

import './Blog.css';
import { blogs } from './blogs.js';
import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

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
      <div className="blogs-wrapper wrapper" aria-label="Blog Section">
        {blogsItems}
      </div>
      <Modal ref={modalRef} id="blog-id" aria-label="Blog Details Modal">
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
