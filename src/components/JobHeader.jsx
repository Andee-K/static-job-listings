import React from 'react'

function JobHeader({ company, new: isNew, featured, position, postedAt, contract, location }) {
  return (
    <div className="header flex flex-col gap-y-3">
        <div className="company-name mt-2">
            <span className="mr-6 text-desaturated-dark-cyan font-extrabold">{company}</span>
            {isNew && <span className="mr-2 rounded-2xl p-1 px-2 text-sm text-white bg-desaturated-dark-cyan font-extrabold">NEW!</span>}
            {featured && <span className="rounded-2xl p-1 px-2 text-sm text-white bg-black font-extrabold">FEATURED</span>}
        </div>
        <h2 className="company-position text-black font-extrabold hover:text-desaturated-dark-cyan">{position}</h2>
        <div className="company-meta-info flex flex-nowrap items-center gap-x-1.5 font-semibold text-dark-grayish-cyan">
            <span className="whitespace-nowrap">{postedAt}</span>
            
            <span className="text-dark-grayish-cyan"> • </span> 
            
            <span className="whitespace-nowrap">{contract}</span>
            
            <span className="text-dark-grayish-cyan"> • </span>
            
            <span className="whitespace-nowrap">{location}</span>
        </div>
    </div>
  )
}

export default JobHeader