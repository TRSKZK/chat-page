import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    messages: [],
    status: 'Idle',
    error: null,
}


export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await fetch('https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8')
  const data = await response.json()
  return data
  
})




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
  },
  extraReducers: {
    [fetchMessages.pending]: (state, action)=>{
      state.status = 'pending'
    },
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = 'completed'
      state.messages = state.messages.concat(action.payload)
    },
    [fetchMessages.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }

    }

})

export const  {addMessage, deleteMessage, addLikeField, increaseLike} = MessagesSlice.actions
export default MessagesSlice.reducer