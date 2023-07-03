import { useGetJobsQuery } from "../../services/trackmate.ts";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Jobs.module.scss";
import JobCard from "../JobCard.tsx";

export default function Jobs() {
  const { data: jobs, isLoading, isError } = useGetJobsQuery();
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return <div>Unauthorized</div>;
  }

  if (isError) {
    return <div>An error occurred</div>;
  }

  if (isLoading || !jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.jobs}>
      <h2 className={styles.title}>Jobs</h2>
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
}
