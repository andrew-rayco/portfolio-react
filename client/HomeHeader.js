import React from 'react'
import {Link} from 'react-router-dom'

function HomeHeader(props) {
  return (
    <div className="header">
      <div class="row">
        <div class="twelve columns">
          <h1 class="logo">Andrew &amp; Co.</h1>
        </div>
      </div>
      <div class="row nav">
        <div class="twelve columns">
          <nav>
            <input type="checkbox" id="nav"/>
            <label for="nav"></label>
            <ul>
              <li>
                <a class="active" href="index.html">Home</a>
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
