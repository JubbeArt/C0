import React from 'react'
import { connect } from '../state'
import * as algs from '../helpers/algorithms.js'

const transportType = {
  cycle: 'Cykel',
  train: 'Tåg',
  bus: 'Buss',
  car: 'Bil',
  plane: 'Flyg'
}

const fuelType = {
  elecricity: 'El',
  human: 'Människa',
  gasoline: 'Bensin',
  ethanol: 'Etanol'
}

const initState = Object.freeze({
  transportType: 'cycle',
  distance: 0,
  fuelType: 'elecricity'
})

class Transport extends React.Component {
  constructor () {
    super()

    this.state = initState
    this.submitTrip = this.submitTrip.bind(this)
  }

  submitTrip () {
    algs.addTrip(this.state.transportType, this.state.distance)
    this.setState({ ...initState })
  }

  render () {
    return (
      <>
        <div className='content'>
          <div className='title'>
            <img src='/assets/cykel.png' />
            <span className='big-text'>Lägg till transport</span>
          </div>

          <div className='big-text input-title'>Färdmedel</div>
          <div className='input-row'>
            <select onChange={event => this.setState({ transportType: event.target.value })} value={this.state.transportType}>
              {
                Object.entries(transportType).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))
              }
            </select>
            <div className='input-number-box'>
              <span className='input-number-button' onClick={() => this.setState(state => ({ distance: Math.max(0, state.distance - 1) }))}>&#8861;</span>
              <span>{this.state.distance} <b>km</b></span>
              <span className='input-number-button' onClick={() => this.setState(state => ({ distance: state.distance + 1 }))}>&#8853;</span>
            </div>
          </div>

          <div className='big-text input-title'>Drivmedel</div>
          <div className='input-row'>
            <select onChange={event => this.setState({ fuelType: event.target.value })} value={this.state.fuelType}>
              {
                Object.entries(fuelType).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))
              }
            </select>
            <div style={{ background: 'none' }} className='input-number-box' />
          </div>

          <button style={{ marginTop: '35px' }} onClick={this.submitTrip}>Spara</button>
        </div>

      </>
    )
  }
}

export default connect(Transport)
