import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./CreateJobform.module.scss";
import { useCreateJobMutation } from "../services/trackmate.ts";
import { useEffect } from "react";
interface Inputs {
  jobName: string;
  jobDescription: string;
}

export default function CreateJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [createJob, createJobResult] = useCreateJobMutation();

  useEffect(() => {
    if (createJobResult.isError) {
      alert("An error occurred during job creation.");
    }
  }, [createJobResult]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createJob({
      jobName: data.jobName,
      jobDescription: data.jobDescription,
      // placeholder
      address: 1,
      categories: [1],
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="jobName">Job Name</label>
        <input
          className={errors.jobName ? styles.error : ""}
          type="text"
          {...register("jobName", { required: true })}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="jobDescription">Job Description</label>
        <input
          type="text"
          className={errors.jobDescription ? styles.error : ""}
          {...register("jobDescription", { required: true })}
        />
      </div>
      <input type="submit" value="Create" />
    </form>
  );
}
