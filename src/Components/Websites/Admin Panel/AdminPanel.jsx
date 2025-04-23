import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../Common components/Header/Header.jsx';
import Footer from '../../Common components/Footer/Footer.jsx';

import './AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <section className="admin-panel-wrapper wrapper">
        <div>
          <h1>Admin Panel</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminPanel;
