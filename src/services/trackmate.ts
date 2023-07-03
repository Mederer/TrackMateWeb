import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../constants.ts";
import { CreateJobRequest, Job } from "../types";

export const trackmateApi = createApi({
  reducerPath: "trackmateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints: (build) => ({
    getJobs: build.query<Job[], void>({
      query: () => "jobs",
    }),
    getJob: build.query<Job, number>({
      query: (jobId) => `jobs/${jobId}`,
    }),
    createJob: build.mutation<void, CreateJobRequest>({
      query: (job) => ({
        url: "jobs",
        method: "post",
        body: job,
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobQuery, useCreateJobMutation } =
  trackmateApi;
