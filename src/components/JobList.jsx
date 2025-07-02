"use client";

import { useState, useEffect } from 'react'
import Job from '../components/Job';

import React from 'react'

function JobList() {
    const [jobArray, setJobArray] = useState([]);

    useEffect(() => {
        fetch('/data.json').then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ERROR! STATUS: ${response}`);
            }
            return response.json();
        })
        .then(fetchedData => setJobArray(fetchedData))
        .catch(error => console.error(`ERROR FETCHING JSON: ${error}`))
    }, [])
    console.log(jobArray)

  return (
    <div className="job-list grid place-content-center gap-4 mt-6">
        {jobArray && jobArray.map(job => 
            <Job key={job.id} {...job} />
        )}
    </div>
  )
}

export default JobList