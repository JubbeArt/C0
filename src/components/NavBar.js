import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default props => (
  <div className='nav-bar'>
    <NavLink className='nav-icon' to='/electricity'>
      <img src='/assets/batteri.png' style={{ width: '55%', marginTop: '5%' }} />
    </NavLink>
    <NavLink className='nav-icon' to='/food'>
      <img src='/assets/gaffel-kniv.png' style={{ width: '45%' }} />
    </NavLink>
    <Link className='home-button' to='/'>
      <img src='/assets/c0-logo-green-bg-circle.png' style={{ width: '90%' }} />
    </Link>
    <NavLink className='nav-icon' to='/transport'>
      <img src='/assets/cykel.png' style={{ width: '65%' }} />
    </NavLink>
    <NavLink className='nav-icon' to='/info'>
      <img src='/assets/info.png' style={{ width: '40%' }} />
    </NavLink>
  </div>
)
