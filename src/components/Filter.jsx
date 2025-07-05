import { useState } from "react";

function Filter({
  availableFilters,
  handleFilterClick,
  selectFilters,
  handleClear,
}) {
  const [showTags, setShowTags] = useState(false);

  return (
    <div className="add-filter">
      <button className="font-bold" onClick={() => setShowTags(!showTags)}>
        Select Filters: {showTags ? "▲" : "▼"}
      </button>
      {showTags && (
        <div className="filter-item-menu mt-2 flex flex-wrap">
          {availableFilters.map((tag) => (
            <div
              className="p-0.5 m-0.5 border-1 rounded-md border-desaturated-dark-cyan bg-white"
              key={tag}
            >
              <label className="font-bold mx-2" htmlFor={`filter-${tag}`}>
                {tag}
              </label>
              <input
                type="checkbox"
                id={`filter-${tag}`}
                checked={selectFilters.has(tag)}
                name="job-filter"
                value={tag}
                onChange={(e) => handleFilterClick(e.target.value, e.target.checked)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="filter-bar p-4 mt-4 flex justify-between bg-white shadow-desaturated-dark-cyan shadow-md rounded-md">
        <div className="filters w-5/6 flex flex-wrap">
          {[...selectFilters].map((filter) => (
            <div key={filter} className="rounded-md m-2 flex bg-light-grayish-cyan-filter text-desaturated-dark-cyan font-bold">
              <p className="p-2 px-2.5">{filter}</p>
              <button
                className="w-10 text-white rounded-r-md bg-desaturated-dark-cyan font-extrabold hover:bg-black"
                onClick={() => handleFilterClick(filter, false)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <button
          className="clear text-dark-grayish-cyan hover:text-desaturated-dark-cyan font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
