import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "./Home";
import AddUser from "../users/AddUser";
import EditUser from "../users/EditUser";
import ViewUser from "../users/ViewUser";

const DashboardView = ({ isAuthenticated, username, logoutButton }) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <Router>
        <Navbar logoutButton={logoutButton} username={username} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default DashboardView;
