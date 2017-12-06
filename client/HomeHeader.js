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
            <label htmlFor="nav"></label>
            <ul>
              <li>
                <Link className="active" to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
