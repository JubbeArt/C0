import React from 'react'

export default class Home extends React.Component {
  render () {
    return (
    <>
      <div className='globe' style={{ width: window.innerWidth * 0.5, height: window.innerWidth * 0.5 }}>
        <img className='footprint' src='/assets/footprint2.png' />
      </div>
      <h3>Dagliga genomsnitt...</h3>
      <h3>Jämnfört med världen...</h3>
    </>
    )
  }
}
