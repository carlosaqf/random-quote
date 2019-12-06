import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR } from './color'
import { Button } from './button'


export const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try{
                const res = await fetch(url, options);
                const json = await res.json();
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


export default function Quotes(){
    
    const res = useFetch("http://quotes.stormconsultancy.co.uk/random.json");
    if (!res.response){
        return <div>Loading...</div>
    }
    const quote = res.response.quote
    const author = res.response.author
    return (
        <div className="quote">
            <div>
                <p>{quote}</p>
                <div>
                    - {author}
                </div>
            </div>
        </div>
    )
}