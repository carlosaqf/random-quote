import styled, { css } from 'styled-components'
import { COLOR } from './color'

export const Button = styled.button`
    
    background: transparent;
    border-radius: 3px;
    color: ${COLOR.DARK_GREY};
    margin: 0 1em;
    padding: 0.5em 1em;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.5);
    font-family: Helvetica Neue;

    ${props => props.primary && css `
        background: ${COLOR.BLUE};
        color: ${COLOR.LIGHT_GREY};
    `}
`;
