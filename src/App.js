import React from 'react'
import { device } from './components/devices'
import styled from 'styled-components'
import QuoteBox  from './components/QuoteBox'
import { COLOR } from './components/color'

const AppHeader = styled.h1`
  text-align: center;
  color: ${COLOR.YELLOW};
  font-size: 3em;
  margin: 0.5em auto;
`;

const AppContainer = styled.div`
`;




const App = () => (

  <AppContainer>
    <AppHeader>Random Quote Generator</AppHeader>
    <QuoteBox></QuoteBox>


  </AppContainer>

)



export default App;
