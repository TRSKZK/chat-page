import React from 'react'
import styled from 'styled-components'
import {Messages} from './Messages'


const ChatWindow = styled.div`
height: 511px;
width: 100%;
padding: 15px 45px 15px 45px;
overflow-y: scroll;
`


export const ChatMessageContainer = () => {

    return (
        <ChatWindow>
            <Messages/>
        </ChatWindow>
    )
}
