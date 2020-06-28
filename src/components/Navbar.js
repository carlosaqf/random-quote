import React from 'react'
import styled from 'styled-components'
import { COLOR } from './color'

const StyledNavbar = styled.h1`

  color: ${COLOR.YELLOW};
  font-size: 3em;
  margin-top: 0;
  padding: 0.5em 0;
  background: ${COLOR.LIGHT_GREY};
  width: 100%;
  text-align: center;

`


export default function Navbar() {
	
	return (

		<StyledNavbar>Random Quote Generator</StyledNavbar>

	)
	
}