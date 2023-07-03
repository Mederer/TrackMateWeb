export interface Job {
  jobId: number;
  jobName: string;
  jobDescription: string;
  jobStatus: string;
}

export interface CreateJobRequest {
  jobName: string;
  jobDescription: string;
  categories: number[];
  address: number;
}
