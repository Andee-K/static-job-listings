import React from 'react'

function JobHeader({ company, new: isNew, featured, position, postedAt, contract, location }) {
  return (
    <div className="header flex flex-col gap-y-3">
        <div className="company-name mt-2">
            <span className="mr-6 text-desaturated-dark-cyan font-extrabold">{company}</span>
            {isNew && <span className="mr-2 rounded-2xl p-1 px-2 text-sm text-white bg-desaturated-dark-cyan font-extrabold">NEW!</span>}
            {featured && <span className="rounded-2xl p-1 px-2 text-sm text-white bg-black font-extrabold">FEATURED</span>}
        </div>
        <h2 className="company-position text-black font-bold">{position}</h2>
        <div className="company-meta-info flex flex-start flex-nowrap gap-x-0.5 text-dark-grayish-cyan">
            <span className="mr-4 font-bold">{postedAt}</span>
            <span className="mx-4 font-bold">{contract}</span>
            <span className="ml-4 font-bold">{location}</span>
        </div>
    </div>
  )
}

export default JobHeader