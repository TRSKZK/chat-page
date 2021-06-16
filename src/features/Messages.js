import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLikeField, fetchMessages } from './MessagesSlice'
import { MessagesEl } from './MessagesEl'




export const Messages = () => {
    const messageStatus = useSelector(state=> state.messages.status)
    const dispatch = useDispatch()

    useEffect(() => {
        if(messageStatus === 'Idle'){
            dispatch(fetchMessages())
        }
        
        dispatch(addLikeField())
    }, [dispatch, messageStatus])
    const messages = useSelector(state => state.messages.messages)
    
    let content;
    if (messageStatus === 'pending') {
        content = <div>Loading...</div>
    } else if (messageStatus === 'completed') {
        content = Object.entries(messages).map(([_, message]) => <MessagesEl message={message} key={ message.id}/> )
    } else if (messageStatus === 'failed') {
        content = <div>Rejected</div>
    }

    return (
        <>
            {content}
        </>
       
    )
}
