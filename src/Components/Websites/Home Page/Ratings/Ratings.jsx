import './Ratings.css';
import Rating from './Rating';
import { useEffect, useRef } from 'react';

const NAMES = [
  'Alicja',
  'Bartek',
  'Celina',
  'Dawid',
  'Emilia',
  'Filip',
  'Gabriela',
  'Hubert',
  'Iga',
  'Jakub',
];

const Ratings = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  const ratings1 = NAMES.slice(0, 5).map((name) => (
    <Rating name={name} key={`1-${name}`} />
  ));
  const ratings2 = NAMES.slice(5).map((name) => (
    <Rating name={name} key={`2-${name}`} />
  ));

  return (
    <div className="ratings-wrapper wrapper reveal" ref={ref}>
      <section aria-label="User Ratings Section">
        <div className="marquee-container">
          <div className="marquee-content">
            {ratings1}
            {ratings1}
          </div>
        </div>
        <div className="marquee-container reverse">
          <div className="marquee-content">
            {ratings2}
            {ratings2}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ratings;
