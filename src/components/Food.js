import React from 'react'
import { connect } from '../state'
import { addMeal } from '../helpers/algorithms'

const meatType = {
  beef: 'Nöt',
  pork: 'Fläsknone',
  quorn: 'Quorn',
  mincedMeat: 'Köttfärs',
  fish: 'Fisk',
  soyproducts: 'Sojaprodukt',
  leguminous: 'Baljväxt'
}

const baseType = {
  rice: 'Ris',
  pasta: 'Pasta',
  pototoes: 'Potatis'
}

const vegetableType = {
  importedFruitsGreens: 'Importerad frukt och grönsaker',
  localGreens: 'Lokalt odlade grönsaker',
  localFruit: 'Lokalt odlad frukt'
}

const initState = Object.freeze({
  meatType: 'beef',
  meatWeight: 0,
  baseType: 'rice',
  baseWeight: 0,
  vegetableType: 'importedFruitsGreens',
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
          <div className='title'>
            <img src='/assets/gaffel-kniv.png' />
            <span className='big-text'>Lägg till mat</span>
          </div>

          <div className='big-text input-title'>Basmat</div>
          <div className='input-row'>
            <select onChange={event => this.setState({ baseType: event.target.value })} value={this.state.baseType}>
              {
                Object.entries(baseType).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))
              }
            </select>
            <div className='input-number-box'>
              <span className='input-number-button' onClick={() => this.setState(state => ({ baseWeight: Math.max(0, state.baseWeight - 100) }))}>&#8861;</span>
              <span>{this.state.baseWeight} <b>g</b></span>
              <span className='input-number-button' onClick={() => this.setState(state => ({ baseWeight: state.baseWeight + 100 }))}>&#8853;</span>
            </div>
          </div>

          <div className='big-text input-title'>Protein</div>
          <div className='input-row'>
            <select onChange={event => this.setState({ meatType: event.target.value })} value={this.state.meatType}>
              {
                Object.entries(meatType).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))
              }
            </select>
            <div className='input-number-box'>
              <span className='input-number-button' onClick={() => this.setState(state => ({ meatWeight: Math.max(0, state.meatWeight - 100) }))}>&#8861;</span>
              <span>{this.state.meatWeight} <b>g</b></span>
              <span className='input-number-button' onClick={() => this.setState(state => ({ meatWeight: state.meatWeight + 100 }))}>&#8853;</span>
            </div>
          </div>

          <div className='big-text input-title'>Frukt och grönt</div>
          <div className='input-row'>
            <select onChange={event => this.setState({ vegetableType: event.target.value })} value={this.state.vegetableType}>
              {
                Object.entries(vegetableType).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))
              }
            </select>
            <div className='input-number-box'>
              <span className='input-number-button' onClick={() => this.setState(state => ({ vegetableWeight: Math.max(0, state.vegetableWeight - 100) }))}>&#8861;</span>
              <span>{this.state.vegetableWeight} <b>g</b></span>
              <span className='input-number-button' onClick={() => this.setState(state => ({ vegetableWeight: state.vegetableWeight + 100 }))}>&#8853;</span>
            </div>
          </div>

          <button style={{ marginTop: '35px' }} onClick={this.addMeal}>Spara</button>
        </div>

      </>
    )
  }
}

export default connect(Food)
