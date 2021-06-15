import React,{useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addMessage } from './MessagesSlice'


const MessageForm = styled.form`
background-color:#e2e2e2;
display: flex;
padding: 19px 25px;
align-items: center;
justify-content: center;
gap:10px;

`

const TextInput = styled.input`
width:1127px;
height: 64px;
font-size:18px;
color: black;
padding: 10px;
border: none;
border-radius: 10px;
&:focus{
    outline:none;
}
`

const SendMessageBtn = styled.button`
background-color:#8cc054;
width: 249px;
height: 64px;
padding-top: 5px;
color:white;
border-radius: 10px;
font-size: 30px;
border: none;
display: flex;
justify-content:center;
// align-items: center;
font-weight: bold;

`

export const TypeMessageForm = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState(``)
    
    const handleMessageTyping = e => setMessage(e.target.value)

    return (
        <MessageForm>
            <TextInput
                type='text'
                placeholder='Type something...'
                value={message}
                onChange={ handleMessageTyping}
            />
            <SendMessageBtn onClick={(e) => {
                e.preventDefault()
                dispatch(addMessage(message))
                setMessage('')
            }}>Send</SendMessageBtn>
        </MessageForm>
    )
}