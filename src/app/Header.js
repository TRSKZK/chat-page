import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderEl = styled.header`
background-color: #1f1f20;
display: flex;
width: 100%;
height:60px;
// display: flex;
display:grid;
grid-template-columns: 2fr 7fr 3fr;
align-items: center;
padding: 0px 45px 0 45px;

`

const HeaderLogo = styled.a`
text-decoration: none;
color: #8cc054;
font-size: 30px;
margin: 0 36px 0 0;
`
const InfoCont = styled.p`
color: #929293;
font-size:18px
`

const DateCont = styled(InfoCont)`
text-align: end;
`


export const Header = () => {

    const messages = useSelector(state => state.messages.messages)
    
    const users = Object.entries(messages).map(([user, key]) => key.user)

    const uniqUsers = new Set(users)

    const lastMessage = messages.slice(-1)
    
    const lastDate = Object.entries(lastMessage).map(([_,key])=> key.created_at)
   
    return (
        <HeaderEl>
            <HeaderLogo href='#'>My Chat</HeaderLogo>
            <InfoCont> {uniqUsers.size} users  {messages.length} messages</InfoCont>
            <DateCont>Last message date:{lastDate}</DateCont>
        </HeaderEl>
    )

    
}