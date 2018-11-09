import React from 'react'
import { connect } from '../state'

class Food extends React.Component {
  constructor () {
    super()

    this.state = {
      modalOpen: false,
      notfars: 0,
      flaskfars: 0,
      blandfars: 0
    }

    this.addMeal = this.addMeal.bind(this)
  }

  addMeal () {
    this.setState({
      notfars: 0,
      flaskfars: 0,
      blandfars: 0,
      modalOpen: false
    })
  }

  render () {
    const foodTypes = [
      {
        name: 'Nötfärs',
        value: this.state.notfars,
        onChange: event => this.setState({ notfars: event.target.value })
      },
      {
        name: 'Fläskfärs',
        value: this.state.flaskfars,
        onChange: event => this.setState({ flaskfars: event.target.value })
      },
      {
        name: 'Blandfärs',
        value: this.state.blandfars,
        onChange: event => this.setState({ blandfars: event.target.value })
      }
    ]

    return (
      <>
        <div className='content'>
          <h1>Food</h1>
          <button onClick={() => this.setState({ modalOpen: true })}>Lägg till måltid</button>
        </div>
        {
          this.state.modalOpen && (
            <div className='modal'>
              <h2>Ny måltid</h2>
              <div className='exit-modal' onClick={() => this.setState({ modalOpen: false })}>X</div>
              {
                foodTypes.map(({ name, value, onChange }, index) => (
                  <React.Fragment key={name}>
                    {index !== 0 && <hr /> }
                    <div className='food-type'>
                      <span>{name}:</span>
                      <div>
                        <input type='number' value={value} onChange={onChange} />
                        <span>&nbsp;KG</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              }
              <button style={{ marginTop: '35px' }} onClick={this.addMeal}>Lägg till</button>
            </div>
          )
        }
      </>
    )
  }
}

export default connect(Food)
