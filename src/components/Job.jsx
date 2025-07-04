import React from "react";
import JobHeader from "./JobHeader";
import JobTags from "./JobTags";

function Job(jobData) {
  return (
    <div
      className={`job-card ${
        jobData.featured && `border-l-6 border-desaturated-dark-cyan`
      } w-xs relative bg-white shadow-desaturated-dark-cyan shadow-md p-6 pt-8 rounded-lg`}
    >
      <img className="w-12 ml-2 mb-4 absolute -top-5" src={jobData.logo}></img>
      <JobHeader {...jobData}></JobHeader>
      <hr className="my-4 border-dark-grayish-cyan"></hr>
      <JobTags {...jobData}></JobTags>
    </div>
  );
}
export default Job;
