import React from 'react'

function HomeHeader(props) {
  return (
    <div className="container secondary-bg">
      <div className="row">
        <div className="twelve columns">
          <img className="pf-icon" src="img/penny-farthing.png" alt="penny farthing"/>
        </div>
      </div>
      <div className="row sample">
        <div className="five columns sample-entry">
          <p className="sprint">01.</p>
          <h5>The elevator pitch</h5>
          <p>I'm Andrew, a Web Developer available for front end work in Wellington.</p>
          <p>I moved to Wellington from Australia in 2006, now living in Wadestown.</p>
          <p>
            <span>I love making things look and feel delightful.</span>
          </p>
          <p>I value a casual workplace culture, good people and a focus on personal and professional growth.</p>
        </div>
        <div className="five columns sample-entry">
          <p className="sprint">02.</p>
          <h5>Objective</h5>
          <p>To leverage my 10+ years of full-cycle web project experience into a satisfying front end development career.</p>
          <p>
            <span>I want to work alongside cheerful like-minded folk.</span>
          </p>
          <p>I want to stay on a steep, interesting learning curve and sustain the rapid growth of my capacity.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
