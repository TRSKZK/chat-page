import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    messages: [{
        "id": "9333000183101",
        "user": "Kate",
        "avatar": "https://i.pravatar.cc/300?img=5",
        "created_at": "2021-05-17 23:30:11",
        "message": "Hey, guys! Have you seen the new episode of 'Black Mirror'?"
      },
      {
        "id": "9333000183102",
        "user": "Dave",
        "avatar": "https://i.pravatar.cc/300?img=14",
        "created_at": "2021-05-17 23:54:45",
        "message": "Nay, not yet:-("
        },
        {
            "id": "9333000183102",
            "user": "Dave",
            "avatar": "https://i.pravatar.cc/300?img=14",
            "created_at": "2021-05-17 23:54:45",
            "message": "Nay, not yet:-("
          }],
    
    status: 'Idle',
    error: null,
}

const MessagesSlice = createSlice({
    name: 'messages',
    initialState,

    reducers: {
      addMessage: {
        reducer(state, action) {
          state.messages.push(action.payload)
        },

        prepare(message) {
          return {
            payload: {
              id: nanoid(),
              user: "Taras",
              avatar: "https://i.pravatar.cc/300?img=14",
              created_at: new Date().toLocaleString(),
              message,
              like: 0
            }
            
          }
        }
      },

      deleteMessage(state, action) {
        const id = action.payload
        state.messages.splice(id, 1)
        
      },

      addLikeField(state, action) {
        const messages = state.messages
        Object.entries(messages).forEach(([i, key])=> key.like=0)
      },
      increaseLike(state, action) {
        const id = action.payload
        const existingMessage = state.messages.find(message => message.id === id)
        console.log(id);
        if(existingMessage) existingMessage.like += 1
      }
    }

})

export const  {addMessage, deleteMessage, addLikeField, increaseLike} = MessagesSlice.actions
export default MessagesSlice.reducer