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
  
  const [num, setNum] = useState(0);

  // Call useFetch method and pass quote API URL as parameter
  const res = useFetch("http://quotes.stormconsultancy.co.uk/quotes.json");
  
  
  if (!res.response){
      return <div>Loading...</div>
  }

  let randNum = Math.floor(Math.random() * res.response.length)

  // Initialize variables for Quote and author grabbed from useFetch
  const quote = res.response[randNum].quote;
  const author = res.response[randNum].author;

  return (
      <QuoteContainer>
        <Quote>
          <Quotes quote={quote} author={author}></Quotes>
        </Quote>

        <ButtonContainer>
          <Button onClick={() => setNum(randNum === num ? Math.floor(Math.random() * res.response.length): randNum)}>Generate Quote</Button>
          <Button primary><a href={`https://twitter.com/intent/tweet?text=${quote}--${author}`}>Tweet</a></Button>
        </ButtonContainer>

      </QuoteContainer>
  )
}
