import React from 'react'
import {Link} from 'react-router-dom'

function HomeHeader(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="twelve columns">
          <h1 className="logo">Andrew &amp; Co.</h1>
        </div>
      </div>
      <div className="row nav">
        <div className="twelve columns">
          <nav>
            <input type="checkbox" id="nav"/>
            <label for="nav"></label>
            <ul>
              <li>
                <a className="active" href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="work.html">Work</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
