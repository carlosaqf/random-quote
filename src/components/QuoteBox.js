import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from './color'
import { Button } from './button'
import { quotes } from './quotes'

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
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 5em;
`;

export default function QuoteBox() {

  let randNum = Math.floor(Math.random() * quotes.length)
  const [num, setNum] = useState(0)
  

  return (
      <QuoteContainer>
        <Quote>
          <blockquote><i class="fas fa-quote-left"></i>  {quotes[num].quote}  <i class="fas fa-quote-right"></i>
          <br /><br /><cite>- {quotes[num].author}</cite>
          </blockquote>
        </Quote>

        <ButtonContainer>
          <Button onClick={() => setNum(randNum === num ? Math.floor(Math.random() * quotes.length) : randNum)}>Generate Quote</Button>
          <Button primary>Tweet</Button>
        </ButtonContainer>

      </QuoteContainer>
  )
}
