import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './views/Home'
import Resume from './views/Resume'

class App extends Component {
  render() {
    return (
      <div className="App">
        老周的博客
        <ul className="header">
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/resume">resume</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App/>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="resume" component={Resume} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter
