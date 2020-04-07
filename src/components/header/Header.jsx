import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const WrapperHeader = styled.header`
    background-color: ${ props => props.theme.dark_yellow};
`
const NavHeader = styled.nav`
    font-family: ClanOffcBook;
    font-size: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
`
const NavLinkHeader = styled(NavLink)`
    color: black;
    &:hover, &.activeLink {
    color: white;
  }
`


const Header = () => {
    return (
        <WrapperHeader>
            <NavHeader>
                <NavLinkHeader activeClassName="activeLink" to="/">Hello!, i'm the Header</NavLinkHeader>
                <NavLinkHeader activeClassName="activeLink" to="/sample-page">To sample page</NavLinkHeader>
            </NavHeader>
        </WrapperHeader>
    )
}

export default Header
