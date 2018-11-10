import React from 'react'

export default class Electricity extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className='title'>
          <img src='/assets/batteri.png' />
          <span className='big-text'>Energiåtgång</span>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <div className='small-text'>Ditt konto är kopplat till Google Home och är synkat</div>
          <hr />
          <div className='small-text'>De senaste 5 dagarna</div>
          <div className='energy-bars'>
            <div className='energy-bar' style={{ height: '160px' }} />
            <div className='energy-bar' style={{ height: '80px' }} />
            <div className='energy-bar' style={{ height: '80px' }} />
            <div className='energy-bar' style={{ height: '100px' }} />
            <div className='energy-bar' style={{ height: '60px' }} />
          </div>
          <div style={{ fontSize: '1em', margin: '25px 0' }}>Vad kräver mest energi just nu?</div>
          <div className='energy-flex' style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '50%' }}>
              <img className='energy-img' src='/assets/kyl-green.png' />
            </div>
            <div style={{ width: '50%', marginTop: '20px' }}>
              <img className='energy-img' src='/assets/tv-green.png' />
            </div>
            <div style={{ width: '50%' }} className='small-text' >Kylskåp</div>
            <div style={{ width: '50%' }} className='small-text' >Smart-TV</div>
            <div style={{ width: '50%' }} className='fat-text' >0,28 kWh</div>
            <div style={{ width: '50%' }} className='fat-text' >0,14 kWh</div>
          </div>
        </div>

      </div>
    )
  }
}
