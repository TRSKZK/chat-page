import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'


const MessageWrap = styled.div`
width:731px;
height: 104px;
padding:10px;
background-color:#e2e2e2;
border-radius: 5px;
display: flex;
margin: 20px 0 0 0;
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
color: #1f1f1f;
font-size: 18px;
margin-top: -19px;

`
const Heart = styled(FontAwesomeIcon)`
color: #8cc054;
height: 20px;
width:20px;
margin: -10px 0 0px 0;
align-text: end;

`

const PublishedAt = styled.div`
position:absolute;
right:10px;
top:10px;
`
 

export const Messages = () => {
    const messages = useSelector(state => state.messages.messages)
    
    const renderMessage = Object.entries(messages).map(([i, message]) => (
        <MessageWrap key={i}>
            <UserImg src={message.avatar}></UserImg>
            <PublishedAt>{message.created_at}</PublishedAt>
            <TextWrapper>
                <UserName>{message.user}</UserName>
                <MessageEl>{message.message}</MessageEl>
                <Heart className='heart' icon={farHeart}/>
            </TextWrapper>
            
        </MessageWrap>
    ))


    return (
        <>{renderMessage}</>
    )
}