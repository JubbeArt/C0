import React from 'react'
import { connect } from '../state'

class Home extends React.Component {
  render () {
    return (
    <>
      <div className='globe' style={{ width: window.innerWidth * 0.5, height: window.innerWidth * 0.5 }}>
        <img className='footprint' src='/assets/green-foot.png' />
      </div>
      <div className='content'>
        <h3>Dagliga genomsnitt:</h3>
        <h3>Dagends koldioxidutsläpp: ${}</h3>
        <h3>Du är Jämnfört med världen...</h3>
        <h3>Du är Jämnfört med världen...</h3>
      </div>
    </>
    )
  }
}

export default connect(Home)
