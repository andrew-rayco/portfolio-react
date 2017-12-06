import React from 'react'
import { Link } from 'react-router-dom'

const AboutBody = () => {
  return (
    <div className="container blog">
      <h1>The critical info</h1>
      <div className="row about">
        <div className="six columns">
          <p>I was a Web Project/Account Manager at <Link to="http://springload.co.nz">Springload</Link> for over five years until 2012, and have built WordPress sites for small businesses ever since. I've just graduated from Enspiral Dev Academy, a commitment I made to update and refine my skills.</p>
          <p>I smile at passing strangers on a quiet street, and strongly believe in thank you waves when behind the wheel. I enjoy reading, gaming, guitaring, redditing and coding. I'm also pretty big into Formula 1, so I have that going for me which is nice.</p>
          <div className="row">
            <div className="six columns contact">
              <h3>Mail</h3>
              <p>
                <Link to="mailto:andy@andycondon.com">andy@<wbr/>andycondon.com</Link>
              </p>
              <h3>Twitter</h3>
              <p>
                <Link to="https://twitter.com/too_much_andrew">@Too_Much_Andrew</Link>
              </p>
            </div>
            <div className="six columns contact">
              <h3>Github</h3>
              <p>
                <Link to="https://github.com/andrew-rayco">andrew-rayco</Link>
              </p>
              <h3>Available for</h3>
              <p>Hire and Freelance</p>
            </div>
          </div>
        </div>
        <div className="six columns">
          <p className="large">HTML5, CSS3, JavaScript, React, Redux, Node.js, Git, Express, Knex, SQL, APIs, Webpack, Gulp, Testing, WordPress, Copywriting, Client-friendly</p>
        </div>
      </div>
    </div>
  )
}

export default AboutBody
