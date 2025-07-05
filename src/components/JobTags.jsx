import React from 'react'
import Tag from './Tag'

function JobTags({ role, level, languages, tools }) {
  return (
    <div className="job-tags flex justify-normal flex-wrap p-1.5 gap-4 text-desaturated-dark-cyan font-extrabold lg:h-1/2">
        <Tag tagName={role}></Tag>
        <Tag tagName={level}></Tag>
        {languages && languages.map((language, idx) => 
            <Tag key={`${language}-${idx}`} tagName={language}></Tag>
        )}
        {tools && tools.map((tool, idx) => 
            <Tag key={`${tool}-${idx}`} tagName={tool}></Tag>
        )}
    </div>
  )
}

export default JobTags