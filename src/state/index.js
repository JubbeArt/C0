import React from 'react'
import { Subscribe, Container } from 'unstated'

class GlobalState extends Container {
  constructor () {
    super()

    this.state = {
      count: 0
    }
  }

  increment () {
    this.setState({ count: this.state.count + 1 })
  }
}

export const connect = Component => {
  return props => (
    <Subscribe to={[GlobalState]}>
      {gloablState => <Component {...props} global={gloablState} />}
    </Subscribe>
  )
}
