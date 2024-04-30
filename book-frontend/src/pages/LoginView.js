import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginView = ({ isAuthenticated, loginButton }) => {
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card text-center"
        style={{
          background: "rgba(28, 40, 51, 0.8)",
          color: "white",
          padding: "40px",
          borderRadius: "15px",
        }}
      >
        <div className="card-body">
          <h1 style={{ fontFamily: "monospace", marginBottom: "10px" }}>
            WSO2 Cybertruck Challenge 2024
          </h1>
          <h3 style={{ fontFamily: "monospace", marginBottom: "10px" }}>
            PulseProtector System
          </h3>
          {React.cloneElement(loginButton, {
            className: "btn btn btn-secondary btn-rounded",
            style: { padding: "10px 20px", fontSize: "1.2rem", margin: "1rem" },
          })}
          <p
            style={{
              marginTop: "1rem",
              fontFamily: "monospace",
              fontSize: "0.8rem",
              marginBottom: "1px",
            }}
          >
            Auth powered by Asgardeo
          </p>
          <p style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
            Developed by devshehan
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
