import { Job } from "../../types";

import styles from "./JobCard.module.scss";
interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.jobName}>{job.jobName}</h3>
      <p className={styles.jobDescription}>{job.jobDescription}</p>
      <div className={styles.jobStatus}>{job.jobStatus}</div>
    </div>
  );
}
