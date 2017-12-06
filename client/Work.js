import React from 'react'

import SubPageNav from './SubPageNav'
import WorkBody from './WorkBody'
import PennyFarthing from './PennyFarthing'

const Work = () => {
  return (
    <div className="work">
      <SubPageNav page="work" />
      <WorkBody />
      <PennyFarthing />
    </div>
  )
}

export default Work
