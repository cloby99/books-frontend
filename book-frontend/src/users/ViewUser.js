import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card"
            style={{ background: "rgba(255, 255, 255, 0.5)" }}
          >
            <div
              className="card-header bg-primary text-white text-center"
              style={{
                background: "linear-gradient(to right, #3498db , #2ecc71)",
              }}
            >
              <h2>User Details</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  value={user.name}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  value={user.userName}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  value={user.email}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="MobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  value={user.mobileNumber}
                  readOnly
                />
              </div>
              <Link className="btn btn-primary w-100" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
