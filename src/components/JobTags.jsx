import React from 'react'

function JobTags({ role, level, languages, tools }) {
  return (
    <div className="job-tags">
        <span>{role}</span>
        <span>{level}</span>
        {languages.map(language => 
            <span key={language}>{language}</span>
        )}
        {tools && tools.map(tool => {
            <span key={tool}>{tool}</span>
        })}
    </div>
  )
}

export default JobTags