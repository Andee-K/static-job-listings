import React from 'react'

function JobTags({ role, level, languages, tools }) {
  return (
    <div className="job-tags flex justify-normal flex-wrap p-1.5 gap-4 text-desaturated-dark-cyan font-extrabold">
        <span className="bg-light-grayish-cyan-bg p-2 rounded-md">{role}</span>
        <span className="bg-light-grayish-cyan-bg p-2 rounded-md">{level}</span>
        {languages && languages.map(language => 
            <span className="bg-light-grayish-cyan-filter p-2 rounded-md" key={language}>{language}</span>
        )}
        {tools && tools.map(tool => 
            <span className="bg-light-grayish-cyan-filter p-2 rounded-md" key={tool}>{tool}</span>
        )}
    </div>
  )
}

export default JobTags