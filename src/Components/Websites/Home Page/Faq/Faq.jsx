import { useEffect, useRef, useState } from 'react';
import FaqItem from './FaqItem.jsx';
import './styles/Faq.css';

const questions = [
  '💡 What is DevsPortal?',
  '👥 Who is this website for?',
  '🤝 Can I contribute to DevsPortal?',
  '🛠️ What technologies were used to build this site?',
  '📬 How can I contact the developer?',
];

const answers = [
  'DevsPortal is a developer hub designed to provide tools, resources, and inspiration for web developers. It serves as a centralized place where developers can find useful links, access projects, and stay updated with the latest trends in the development world.',

  'This website is primarily for developers, students, and tech enthusiasts interested in web technologies. Whether you are just starting your coding journey or already have experience, you’ll find valuable materials, code snippets, and project ideas to support your growth.',

  'Yes, contributions are welcome! You can reach out via GitHub or the contact section to collaborate. If you have ideas for new tools, articles, or features, feel free to share them. DevsPortal is meant to grow with the community and benefit from shared knowledge.',

  'The site is built using modern web technologies including HTML, CSS, JavaScript, and React. It follows responsive design principles to ensure usability across devices and uses modular components to maintain scalability and clean code structure.',

  'You can contact the developer via the contact form on the website or through GitHub (check portfolio website). Feedback, suggestions, or collaboration proposals are always appreciated and help improve the platform.',
];

const Faq = ({ handleScrollIntoView }) => {
  const [selectedItems, setSelectedItems] = useState(new Array(5).fill(false));
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  const handleClickItem = (idx) => {
    setSelectedItems((prevItems) => {
      const updatedArray = [...prevItems];
      updatedArray.fill(false);
      updatedArray[idx] = true;

      return updatedArray;
    });
  };

  const faqs = selectedItems.map((item, idx) => (
    <FaqItem
      isSelected={item}
      answer={answers[idx]}
      title={questions[idx]}
      key={idx}
      onClick={() => handleClickItem(idx)}
    />
  ));

  return (
    <div className="wrapper faq-wrapper reveal" ref={ref}>
      <h1>FAQ</h1>
      <section>{faqs}</section>
    </div>
  );
};

export default Faq;
