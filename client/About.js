import React from 'react'

import SubPageNav from './SubPageNav'
import AboutBody from './AboutBody'

const About = () => {
  return (
    <div className="about">
      <SubPageNav page="about" />
      <AboutBody />
    </div>
  )
}

export default About
