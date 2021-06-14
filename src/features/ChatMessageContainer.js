import React from 'react'
import styled from 'styled-components'
import {Messages} from './Messages'


const ChatWindow = styled.div`
height: 800px;
width: 100%;
padding:15px 45px 0 45px
`


export const ChatMessageContainer = () => {

    return (
        <ChatWindow>
            <Messages/>
        </ChatWindow>
    )
}
