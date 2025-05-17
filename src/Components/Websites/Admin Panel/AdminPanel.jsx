import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Button from '../../Common components/Button/Button.jsx';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

import './styles/AdminPanel.css';

const AdminPanel = () => {
  useEffect(() => {
    const canvas = document.getElementById('admin-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 340;

    const data = [120, 200, 150, 300, 250, 400, 350];
    const labels = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];

    const barWidth = 50;
    const gap = 40;
    const maxData = Math.max(...data);
    const chartHeight = canvas.height - 40;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, 10);
    ctx.lineTo(50, chartHeight);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, chartHeight);
    ctx.lineTo(canvas.width, chartHeight);
    ctx.stroke();

    data.forEach((value, index) => {
      const x = 50 + gap + index * (barWidth + gap);
      const y = chartHeight - (value / maxData) * (chartHeight - 20);
      const height = (value / maxData) * (chartHeight - 20);

      ctx.fillStyle = '#2b52c2';
      ctx.fillRect(x, y, barWidth, height);

      ctx.fillStyle = '#ffffff';
      ctx.font = '13px Comfortaa';
      ctx.fillText(value, x + barWidth / 4, y - 10);

      ctx.fillText(labels[index], x + barWidth / 4, chartHeight + 20);
    });
  }, []);

  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        className="admin-panel-wrapper wrapper"
        aria-label="Admin Panel Section"
      >
        <section>
          <div className="canvas">
            <h2 id="canvas-h2">Statystyki odwiedzin</h2>
            <canvas
              id="admin-canvas"
              className="reveal"
              ref={ref}
              aria-label="Visit statistics chart"
            ></canvas>
          </div>

          <div className="control-buttons">
            <h2>Control buttons</h2>
            <Link to="/resetPassword">
              <Button label="Reset" className="purple-button" />
            </Link>
            <Link to="/login">
              <Button label="Login" className="purple-button" />
            </Link>
            <Link to="/signup">
              <Button label="Signup" className="purple-button" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
