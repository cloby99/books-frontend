import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logoutButton, username }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ background: "linear-gradient(to right, orange , red)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "30px" }}>
            WSO2 Code Challenge 2024
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Link
              className="btn btn-outline-light"
              to="/adduser"
              style={{ marginRight: "10px" }}
            >
              Add User
            </Link>

            {React.cloneElement(logoutButton, {
              className: "btn btn-outline-light",
              style: { marginRight: "10px" },
            })}

            <div
              className="navbar-text"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Hello, {username}!
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
