import React from 'react'
import styled, { css } from 'styled-components'


const StyledButton = styled.button`
    color: white;
    background-color: #DA33FF;
    font-size: 20px;
    border-radius: 30px;
    border: none;
    padding: 10px 50px;
    font-family: 'BreePeru';
    margin: 20px auto;
    display: flex;
    justify-content: center;

    ${({ primary }) =>
        primary &&
        css`
        background-color: palevioletred;
        color: greenyellow;
        `
    }        
`;

const SuperButton = styled(StyledButton)`
    font-size: 17px;
`
const Button = ({ children, primary, clicked, to }) => {
    return (
        <a primary href="https://htmlcolorcodes.com/es/selector-de-color/" onClick="some();">
            <StyledButton primary={primary}>
                {children}
            </StyledButton>
            <SuperButton >
                {children}
            </SuperButton>
        </a>
    )
}

export default Button
