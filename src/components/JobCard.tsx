import { Job } from "../types";

import styles from "./JobCard.module.scss";
import JobStatusBubble from "./ui/JobStatusBubble.tsx";
interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.jobName}>{job.jobName}</h3>
      <p className={styles.jobDescription}>{job.jobDescription}</p>
      <JobStatusBubble status={job.jobStatus} />
    </div>
  );
}
