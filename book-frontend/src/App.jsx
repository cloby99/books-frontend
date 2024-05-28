import React from 'react'
import './App.css'
import { useAuthContext } from "@asgardeo/auth-react";
import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  const { state, signIn, signOut } = useAuthContext();
  return (
    <>
    <div className="App">
      <Layout
        isLoading={state.isLoading}
        isAuthenticated={state.isAuthenticated}
      >
        <Login
          isAuthenticated={state.isAuthenticated}
          loginButton={<button onClick={() => signIn()}>Login</button>}
        />

        <Home
          isAuthenticated={state.isAuthenticated}
          logoutButton={<button onClick={() => signOut()}>Logout</button>}
        />
      </Layout>
    </div>
      
    </>
  )
}

export default App
