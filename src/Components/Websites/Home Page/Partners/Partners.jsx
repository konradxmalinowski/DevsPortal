import { useEffect, useRef } from 'react';

import openAILogo from '../../../../assets/Partners logo/openai-logo.png';
import perplexityLogo from '../../../../assets/Partners logo/perplexity-logo.png';
import arcBrowserLogo from '../../../../assets/Partners logo/arc-browser-logo.png';
import appleLogo from '../../../../assets/Partners logo/apple-logo.png';
import microsoftLogo from '../../../../assets/Partners logo/microsoft-logo.png';
import dellLogo from '../../../../assets/Partners logo/dell-logo.png';

import Partner from './Partner.jsx';

import './Partners.css';

const logos = [
  openAILogo,
  microsoftLogo,
  dellLogo,
  perplexityLogo,
  arcBrowserLogo,
  appleLogo,
];

const labels = [
  'OpenAI logo',
  'Microsoft logo',
  'Dell logo',
  'PerplexityAI logo',
  'Arc browser logo',
  'Apple logo',
];

const homepageLinks = [
  'https://openai.com/',
  'https://www.microsoft.com/',
  'https://www.dell.com/',
  'https://www.perplexity.ai/',
  'https://arc.net/',
  'https://www.apple.com/',
];

const indexes = [0, 1, 2, 3, 4, 5];

export default function Partners({ handleScrollIntoView }) {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div className="wrapper partners-wrapper reveal" ref={ref}>
      <section aria-label="Partners Section">
        <h2>Powering the world’s best product teams.</h2>
        <div className="card">
          <div className="loader">
            <p>We offer the best</p>
            <div className="words">
              <span className="word special">Quiz</span>
              <span className="word special">Apps</span>
              <span className="word special">Blogs</span>
              <span className="word special">Challenges</span>
              <span className="word special">Tools</span>
            </div>
          </div>
        </div>

        <div className="partners">
          {indexes.map((number) => (
            <Partner
              name={labels[number]}
              logo={logos[number]}
              key={number + labels[number]}
              link={homepageLinks[number]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
