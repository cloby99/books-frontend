import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// wso2 IAM
import { useAuthContext } from "@asgardeo/auth-react";
import LoginView from "./pages/LoginView";
import DashboardView from "./pages/DashboardView";
import AppLayout from "./pages/AppLayout";

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="App">
      <AppLayout
        isLoading={state.isLoading}
        isAuthenticated={state.isAuthenticated}
      >
        <LoginView
          isAuthenticated={state.isAuthenticated}
          loginButton={<button onClick={() => signIn()}>Login</button>}
        />

        <DashboardView
          isAuthenticated={state.isAuthenticated}
          username={state?.username}
          logoutButton={<button onClick={() => signOut()}>Logout</button>}
        />
      </AppLayout>
    </div>
  );
}

export default App;
