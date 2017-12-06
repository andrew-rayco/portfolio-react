import React from 'react'
import { Link } from 'react-router-dom'

const SubPageNav = (props) => {
  console.log(props)
  return (
    <div className="container blog">
      <div className="row">
        <div className="twelve columns">
          <h1 className="logo"><a href="index.html">Andrew &amp; Co.</a></h1></div>
        </div>
        <div className="row nav">
          <div className="twelve columns">
            <nav>
              <input type="checkbox" id="nav" /><label htmlFor="nav"></label>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link className={props.page === 'about' ? "active" : null} to="/about">About</Link></li>
                <li><Link className={props.page === 'work' ? "active" : null} to="/work">Work</Link></li>
              </ul>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default SubPageNav
