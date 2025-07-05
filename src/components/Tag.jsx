import React from 'react'

function Tag({ tagName }) {
  return (
    <span className="bg-light-grayish-cyan-bg p-2 rounded-md hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-bg">
        {tagName}
    </span>
  )
}

export default Tag