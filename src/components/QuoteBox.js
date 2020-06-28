import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR } from './color'
import { Button } from './button'

// STYLED COMPONENTS
const QuoteContainer = styled.div`
  flex: 1 0 auto;
  padding-top: 5em;
`;

const Quote = styled.div`
  background: ${COLOR.BLACK};
  border-radius: 5px;
  box-shadow: 0 0.5rem 0.7rem 0 rgba(0,0,0,0.5);
  margin: 0 auto;
  padding: 1em;
  color: white;
  width: 66em;
  height: 20em;
  text-align: center;
  display: flex;
  flex-direction: column;

  h3{
    flex: 1 0 auto;
  }

`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 5em;

`;


// API LOGIC
const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);
          try{
              const res = await fetch(url);
              const json = await res.json();
              console.log(json);
              setResponse(json);
              setIsLoading(false);
          } catch (error) {
              setError(error);
          }
      };
      fetchData();
  }, []);

  return { response, error, isLoading };
}

export default function QuoteBox() {
  
  const [num, setNum] = useState(0);

  // Call useFetch method and pass quote API URL as parameter
  // const res = useFetch("http://quotes.stormconsultancy.co.uk/quotes.json");
  const res = useFetch("https://randomstoicquotesapi.herokuapp.com/api/v1/quotes");
  
  if (!res.response){
      return <div>Loading...</div>
  }

  let randNum = Math.floor(Math.random() * res.response.data.length)

  // Initialize variables for Quote and author grabbed from useFetch
  const quote = res.response.data[num].attributes.text
  const authorId = res.response.data[num].relationships.author.data.id

  // API sends two Objects, function below grabs Author name second object
  // passing the author id associated with the quote from the first object
  const authorName = (authorId) => {
    let name = ''
    let authorArray = res.response.included
    authorArray.forEach(author => {
      if(author.id === authorId){
        name = author.attributes.name
      }
    })
    return name
  }

  
  

  return (
      <QuoteContainer>

        <Quote>

          <h1>"{quote}"</h1>  
          <h3>- {authorName(authorId)}</h3>

          <ButtonContainer>
            <Button onClick={() => setNum(randNum === num ? Math.floor(Math.random() * res.response.data.length): randNum)}>Generate Quote</Button>
            
            {/* TODO: Add Tweet button functionality */}
            
            <Button primary>
              Tweet
            </Button>
          </ButtonContainer>
          
        </Quote>

      </QuoteContainer>
  )
}
