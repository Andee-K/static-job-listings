import React from 'react'
import Tag from './Tag'

function JobTags({ role, level, languages, tools }) {
  return (
    <div className="job-tags flex justify-normal flex-wrap p-1.5 gap-4 text-desaturated-dark-cyan font-extrabold">
        <Tag tagName={role}></Tag>
        <Tag tagName={level}></Tag>
        {languages && languages.map(language => 
            <Tag tagName={language}></Tag>
        )}
        {tools && tools.map(tool => 
            <Tag tagName={tool}></Tag>
        )}
    </div>
  )
}

export default JobTags