import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Transport from './components/Transport'
import NavBar from './components/NavBar'

ReactDOM.render(
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/transport' component={Transport} />
      </Switch>
      <NavBar />
    </>
  </Router>,
  document.getElementById('root')
)
