import { useState } from 'react';

import AppOption from '../AppOption/AppOption.jsx';
import Application from './Application.jsx';
import AppDetails from '../AppDetails/AppDetails.jsx';

import QuizImg from '../../../../assets/Apps images/Quiz.png';
import ShopImg from '../../../../assets/Apps images/shop.png';
import TimerImg from '../../../../assets/Apps images/Timer.png';
import TodoAppImg from '../../../../assets/Apps images/Todo list app.png';

import './Applications.css';

const defaultArrayOfClassNames = ['buttons-clr', 'grey', 'grey', 'grey'];
const appOptionsLabels = ['Shop', 'Timer', 'Quiz', 'Todo App'];
const infoDescriptions = [
  'Example of website on which you can buy sth',
  'Example of website on which you can use timer or stopwatch',
  'Example of website on which you can take part in difference quiz',
  'Example of website on which you can note your taks to do.',
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

  const appOptions = appOptionsLabels.map((label) => {
    const idx = appOptionsLabels.indexOf(label);

    return (
      <AppOption
        key={idx}
        label={label}
        onClick={() => handleClick(idx)}
        className={classNames[idx]}
      />
    );
  });

  const appDetails = appOptionsLabels.map((label) => (
    <AppDetails
      title={label}
      description={infoDescriptions[appOptionsLabels.indexOf(label)]}
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
        <h1>Choose the best app for you </h1>
        <p className="grey">Click on the image to open website</p>
        <div>
          <section className="apps-left apps">
            <div>{appOptions}</div>
          </section>
          <section className="apps-right apps">
            {applications[selectedApp]}
          </section>
        </div>

        <hr />
        <div className="app-details">{appDetails}</div>
      </section>
    </div>
  );
};

export default Applications;
