import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {deleteMessage} from './MessagesSlice'


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


const ReactionWrapp = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap: 5px;
`
export const ReactionButtons = ({ user, id}) => {
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages.messages)
    const messagesIds = Object.entries(messages).map(([i, message]) => message.id === id ? i: null )
    
    const findIdOnClick = () => {
        const rightMessage = messagesIds.find((messageid) => messageid !== null)
        console.log(rightMessage)
        dispatch(deleteMessage(rightMessage))
    }
    
    
    return (
        <ReactionWrapp>
            <Heart user={user} icon={farHeart} />
            <TrashIcon
                onClick={findIdOnClick}
                user={user} icon={faTrashAlt} />
            <EditIcon  user={user} icon={farEdit}/>
        </ReactionWrapp>
    )

}