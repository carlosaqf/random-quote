import styled, { css } from 'styled-components'
import { COLOR } from './color'

export const Button = styled.button`
    
    background: ${COLOR.YELLOW};
    border-radius: 3px;
    color: ${COLOR.BLACK};
    margin: 0 1em;
    padding: 0.5em 1em;
    border: none;
    font-family: Helvetica Neue, sans-serif;

    ${props => props.primary && css `
        background: ${COLOR.BLUE};
        color: ${COLOR.LIGHT_GREY};
    `}
`;
