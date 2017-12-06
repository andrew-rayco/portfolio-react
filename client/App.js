import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

function App (props) {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/work" component={Work} /> */}
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
