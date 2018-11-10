import React from 'react'
import { connect } from '../state'
import { addMeal } from '../helpers/algorithms'

const meatType = {
  none: 'Inget',
  beef: 'Nöt',
  pork: 'Fläsk',
  quorn: 'Quorn',
  mincedMeat: 'Köttfärs',
  fish: 'Fisk',
  soyproducts: 'Sojaprodukt',
  leguminous: 'Baljväxt'
}

const baseType = {
  none: 'Inget',
  rice: 'Ris',
  pasta: 'Pasta',
  pototoes: 'Potatis'
}

const vegetableType = {
  none: 'Ingen',
  importedFruitsGreens: 'Importerad frukt och grönsaker',
  localGreens: 'Lokalt odlade grönsaker',
  localFruit: 'Lokalt odlad frukt'
}

const initState = Object.freeze({
  meatType: 'none',
  meatWeight: 0,
  baseType: 'none',
  baseWeight: 0,
  vegetableType: 'none',
  vegetableWeight: 0
})

class Food extends React.Component {
  constructor () {
    super()

    this.state = initState
    this.addMeal = this.addMeal.bind(this)
  }

  addMeal () {
    const meal = {
      [this.state.meatType]: Number(this.state.meatWeight),
      [this.state.baseType]: Number(this.state.meatWeight),
      [this.state.vegetableType]: Number(this.state.vegetableWeight)
    }

    delete meal.none

    addMeal(meal)
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
                    <option key={key} value={key}>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.baseWeight} onChange={event => this.setState({ baseWeight: event.target.value })} />
            </div>
            <span>&nbsp;g</span>
          </div>
          <hr />
          <div className='food-type'>
            <span style={{ marginRight: '16px' }}>Kött:</span>
            <div className='food-input'>
              <select onChange={event => this.setState({ meatType: event.target.value })} value={this.meatType}>
                {
                  Object.entries(meatType).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.meatWeight} onChange={event => this.setState({ meatWeight: event.target.value })} />
            </div>
            <span>&nbsp;g</span>
          </div>
          <hr />
          <div className='food-type'>
            <span style={{ marginRight: '16px' }}>Grönt:</span>
            <div className='food-input'>

              <select onChange={event => this.setState({ vegetableType: event.target.value })} value={this.vegetableType}>
                {
                  Object.entries(vegetableType).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))
                }
              </select>
              <input type='number' value={this.state.vegetableWeight} onChange={event => this.setState({ vegetableWeight: event.target.value })} />
            </div>
            <span>&nbsp;g</span>
          </div>

          <button style={{ marginTop: '35px' }} onClick={this.addMeal}>Spara</button>
        </div>

      </>
    )
  }
}

export default connect(Food)
