import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-section">
        
      <div className="overlay">
        <h1>Welcome to the Todo App</h1>
        <p>Manage your tasks efficiently and effectively.</p>
        <nav>
          {/* <Link to="/todos">Todos</Link> */}
          <Link to="/login" className='login'>Login</Link>

        </nav>
      </div>
    </div>
  );
};

export default Home;
