import React from 'react'
import styled from 'styled-components'
import { COLOR } from './color'
import { device } from './devices'
import { Button } from './button'

const QuoteContainer = styled.div`
  margin: 0 auto;
  background: ${COLOR.LIGHT_GREY};
  border-radius: 5px;
  height: 40vh;
  width: 80vw;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Quote = styled.div`
  margin: 0 auto;
  padding: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;

`;

const Authors = {
  name: 'Carlos Fegurgur'
}

export default function QuoteBox() {
  return (
      <QuoteContainer>
        <Quote>
          <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolorem? Inventore tempore dolores saepe minus. Nostrum veritatis perspiciatis consequuntur eaque!
          <br /><br /><cite>- Carlos Fegurgur</cite>
          </blockquote>
        </Quote>

        <ButtonContainer>
          <Button>Generate Quote</Button>
          <Button primary>Tweet</Button>
        </ButtonContainer>

      </QuoteContainer>
  )
}
