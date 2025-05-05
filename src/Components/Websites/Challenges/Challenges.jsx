import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Challenge from './Challenge.jsx';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

import './Challenges.css';
import programmizIcon from '../../../assets/Challenges images/programmiz.jpg';
import frontendMentorIcon from '../../../assets/Challenges images/frontend-mentor.png';

class ChallengeClass {
  constructor(title, logo, description, link) {
    this.title = title;
    this.logo = logo;
    this.description = description;
    this.link = link;
  }
}

const challengesData = [
  new ChallengeClass(
    'CodeWars',
    'https://www.codewars.com/favicon.ico',
    'A nonprofit organization that offers free coding challenges.',
    'https://www.codewars.com/collections/js-code-challenges'
  ),
  new ChallengeClass(
    'CSS Battle',
    'https://cssbattle.dev/favicon.ico',
    'A fun and challenging platform to practice your CSS skills.',
    'https://cssbattle.dev/'
  ),
  new ChallengeClass(
    'Programiz',
    `${programmizIcon}`,
    'A platform for practicing coding problems and participating in coding competitions.',
    'https://programiz.pro/community-challenges/javascript'
  ),
  new ChallengeClass(
    'CSS Challenges',
    'https://css-challenges.com/favicon.ico',
    'A platform that offers CSS challenges to improve your skills.',
    'https://css-challenges.com/'
  ),
  new ChallengeClass(
    'Frontend Mentor',
    `${frontendMentorIcon}`,
    'A platform that offers real-world frontend challenges to improve your skills.',
    'https://www.frontendmentor.io/challenges'
  ),
  new ChallengeClass(
    'Scribda',
    'https://css-challenges.com/favicon.ico',
    'A platform that offers coding challenges and projects to improve your skills.',
    'https://scrimba.com/css-challenges-c02p'
  ),
];

const Challenges = () => {
  const challenges = challengesData.map(
    ({ title, logo, description, link }) => (
      <Challenge
        title={title}
        logo={logo}
        description={description}
        link={link}
        key={title}
        handleScrollIntoView={handleScrollIntoView}
      />
    )
  );
  return (
    <>
      <Header />
      <div className="challenges-wrapper wrapper">
        <section aria-label="Coding Challenges Section">
          <h1 className="challenges-title">Challenges</h1>
          <p className="challenges-description">
            Here are some challenges where you can improve your skills and learn
            new things. Each challenge is designed to help you practice and
            enhance your coding abilities. You can find the code for each
            challenge in the provided links.
          </p>

          <div className="challenges-list">{challenges}</div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Challenges;
