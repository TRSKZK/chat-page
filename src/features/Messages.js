import React,{useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { addLikeField, fetchMessages } from './MessagesSlice'
import { MessagesEl } from './MessagesEl'




export const Messages = () => {
    const postStatus = useSelector(state=> state.messages.status)
    const dispatch = useDispatch()

    useEffect(() => {
        if(postStatus === 'Idle'){
            dispatch(fetchMessages())
        }
        
        dispatch(addLikeField())
    }, [dispatch, postStatus])

    const messages = useSelector(state => state.messages.messages)

    
    let content;

    if (postStatus === 'pendind') {
        content = <div>Loading...</div>
    } else if (postStatus === 'completed') {
        content = Object.entries(messages).map(([_, message]) => <MessagesEl message={message} key={ message.id}/> )
    } else if (postStatus === 'failed') {
        content = <div>Rejected</div>
    }

    return (
        <>
            {content}
        </>
       
    )
}
