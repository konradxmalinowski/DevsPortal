import pfp from '../../../assets/Author images/pfp.jpg';
import githubLogo from '../../../assets/Author images/github-icon2.png';
import linkedInLogo from '../../../assets/Author images/linkedin.png';

import AuthorButton from './AuthorButton.jsx';

import { useEffect, useRef } from 'react';

const Author = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <section
      className="author-wrapper wrapper reveal"
      ref={ref}
      aria-label="Author Section"
    >
      <section className="image-wrapper" aria-label="Author profile picture">
        <img src={pfp} alt="Profile picture of Konrad Malinowski" />
      </section>

      <section className="description-wrapper" aria-label="Author description">
        <p className="intro" aria-label="Author introduction">
          I'm Konrad Malinowski, and I enjoy
        </p>
        <h1 aria-label="Author's passion">
          Building pixel-perfect <span className="special">Interactive </span>
          apps❤️‍🔥
        </h1>
        <p className="job-type" aria-label="Author's job title">
          Frontend Developer
        </p>
        <div aria-label="Author's social media links">
          <AuthorButton
            logo={githubLogo}
            link="https://github.com/konradxmalinowski"
            name="Github"
          />
          <AuthorButton
            logo={linkedInLogo}
            link="https://www.linkedin.com/in/konrad-malinowski-894a36323/"
            name="LinkedIn"
          />
        </div>
      </section>
    </section>
  );
};

export default Author;
