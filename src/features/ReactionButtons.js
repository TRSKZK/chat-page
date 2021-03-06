import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {  faThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {deleteMessage, increaseLike, decreaseLike} from './MessagesSlice'


const Heart = styled(FontAwesomeIcon)`
color: #8cc054;
height: 20px;
width:20px;
margin: -10px 0 0 0;
display:${props => props.user === 'Taras' ? 'none' : 'block'};
&:hover {
    cursor:pointer;
}
`

const TrashIcon = styled(Heart)`
display: ${props => props.user === 'Taras' ? 'block' : 'none'};

`


const DislikeButton = styled(Heart)`
position: absolute;
left: 37px;
top: 15px;
`


const ReactionWrapp = styled.div`
display:flex;
position: relative;
align-items: center;
justify-content: center;
gap: 5px;
`
export const ReactionButtons = ({ user, id}) => {
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages.messages)
    
    const findMessageId = () => {
        const messagesIds = Object.entries(messages).map(([_, message]) => message.id === id ? message.id : null )
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
        return rightMessage
    }
    
  
    const deleteOnClick = () => {
        const messagesIds = Object.entries(messages).map(([i, message]) => message.id === id ? i: null )
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
        dispatch(deleteMessage(rightMessage))
    }
    
    const handleAddLikesBtn = () => {
        const rightMessage = findMessageId()
        dispatch(increaseLike(rightMessage))
    }
     
    const handleDislikeBtn = () => {
        const rightMessage = findMessageId()
        dispatch(decreaseLike(rightMessage))
    }
    
    
    
    return (
        <ReactionWrapp>
            <Heart onClick={handleAddLikesBtn} user={user}
                icon={farHeart}></Heart>
            
            <DislikeButton onClick={handleDislikeBtn} user={user} icon={faThumbsDown}/>
            
            <TrashIcon
                onClick={deleteOnClick}
                user={user} icon={faTrashAlt} />
        </ReactionWrapp>
    )

}