import styles from "./CreateJob.module.scss";
import CreateJobForm from "../CreateJobForm.tsx";

export default function CreateJob() {
  return (
    <>
      <h2 className={styles.title}>Create Job</h2>
      <CreateJobForm />
    </>
  );
}
