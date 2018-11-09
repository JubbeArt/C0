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
  width:500px;
`

export default props => (
  <Nav>
    <Div to='el'>El</Div>
    <Div to='ink'>Inköp</Div>
    <Div to='mat'>Mat</Div>
    <Div to='transport'>Transport</Div>
  </Nav>
)
