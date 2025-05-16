import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';
import Button from '../../Common components/Button/Button.jsx';

import { handleScrollIntoView } from '../../../utils/handleScrollIntoView.js';

import './styles/AdminPanel.css';

const AdminPanel = () => {
  useEffect(() => {
    const drawChart = () => {
      const canvas = document.getElementById('admin-canvas');
      const ctx = canvas.getContext('2d');

      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientWidth * 0.66;

      const data = [120, 200, 150, 300, 250, 400, 350];
      const labels = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];

      const totalBars = data.length;
      const gap = canvas.width * 0.02;
      const barWidth = (canvas.width - 60 - gap * (totalBars + 1)) / totalBars;

      const maxData = Math.max(...data);
      const chartHeight = canvas.height - 50;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(50, 10);
      ctx.lineTo(50, chartHeight);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(50, chartHeight);
      ctx.lineTo(canvas.width - 10, chartHeight);
      ctx.stroke();

      data.forEach((value, index) => {
        const x = 50 + gap + index * (barWidth + gap);
        const y = chartHeight - (value / maxData) * (chartHeight - 20);
        const height = (value / maxData) * (chartHeight - 20);

        ctx.fillStyle = 'rgba(58, 110, 255, 0.8)';
        ctx.fillRect(x, y, barWidth, height);

        ctx.fillStyle = '#ffffff';
        ctx.font = `${canvas.width * 0.025}px Inter`;
        ctx.fillText(value, x + barWidth / 4, y - 10);
        ctx.fillText(labels[index], x + barWidth / 4, chartHeight + 20);
      });
    };

    drawChart();
    window.addEventListener('resize', drawChart);
    return () => window.removeEventListener('resize', drawChart);
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
