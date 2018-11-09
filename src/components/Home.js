import React from 'react'

export default props => (
  <>
    <div className='globe' style={{ width: window.innerWidth * 0.5, height: window.innerWidth * 0.5 }}>
      <img className='footprint' src='/assets/footprint2.png' />
    </div>
    <div className='main'>
      <h3>Dagliga genomsnitt...</h3>
      <h3>Jämnfört med världen...</h3>
    </div>
  </>
)
