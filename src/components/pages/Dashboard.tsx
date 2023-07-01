import { useAuth0 } from "@auth0/auth0-react";
import { useGetJobsQuery } from "../../services/trackmate.ts";
import styles from "./Dashboard.module.scss";
import { useMemo } from "react";

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth0();
  const { data: jobs, isLoading, isError } = useGetJobsQuery();

  const jobsWaitingCount = useMemo(
    () => jobs?.filter((job) => job.jobStatus === "WAITING").length ?? 0,
    [jobs]
  );

  const jobsActiveCount = useMemo(
    () => jobs?.filter((job) => job.jobStatus === "ACTIVE").length ?? 0,
    [jobs]
  );

  if (!isAuthenticated || !user) {
    return <div>Unauthorized</div>;
  }

  if (isLoading || !jobs) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>An error occurred. Try refreshing the page or try again later.</div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Dashboard</h2>
      <div>There are currently {jobs.length} jobs.</div>
      <div>
        {jobsWaitingCount} {pluralizeJobString(jobsWaitingCount)} in 'WAITING'
        status
      </div>
      <div>
        {jobsActiveCount} {pluralizeJobString(jobsActiveCount)} in 'ACTIVE'
        status
      </div>
    </div>
  );
}

function pluralizeJobString(count: number) {
  return count > 1 ? "jobs" : "job";
}
