import React from 'react'
import styled from 'styled-components'
import { ReactionButtons } from './ReactionButtons'


const MessageWrap = styled.div`
width:731px;
height: 104px;
padding:10px;
background-color: ${props=> props.user === 'Taras' ? '#4b4d4a' : '#e2e2e2'};
border-radius: 5px;
display: flex;
margin: ${props=> props.user === 'Taras' ? '20px 0 0 524px' : '20px 0 0 0'};
position: relative;
`
const UserImg = styled.img`
width: 77px;
height: 79px
`

const TextWrapper = styled.div`
margin: 0 0 0 10px;
display: flex;
flex-direction:column;

`

const UserName = styled.h1`
color:#8cc054;
font-size: 24px;
`

const MessageEl = styled.p`
color: ${props=> props.user ==='Taras'? 'white' : '#1f1f1f'};
font-size: 18px;
margin-top: -19px;

`


const PublishedAt = styled.div`
position:absolute;
right:10px;
top:10px;
color:#a1a1a1;
`
const ButtonWrapp = styled.div`
margin: ${props=> props.user === "Taras"? '0 0 -10px 0;': '-15px 0 0px 0;'}
display:flex;
gap: 5px;
`


export const MessagesEl = ({message}) => (
    <MessageWrap user={message.user} >
        <UserImg src={message.avatar}></UserImg>
        <PublishedAt>{message.created_at}</PublishedAt>
        <TextWrapper>
            <UserName>{message.user}</UserName>
            <MessageEl user={message.user}>{message.message}</MessageEl>
            <ButtonWrapp user={message.user}>
                <ReactionButtons id={message.id} user={message.user} />
                {message.user === 'Taras' ? null : message.like}
            </ButtonWrapp>
        </TextWrapper>
        
    </MessageWrap>
)