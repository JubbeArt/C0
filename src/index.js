import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Transport from './components/Transport'

ReactDOM.render(
  <Router>
      {/* <Link to='/'>Home</Link> */}
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/transport'></Route>       
    </Switch>
  </Router>,
  document.getElementById('root')
)