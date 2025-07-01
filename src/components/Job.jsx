import React from 'react'
import JobHeader from './JobHeader'
import JobTags from './JobTags'

function Job(jobData) {
  return (
    <div className="job-card">
        <JobHeader {...jobData}></JobHeader> 
        <hr></hr>
        <JobTags {...jobData}></JobTags>
        <br></br>
    </div>
  );
}
export default Job