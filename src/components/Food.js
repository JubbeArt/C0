import React from 'react'
import { connect } from '../state'

const none = 'Inget'

const meatType = {
  none: 'Ingen',
  beef: 'Biff',
  pork: 'Fläsk',
  mincedMeat: 'Färs',
  quorn: 'Quorn',
  fish: 'Fisk'
}

const baseType = {
  none: 'Inget',
  rice: 'Ris',
  pasta: 'Pasta',
  pototoes: 'Potatis'
}

const vegetableType = {
  none
}

const initState = Object.freeze({
  meatType: none,
  meatWeight: 0,
  baseType: none,
  baseWeight: 0,
  vegetableType: none,
  vegetableWeight: 0
})

class Food extends React.Component {
  constructor () {
    super()

    this.state = initState
    this.addMeal = this.addMeal.bind(this)
  }

  addMeal () {
    this.setState({ ...initState })
  }

  render () {
    return (
      <>
        <div className='content'>
          <h1>Mat</h1>
          <div className='food-type'>
            <span style={{ marginRight: '16px' }}>Basmat:</span>
            <div className='food-input'>
              <select onChange={event => this.setState({ baseType: event.target.value })} value={this.baseType}>
                {
                  Object.entries(baseType).map(([key, value]) => (
                    <option>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.baseWeight} onChange={event => this.setState({ baseWeight: event.target.value })} />
            </div>
            <span>&nbsp;KG</span>
          </div>
          <hr />
          <div className='food-type'>
            <span style={{ marginRight: '16px' }}>Kött:</span>
            <div className='food-input'>
              <select onChange={event => this.setState({ meatType: event.target.value })} value={this.meatType}>
                {
                  Object.entries(meatType).map(([key, value]) => (
                    <option>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.meatWeight} onChange={event => this.setState({ meatWeight: event.target.value })} />
            </div>
            <span>&nbsp;KG</span>
          </div>
          <hr />
          <div className='food-type'>
            <span style={{ marginRight: '16px' }}>Grönsaker:</span>
            <div className='food-input'>

              <select onChange={event => this.setState({ vegetableType: event.target.value })} value={this.vegetableType}>
                {
                  Object.entries(vegetableType).map(([key, value]) => (
                    <option>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.vegetableWeight} onChange={event => this.setState({ vegetableWeight: event.target.value })} />
            </div>
            <span>&nbsp;KG</span>
          </div>

          <button style={{ marginTop: '35px' }} onClick={this.addMeal}>Spara</button>
        </div>

      </>
    )
  }
}

export default connect(Food)
