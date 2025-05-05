import './NotFound.css';

import GhostText from './GhostText.jsx';
import GhostImage from './GhostImage.jsx';

import { handleScrollIntoView } from '../.././../utils/handleScrollIntoView.js';

const NotFound = () => {
  return (
    <>
      <div className="wrapper ghost-wrapper" aria-label="404 Not Found Page">
        <GhostText handleScrollIntoView={handleScrollIntoView} />
        <GhostImage handleScrollIntoView={handleScrollIntoView} />
      </div>
    </>
  );
};

export default NotFound;
