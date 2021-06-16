import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapp = styled.footer`
background-color:#1f1f20;
width: 100%;
height: 94px;


`
const LinksWrapp = styled.ul`
display:flex;
justify-content:center;
gap:25px;
list-style: none;

`

const StyledLink = styled(Link)`
color:white;
font-size:24px;
text-decoration: none;

`

const CopyRight = styled.p`
text-align:center;
color: white;
margin: 0 0 10px 0;
`
export const Footer = () => {
    
    return (
        <FooterWrapp>
            <LinksWrapp>
               <li> <StyledLink to='/'>Home</StyledLink></li>
               <li> <StyledLink to='/contact'>Contact us</StyledLink></li>
               <li>  <StyledLink to='/about'>About</StyledLink></li>
            </LinksWrapp>
            <CopyRight>@ Copyright 2019</CopyRight>
        </FooterWrapp>
    )
}