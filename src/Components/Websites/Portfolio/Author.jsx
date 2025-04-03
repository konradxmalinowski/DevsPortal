import React from 'react';

import pfp from '../../../assets/Author images/pfp.jpg';
import githubLogo from '../../../assets/Author images/github-icon2.png';
import linkedInLogo from '../../../assets/Author images/linkedin.png';

const Author = () => {
  return (
    <section className="author-wrapper wrapper">
      <section className="image-wrapper">
        <img src={pfp} alt="pfp" />
      </section>

      <section className="description-wrapper">
        <p className="intro">I'm Konrad Malinowski, and I enjoy</p>
        <h1>
          Building pixel-perfect <span className="special">Interactive </span>
          apps❤️‍🔥
        </h1>
        <p className="job-type">Full-Stack Developer</p>
        <div>
          <img src={githubLogo} alt="github logo" />
          <img src={linkedInLogo} alt="linkedin logo" />
        </div>
      </section>
    </section>
  );
};

export default Author;
