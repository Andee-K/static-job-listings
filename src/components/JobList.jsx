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

  // Load data from "database"
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
        const allTags = fetchedData.flatMap((job) => [
            job.role,
            job.level,
          ...job.languages,
          ...job.tools,
        ]);
        const uniqueTags = new Set(allTags);
        console.log(uniqueTags);
        setAvailableFilters([...uniqueTags]);
        setDisplayJobs(fetchedData);
      })
      .catch((error) => console.error(`ERROR FETCHING JSON: ${error}`));
  }, []);

  // Reload jobs every filter change
  useEffect(() => {
    if (selectFilters.size === 0) {
      setDisplayJobs(defaultJob.current);
    } else {
      const filterJobs = defaultJob.current.filter((job) => {
        const jobTags = new Set([job.role, job.level, ...job.languages, ...job.tools]);
        return Array.from(selectFilters).every((selectedTag) =>
          jobTags.has(selectedTag)
        );
      });
      setDisplayJobs(filterJobs);
    }
  }, [selectFilters]);

  function handleFilterClick(filterValue, actionIsAdd) {
    setSelectFilters((prevFilter) => {
      const newSet = new Set(prevFilter);

      // User checks a filter
      if (actionIsAdd) {
        newSet.add(filterValue);
      }
      // User unchecks a filter
      else {
        newSet.delete(filterValue);
      }
      return newSet;
    });
  }

  function handleClear() {
    setSelectFilters(new Set());
  }

  return (
    <div className="app-layout grid place-content-center m-6">
      <Filter
        availableFilters={availableFilters}
        handleFilterClick={handleFilterClick}
        selectFilters={selectFilters}
        handleClear={handleClear}
      ></Filter>
      <div className="job-list grid gap-10 mt-10">
        {displayJobs && displayJobs.map((job) => <Job key={job.id} {...job} />)}
      </div>
    </div>
  );
}

export default JobList;
