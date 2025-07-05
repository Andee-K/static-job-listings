import React from "react";
import JobHeader from "./JobHeader";
import JobTags from "./JobTags";

function Job(jobData) {
  return (
    <div
      className={`job-card ${
        jobData.featured && `border-l-6 border-desaturated-dark-cyan`
      } w-xs relative lg:static lg:w-full lg:flex lg:items-center lg:justify-between bg-white shadow-desaturated-dark-cyan shadow-md p-6 pt-8 rounded-lg`}
    >
      <div className="image-header lg:flex lg:gap-x-6 lg:items-center">
        <img
          className="w-12 ml-2 mb-4 absolute -top-5 lg:static lg:w-24 lg:h-24 lg:m-0"
          src={jobData.logo}
        ></img>
        <JobHeader {...jobData}></JobHeader>
      </div>

      <hr className="my-4 border-dark-grayish-cyan lg:hidden"></hr>
      <JobTags {...jobData}></JobTags>
    </div>
  );
}
export default Job;
