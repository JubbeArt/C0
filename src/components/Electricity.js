import React from 'react'

export default class Electricity extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className='title'>
          <img src='/assets/batteri.png' />
          <span className='big-text'>Energiåtgång</span>
        </div>
        <div className='small-text'>Ditt konto är kopplat till Google Home och är synkat</div>
        <hr />
        <div className='small-text'>De senaste 5 dagarna</div>
      </div>
    )
  }
}
