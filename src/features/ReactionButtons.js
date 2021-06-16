import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faEdit as farEdit, faThumbsDown, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
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

const EditIcon = styled(TrashIcon)`
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
        const messagesIds = Object.entries(messages).map(([i, message]) => message.id === id ? i: null )
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
        return rightMessage
    }
   
    
    const deleteOnClick = () => {
        const rightMessage = findMessageId()
        dispatch(deleteMessage(rightMessage))
    }
    
    const handleAddLikesBtn = () => {
        const messagesIds = Object.entries(messages).map(([_, message]) => message.id === id ? message.id : null )
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
        dispatch(increaseLike(rightMessage))
    }
     
    const handleDislikeBtn = () => {
        const messagesIds = Object.entries(messages).map(([_, message]) => message.id === id ? message.id : null )
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
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
            <EditIcon  user={user} icon={farEdit}/>
        </ReactionWrapp>
    )

}