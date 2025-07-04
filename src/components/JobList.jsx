"use client";

import { useState, useEffect, useRef } from "react";
import Job from "../components/Job";
import Filter from "./Filter";

import React from "react";

function JobList() {
  const [displayJobs, setDisplayJobs] = useState([]);
  const [selectFilters, setSelectFilters] = useState(new Set());
  const [availableFilters, setAvailableFilters] = useState([]);
  const defaultJob = useRef(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ERROR! STATUS: ${response}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        defaultJob.current = fetchedData;
        
        // Retrieving all unique tags
        const allTags = fetchedData.flatMap((job) => [...job.languages, ...job.tools]);
        const uniqueTags = new Set(allTags);
        console.log(uniqueTags);
        setAvailableFilters([...uniqueTags]);
        setDisplayJobs(fetchedData)}
    )
      .catch((error) => console.error(`ERROR FETCHING JSON: ${error}`));
  }, []);

  function handleFilterClick(e) {
    setSelectFilters((prevFilter) => {
        const newSet = new Set(prevFilter);

        // User checks a filter
        if (e.target.checked) {
            prevFilter.add(e.target.value);
        }
        // User unchecks a filter
        else {
            prevFilter.delete(e.target.value);
        }
        return newSet;
    })
  }

  return (
    <div className="app-layout grid place-content-center m-6">
      <Filter availableFilters={availableFilters} handleFilterClick={handleFilterClick} selectFilters={selectFilters}></Filter>
      <div className="job-list grid gap-10 mt-10">
        {displayJobs && displayJobs.map((job) => <Job key={job.id} {...job} />)}
      </div>
    </div>
  );
}

export default JobList;
