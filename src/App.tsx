import Dashboard from "./components/pages/Dashboard.tsx";
import Layout from "./components/layout/Layout.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/pages/Welcome.tsx";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Layout>{isAuthenticated ? <Dashboard /> : <Welcome />}</Layout>
    </>
  );
}

export default App;
