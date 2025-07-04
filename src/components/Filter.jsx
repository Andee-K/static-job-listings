import { useState } from 'react'

function Filter({ availableFilters, handleFilterClick, selectFilters }) {
    const [showTags, setShowTags] = useState(false);

  return (
    <div className="add-filter">
      <button onClick={() => setShowTags(!showTags)}>Add Filter: </button>
        {showTags &&
            <div className="filter-item-menu">
                {availableFilters.map((tag) => ( 
                    <div key={tag}>
                        <label htmlFor={`filter-${tag}`}>{tag}</label>
                        <input
                            type="checkbox"
                            id={`filter-${tag}`}
                            checked={selectFilters.has(tag)}
                            name="job-filter"
                            value={tag}
                            onChange={handleFilterClick}
                        />
                    </div>
                ))}
            </div>
        }
         
      <div className="filter-bar p-4 flex justify-between bg-white shadow-desaturated-dark-cyan shadow-md rounded-md">
        <button className="clear text-dark-grayish-cyan font-bold">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
