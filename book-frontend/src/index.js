import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  signInRedirectURL: "http://localhost:3000/",
  signOutRedirectURL: "http://localhost:3000/",
  clientID: "bTWyJu8sV3uUluaS2AryH9Hz6a0a",
  baseUrl: "https://api.asgardeo.io/t/misaki",
  scope: ["openid", "profile"],
};

root.render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
