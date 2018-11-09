import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Transport from './components/Transport'
import NavBar from './components/NavBar';

ReactDOM.render(
  <Router>
    <>
      {/* <Link to='/'>Home</Link> */}
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/transport'></Route>    
    </Switch>
    <NavBar />
    </>
  </Router>,
  document.getElementById('root')
)