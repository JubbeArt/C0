import React from 'react'
import { connect } from '../state'

class Info extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className='title'>
          <img src='/assets/info.png' />
          <span className='big-text'>Miljösmarta tips</span>
        </div>

        <div className='info-container'>
          <div className='info-box' style={{ backgroundColor: '#FF6B6B' }}>
            <div className='big-text'>Energi</div>
            <div className='tip-text'>
              Du behöver se över din förbrukning. Här kan du läsa hur!
            </div>
          </div>

          <div className='info-box'>
            <div className='big-text'>Mat</div>
            <div className='tip-text'>
              Din matkonsumtion är på en mycket bra nivå. Eco is healthy!
            </div>
          </div>

          <div className='info-box'>
            <div className='big-text'>Transport</div>
            <div className='tip-text'>
              Dina transportvanor är hållbara! Keep that bike rolling!
            </div>
          </div>

          <div className='info-box'>
            <div className='big-text'>Guldtips</div>
            <div className='tip-text'>
              För dig som inte får nog av miljö. You're like, super green!
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(Info)
