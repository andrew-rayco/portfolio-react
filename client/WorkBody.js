import React from 'react'
import { Link } from 'react-router-dom'

const WorkBody = () => {
  return (
    <div className="container blog">
      <h1>Things I've made</h1>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="http://f1ian.herokuapp.com">
          <img src="img/f1ian.png" alt="F1ian thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>F1ian</h4>
        <p>A personal project based on my passion for Formula 1.<br />A quick reference for details and results of every race in F1 history, and every circuit ever used. Including race visualisations of more recent events.<br />
        Built with React, PostGreSQL, Express and webpack.<br />Hosted on a Heroku hobby-dev account, so it can be slow to spin up first time.</p>
        <p><a href="http://f1ian.herokuapp.com">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="https://my-metlink.herokuapp.com/">
          <img src="img/my-metlink.png" alt="My Metlink thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>My Metlink</h4>
        <p>Like most people, I only ever catch the bus from two places.<br />This app consumes Metlink's unofficial API to quickly tell me when the next bus is expected, whether I'm going to town or going home.<br />
        Lovingly crafted with React, Express, Sass and webpack.<br />Hosted on a Heroku hobby-dev account, so it can be slow to spin up first time.</p>
        <p><a href="https://my-metlink.herokuapp.com/">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="http://morgenstund.andycondon.com">
          <img src="img/morgenstund.jpg" alt="Morgenstund thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Morgenstund</h4>
        <p>A surprise gift for an amateur beekeeping friend in Germany (Der Bienenherr).<br />Fully responsive HTML and CSS with the help of media queries and the Skeleton CSS framework. This was a fun project, and I'm pretty thrilled with the end result.</p>
        <p><a href="http://morgenstund.andycondon.com">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item odd">
      <div className="four columns">
        <a className="image-link" href="http://wairua.andycondon.com">
          <img src="img/wairua.png" alt="Wairua thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Wairua Adventures</h4>
        <p>A create-react-app project for an emerging wellness adventure group.<br />Currently a draft awaiting content, this site is fully responsive, with a whopping great form for online registrations.<br />
        This app magically formed with React, Sass, webpack and is hosted on a Digital Ocean droplet.</p>
        <p><a href="http://wairua.andycondon.com">Visit project</a></p>
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
        <p>An infants clothing exchange app created as a group project to finish up the Enspiral Dev Academy, but enduring as a darn good idea. It's real. It's happening. <br />Built using Node.js, Express, React, Redux, Webpack and Skeleton.<br />Hosted on a Heroku hobby-dev account, so it can be slow to spin up first time.</p>
        <p><a href="https://gurglr.herokuapp.com/">Visit project</a></p>
      </div>
    </div>
    <div className="row portfolio-item even">
      <div className="four columns">
        <a className="image-link" href="http://shopping.andycondon.com/">
          <img src="img/shopping.png" alt="Shopping thumbnail" />
        </a>
      </div>
      <div className="eight columns">
        <h4>Shopping List</h4>
        <p>A simple personalised place to keep track of what we need.<br />With bonus random insults to entertain the user on load. This was my first real app and we still use it every day.<br />Takes advantage of a NoSQL realtime database from Google Firebase.</p>
        <p><a href="http://shopping.andycondon.com/">Visit project</a></p>
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
        <p>A personal CSS hobby project. I've been inspired by antique cigarette pack designs ever since I saw the brilliant <a href="https://www.youtube.com/watch?v=QaFKoucByNE">intro to the movie <em>Thank You for Smoking</em></a>. <br />These are my digital, fully responsive tributes with the much healthier HTML and CSS inside.</p>
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
