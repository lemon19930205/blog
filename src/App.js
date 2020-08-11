import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom'

import Home from './views/Home'
import Resume from './views/Resume'

// class App extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className="App">
//         老周的博客
//         <ul className="header">
//           <li>
//             <Link to="/home">home</Link>
//           </li>
//           <li>
//             <Link to="/resume">resume</Link>
//           </li>
//         </ul>
//         {/* {this.props.children} */}
//       </div>
//     )
//   }
// }

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Redirect from="*" to="/home"/>
      </Router>
    )
  }
}

export default AppRouter
