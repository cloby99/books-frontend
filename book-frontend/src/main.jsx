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
            clientID: "6Z58GfS6Ql51TP62xXVX1uRGZqsa",
            baseUrl: "https://api.asgardeo.io/t/cloby99",
            scope: [ "openid","profile" ]
        } }
    >
        <App />
    </AuthProvider>
    
  </React.StrictMode>,
)
