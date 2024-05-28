import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
        config={ {
            signInRedirectURL: "http://localhost:3000/",
            signOutRedirectURL: "http://localhost:3000/",
            clientID: "WPDI0JzkQv6ZWOwzlN3sCaiQQ70a",
            baseUrl: "https://api.asgardeo.io/t/booksclub",
            scope: [ "openid","profile" ]
        } }
    >
        <App />
    </AuthProvider>
    
  </React.StrictMode>,
)
