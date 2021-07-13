import React from 'react';
import './DefaultHome.scss';

const DefaultHome = (props) => {
  return (
    <div className="home-container">
      <main className="login-container">
        {
            props.children
        }
      </main>
    </div>
  );
};

export default DefaultHome;
