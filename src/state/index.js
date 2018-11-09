import React from 'react'
import { Subscribe, Container } from 'unstated'

class GlobalState extends Container {
  constructor () {
    super()

    this.state = {
      totalMeal: {

      }
    }
  }

  addMeal (meal) {
    // this.setState({ meals: [...this.state.meals, meal] })
  }
}

export const connect = Component => {
  return props => (
    <Subscribe to={[GlobalState]}>
      {gloablState => <Component {...props} global={gloablState} />}
    </Subscribe>
  )
}
