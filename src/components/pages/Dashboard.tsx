import { useAuth0 } from "@auth0/auth0-react";
import { useGetJobsQuery } from "../../services/trackmate.ts";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth0();
  const { data: jobs, isLoading, isError } = useGetJobsQuery();

  if (!isAuthenticated || !user) {
    return <div>Unauthorized</div>;
  }

  if (isError) {
    return (
      <div>An error occured. Try refreshing the page or try again later.</div>
    );
  }

  if (isLoading || !jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>
      <div>There are currently {jobs.length} jobs.</div>
    </div>
  );
}
