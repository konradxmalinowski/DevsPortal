import pfp from '../../../assets/Author images/pfp.jpg';
import githubLogo from '../../../assets/Author images/github-icon2.png';
import linkedInLogo from '../../../assets/Author images/linkedin.png';

import AuthorButton from './AuthorButton';

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
