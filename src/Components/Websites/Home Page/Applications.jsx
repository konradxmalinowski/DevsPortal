import { useState } from 'react';

import Option from './Option/Option';
import Application from './Application';

import QuizImg from './Apps images/Quiz.png';
import ShopImg from './Apps images/shop.png';
import TimerImg from './Apps images/Timer.png';
import TodoAppImg from './Apps images/Todo list app.png';
import Info from './Info/Info';

const defaultArrayOfClassNames = ['buttons-clr', 'grey', 'grey', 'grey'];
const optionsLabels = ['Shop', 'Timer', 'Quiz', 'Todo App'];
const infoDescriptions = [
  'Coordinate strategic product efforts.',
  'Collaborate across teams and departments.',
  'Break projects down into concrete phases.',
  'Track scope, velocity, and progress over time.',
];

const Applications = () => {
  const [selectedApp, setSelectedApp] = useState(0);
  const [classNames, setClassNames] = useState([...defaultArrayOfClassNames]);

  const applications = [
    <Application
      img={ShopImg}
      alt="Shop website"
      onClick={() => window.open('//portfolio-website.ct8.pl/websites/shop')}
    />,
    <Application
      img={TimerImg}
      alt="Timer website"
      onClick={() => window.open('//clock.ct8.pl')}
    />,
    <Application
      img={QuizImg}
      alt="Quiz website"
      onClick={() =>
        window.open('//portfolio-website.ct8.pl/websites/exam-test')
      }
    />,
    <Application
      img={TodoAppImg}
      alt="Todo App website"
      onClick={() =>
        window.open('//portfolio-website.ct8.pl/websites/todo-list')
      }
    />,
  ];

  const options = optionsLabels.map((label) => {
    const idx = optionsLabels.indexOf(label);

    return (
      <Option
        key={idx}
        label={label}
        onClick={() => handleClick(idx)}
        className={classNames[idx]}
      />
    );
  });

  const infos = optionsLabels.map((label) => (
    <Info
      title={label}
      description={infoDescriptions[optionsLabels.indexOf(label)]}
      key={label}
    />
  ));

  function handleClick(idx) {
    setSelectedApp(idx);
    handleSetClassNames(idx, 'buttons-clr', 'grey');
  }

  function handleSetClassNames(idx, value) {
    setClassNames(() => {
      let updatedArray = ['grey', 'grey', 'grey', 'grey'];
      updatedArray[idx] = value;

      return updatedArray;
    });
  }

  return (
    <div className="apps-wrapper wrapper" id="apps-wrapper">
      <section>
        <div>
          <section className="apps-left apps">
            <p>Choose the best app for you </p>
            <div>{options}</div>
          </section>
          <section className="apps-right apps">
            {applications[selectedApp]}
          </section>
        </div>

        <hr />
        <div className="infos">{infos}</div>
      </section>
    </div>
  );
};

export default Applications;
