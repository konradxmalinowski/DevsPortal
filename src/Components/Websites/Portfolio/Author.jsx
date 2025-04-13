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
          <a href="https://github.com/konradxmalinowski" target="_blank">
            <img src={githubLogo} alt="github logo" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/in/konrad-malinowski-894a36323/"
            target="_blank"
          >
            <img src={linkedInLogo} alt="linkedin logo" loading="lazy" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Author;
