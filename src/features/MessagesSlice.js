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

    }

})


export default MessagesSlice.reducer