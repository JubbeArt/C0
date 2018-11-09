import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'unstated'

import Home from './components/Home'
import Transport from './components/Transport'
import NavBar from './components/NavBar'
import Electricity from './components/Electricity'
import Consumption from './components/Consumption'
import Food from './components/Food'

ReactDOM.render(
  <Provider>
    <Router>
    <>
      <div className='main'>
        <Switch>
          <Route path='/transport' component={Transport} />
          <Route path='/food' component={Food} />
          <Route path='/electricity' component={Electricity} />
          <Route path='/consumption' component={Consumption} />
          <Route component={Home} />
        </Switch>
      </div>
      <NavBar />
    </>
    </Router>
  </Provider>,
  document.getElementById('root')
)
