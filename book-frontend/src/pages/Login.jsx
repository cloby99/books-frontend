import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ isAuthenticated, loginButton }) => {
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      
        <div className="card-body">
          {React.cloneElement(loginButton, {
            className: "btn btn btn-secondary btn-rounded",
            style: { padding: "10px 20px", fontSize: "1.2rem", margin: "1rem" },
          })}
          
        </div>
    
    </div>
  );
};

export default Login;