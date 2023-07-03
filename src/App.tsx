import Dashboard from "./components/pages/Dashboard.tsx";
import Layout from "./components/layout/Layout.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/pages/Welcome.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About.tsx";
import Jobs from "./components/pages/Jobs.tsx";
import CreateJob from "./components/pages/CreateJob.tsx";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Welcome />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/create" element={<CreateJob />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
