import React from 'react'

function JobHeader({ company, logo, new: isNew, featured, position, postedAt, contract, location }) {
  return (
    <div className="header">
        <img src={logo}></img>
        <div className="company-name">
            <span>{company}</span>
            {isNew && <span>"NEW!"</span>}
            {featured && <span>"FEATURED"</span>}
        </div>
        <h2 className="company-position">{position}</h2>
        <div className="company-meta-info">
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
        </div>
    </div>
  )
}

export default JobHeader