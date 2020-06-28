import React from 'react'
import styled from 'styled-components'
import { COLOR } from './color'

const StyledFooter = styled.footer`

  color: ${COLOR.YELLOW};
  background: ${COLOR.BLUE};
  margin: 0 auto;
  width: 100%;
  text-align: center;
  
`

export default function Footer() {
	
	return(
		<StyledFooter>Created by Carlos Fegurgur &copy; 2020</StyledFooter>
	)
}