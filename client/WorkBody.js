import React from 'react'
import { Link } from 'react-router-dom'

const WorkBody = () => {
  return (
    <div className="container blog">
      <h1>Things I've made</h1>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="http://morgenstund.andycondon.com">
          <img src="img/morgenstund.jpg" alt="Morgenstund thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Morgenstund</h4>
        <p>A surprise gift for an amateur beekeeping friend in Germany (Der Bienenherr).<br />Fully responsive HTML and CSS with the help of media queries and the Skeleton CSS framework. This was a fun project, done in the knowledge that there'd be laughs at the end.</p>
        <p><a href="http://morgenstund.andycondon.com">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item even">
      <div className="four columns">
        <a className="image-link" href="https://gurglr.herokuapp.com/">
          <img src="img/gurgl.jpg" alt="Gurgl thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Gurgl</h4>
        <p>An infants clothing exchange app created as a group project to finish up the Enspiral Dev Academy, but enduring as a darn good idea. It's real. It's happening. <br />Built using Node.js, Express, React, Redux, Webpack and Skeleton.</p>
        <p><a href="https://gurglr.herokuapp.com/">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="http://smokepack.andycondon.com">
          <img src="img/smokepack3.jpg" alt="Smokepack thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Smokepack</h4>
        <p>A personal hobby project. I've been inspired by antique cigarette pack designs ever since I saw the brilliant <a href="https://www.youtube.com/watch?v=QaFKoucByNE">intro to the movie <em>Thank You for Smoking</em></a>. <br />These are my digital, fully responsive tributes with the much healthier HTML and CSS inside.</p>
        <p><a href="http://smokepack.andycondon.com">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item even">
      <div className="four columns">
        <a className="image-link" href="http://bridget.andycondon.com">
          <img src="img/bridget.jpg" alt="Bridget McDonnell Gallery thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Bridget McDonnell Gallery</h4>
        <p>A minimalist site for a gallery in Melbourne. I was tasked with building a responsive front end for a long overdue update. Lovingly crafted with trusty old HTML, CSS, jQuery, jQueryUI and the  Skeleton CSS framework.</p>
        <p><a href="http://bridget.andycondon.com">Visit project</a></p>
      </div>
    </div>
    </div>
  )
}

export default WorkBody
