import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapp = styled.footer`
background-color:#1f1f20;
width: 100%;
height: 94px;

`
const LinksWrapp = styled.div`
display:flex;
justify-content:center;
gap:10px;

`
const StyledLink = styled(Link)`
color:white;
font-size:24px;
text-decoration: none;

`
export const Footer = () => {
    

    return (
        <FooterWrapp>
            <LinksWrapp>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/contact'>Contact us</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
            </LinksWrapp>
        </FooterWrapp>
    )
}