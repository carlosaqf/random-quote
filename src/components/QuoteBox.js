import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from './color'
import { Button } from './button'
import  Quotes, { useFetch }  from './quotes'

const QuoteContainer = styled.div`
  margin: 0 auto;
  background: ${COLOR.BLACK};
  border-radius: 5px;
  height: 40vh;
  width: 80vw;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.5rem 0.7rem 0 rgba(0,0,0,0.5);
`;

const Quote = styled.div`
  margin: 0 auto;
  padding: 1em;
  color: white;
  width: 50vw;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 5em;
`;

export default function QuoteBox() {

  //let randNum = Math.floor(Math.random() * quotes.length)
  //const [num, setNum] = useState(0)
  //onClick={() => setNum(randNum === num ? Math.floor(Math.random() * quotes.length) : randNum)}

  return (
      <QuoteContainer>
        <Quote>
          <Quotes></Quotes>
        </Quote>

        <ButtonContainer>
          <Button>Generate Quote</Button>
          <Button primary>Tweet</Button>
        </ButtonContainer>

      </QuoteContainer>
  )
}
