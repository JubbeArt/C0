import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div className='nav-bar'>
    <Link className='nav-icon' to='/electricity'>
      <img src='/assets/batteri.png' style={{ width: '55%', marginTop: '5%' }} />
    </Link>
    <Link className='nav-icon' to='/food'>
      <img src='/assets/gaffel-kniv.png' style={{ width: '45%' }} />
    </Link>
    <Link className='home-button' to='/'>
      <img src='/assets/c0-logo-green-bg-circle.png' style={{ width: '90%' }} />
    </Link>
    <Link className='nav-icon' to='/transport'>
      <img src='/assets/cykel.png' style={{ width: '65%' }} />
    </Link>
    <Link className='nav-icon' to='/info'>
      <img src='/assets/info.png' style={{ width: '40%' }} />
    </Link>
  </div>
)
