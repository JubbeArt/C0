import React from 'react'
import { connect } from '../state'

const minWidth = 300

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      width: Math.min(window.innerWidth * 0.5, minWidth)
    }

    window.addEventListener('resize', () => {
      this.setState({ width: Math.min(window.innerWidth * 0.5, minWidth) })
    })
  }

  render () {
    return (
    <>
      <div className='globe' style={{ width: this.state.width, height: this.state.width }}>
        <img className='footprint' src='/assets/gold-foot.png' />
      </div>
      <div className='content'>
        <div className='small-text' style={{ marginTop: '10px' }}>Nivå: Guld</div>
        <div className='small-text'>Du är grym!</div>
        <div className='big-text' style={{ margin: '20px 0 20px' }}>Koldioxidutsläpp</div>
        <div className='small-text'>Ditt utsläpp idag</div>
        <div className='home-pollution'>
          <div className='fat-text'>8 kg CO<sub>2</sub></div>
        </div>
        <div className='small-text'>Ditt genomsnittliga utsläpp</div>
        <div className='home-pollution'>
          <div className='fat-text'>8 kg CO<sub>2</sub></div>
        </div>
        <div className='small-text'>Sveriges genomsnittliga utsläpp</div>
        <div className='home-pollution'>
          <div className='fat-text'>12 kg CO<sub>2</sub></div>
        </div>
      </div>
    </>
    )
  }
}

export default connect(Home)
