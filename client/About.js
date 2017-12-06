import React from 'react'

import SubPageNav from './SubPageNav'
import AboutBody from './AboutBody'
import PennyFarthing from './PennyFarthing'

const About = () => {
  return (
    <div className="about">
      <SubPageNav page="about" />
      <AboutBody />
      <PennyFarthing />
    </div>
  )
}

export default About
