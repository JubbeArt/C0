import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled(Link)`
  width:25%;
  height:50px;
  text-align:center;
  color:yellow;
  background-color:blue;
  border:1px solid black;
`

const Nav = styled.div`
  display:flex;
  flex-direction:row;
  width: 100%;
`

const Img = styled.img`
max-width:100%;
max-height:100%;
filter:invert(100%);
`

export default props => (
  <Nav className='nav-bar'>
    <Div to='/electricity'><Img src='/assets/circle.png' /></Div>
    <Div to='/consumption'><Img src='/assets/circle.png' /></Div>
    <Div to='/food'><Img src='/assets/circle.png' /></Div>
    <Div to='/transport'><Img src='/assets/circle.png' /></Div>
  </Nav>
)
