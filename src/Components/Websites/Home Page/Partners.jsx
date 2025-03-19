import openAILogo from '../../../assets/openai-logo.png';
import perplexityLogo from '../../../assets/perplexity-logo.png';
import arcBrowserLogo from '../../../assets/arc-browser-logo.png';
import appleLogo from '../../../assets/apple-logo.png';
import microsoftLogo from '../../../assets/microsoft-logo.png';
import dellLogo from '../../../assets/dell-logo.png';

import Partner from './Partner';

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const logos = [
  openAILogo,
  perplexityLogo,
  arcBrowserLogo,
  appleLogo,
  microsoftLogo,
  dellLogo,
];

const labels = [
  'OpenAI logo',
  'PerplexityAI logo',
  'Arc browser logo',
  'Apple logo',
  'Microsoft logo',
  'Dell logo',
];

function drawNumbers() {
  let numbers = [];

  while (numbers.length < logos.length) {
    for (let i = 0; i <= logos.length - numbers.length; i++) {
      numbers.push(Math.floor(Math.random() * logos.length));
    }

    if (logos.length === [...new Set(numbers)].length) {
      break;
    }

    numbers = new Set(numbers);
    numbers = [...numbers];
  }

  return numbers;
}

export default function Partners() {
  const [numbers, setNumbers] = useState(drawNumbers());

  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setNumbers(drawNumbers());
    }, 5000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="wrapper partners-wrapper">
      <section>
        <h2>Powering the world’s best product teams.</h2>
        <p className="grey">
          From next-gen startups to established enterprises.
        </p>

        <div className="partners">
          {numbers.map((number) => (
            <Partner
              name={labels[number]}
              logo={logos[number]}
              key={number + labels[number]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
