import React from 'react'
import styled from 'styled-components'
import QuoteBox  from './components/QuoteBox'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;

`;




const App = () => (

  <AppContainer>

    <Navbar />
    <QuoteBox />
    <Footer />

  </AppContainer>

)



export default App;
