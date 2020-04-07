import React from 'react'
import styled from 'styled-components'


const WrapperFooter = styled.footer`
    background-color: ${props => props.theme.dark_yellow};
    ${props => props.theme.xsDevice} {
        display: none
    }
`
const SectionFooter = styled.section`
    font-family: ClanOffcBook;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`

const Footer = () => {
    return (
        <WrapperFooter>
            <SectionFooter> Bye!, i'm the Footer</SectionFooter>
        </WrapperFooter>
    )
}

export default Footer
