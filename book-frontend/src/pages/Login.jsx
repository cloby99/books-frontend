import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LOGINIMG from '../assets/login.png';

const Login = ({ isAuthenticated, loginButton }) => {
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      
        <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
          <h2 className="text-white">
            Welcome to Your Mini Library Management System
          </h2>

          <img className="" src={LOGINIMG} alt="Login Image" style={{ width: '300px', height: '300px' }} />

          <p className="text-white text-lg">Login to manage your mini library from here. Keep track of your books, manage your collection, and ensure your library is always up-to-date.</p>

          {React.cloneElement(loginButton, {
            className: "btn btn-warning btn-rounded fw-bold",
            style: { padding: "10px 20px", fontSize: "1.2rem", margin: "1rem" },
          })}
          
        </div>
    
    </div>
  );
};

export default Login;