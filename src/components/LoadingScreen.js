import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div id="container">
        <div className="divider" aria-hidden="true"></div>
        <p className="loading-text" aria-label="Loading">
          <span className="letter" aria-hidden="true">L</span>
          <span className="letter" aria-hidden="true">o</span>
          <span className="letter" aria-hidden="true">a</span>
          <span className="letter" aria-hidden="true">d</span>
          <span className="letter" aria-hidden="true">i</span>
          <span className="letter" aria-hidden="true">n</span>
          <span className="letter" aria-hidden="true">g</span>
        </p>
        <div className="portfolio-subtitle">
          Sathvik Dandu's Portfolio
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 