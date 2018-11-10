import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div className='nav-bar'>
    <Link className='nav-icon' to='/electricity'>
      <img src='/assets/batteri.png' style={{ width: '50%' }} />
    </Link>
    <Link className='nav-icon' to='/food'>
      <img src='/assets/gaffel-kniv.png' style={{ width: '45%' }} />
    </Link>
    <Link className='nav-icon' to='/transport'>
      <img src='/assets/cykel.png' style={{ width: '65%' }} />
    </Link>
    <Link className='nav-icon' to='/info'>
      <img src='/assets/info.png' style={{ width: '40%' }} />
    </Link>
    {/* <Link to='/'>
      <img className='home-button' />
    </Link> */}
  </div>
)
